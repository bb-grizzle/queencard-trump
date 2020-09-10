import { setAction, ActionType, useAction } from "../../Context/AdminProvider";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { useQuery, useMutation } from "@apollo/client";
import { GET_WORK, UPLOAD_WORK, UPDATE_WORK, DELETE_WORK } from "../../Queries/workQueries";
import ContainerAdminLayout from "../../Layout/ContainerAdminLayout";
import TitleLg from "../../Component/text/TitleLg";
import ListWrapper from "../../Component/admin/ListWrapper";
import AdminForm from "../../Component/admin/AdminForm";
import { AdminFormContents, WorkData } from "../../interface/interface";
import useInput from "../../Hook/useInput";
import useInputFile from "../../Hook/useInputManyFile";
import { fbUploadStorage, fbDeleteStorage } from "../../Firebase/firebase";
import { UPLOAD_IMAGES, UPDATE_IMAGE } from "../../Queries/imageQuries";
import { ISLOGIN, LOCAL_LOGOUT_QUERY } from "../../Queries/adminQueries";
import { setLoading } from "../../Context/AppProvider";
import AdminWrapper from "../../Component/admin/AdminWrapper";
import AdminList from "../../Component/admin/AdminList";

const work = () => {
	const [clientData, setClientData] = useState([]);
	const { push } = useRouter();
	const { data } = useQuery(GET_WORK);
	const setActionState = setAction();
	const nowAction = useAction();
	const [uploadImagesMutation] = useMutation(UPLOAD_IMAGES);
	const [updateImageMutation] = useMutation(UPDATE_IMAGE);
	const [uploadWorkMutation] = useMutation(UPLOAD_WORK);
	const [updateWorkMutation] = useMutation(UPDATE_WORK);
	const {
		data: { isLoggedIn }
	} = useQuery(ISLOGIN);
	const [logUserOut] = useMutation(LOCAL_LOGOUT_QUERY);
	const [deleteWorkMutation] = useMutation(DELETE_WORK);
	const [nowData, setNowData] = useState<WorkData | null>();
	const [nowId, setNowId] = useState("");
	const [deleteImage, setDeleteImage] = useState([]);

	const titleInput = useInput("");
	const dateInput = useInput("");
	const descriptInput = useInput("");
	const filesInput = useInputFile();
	const setloading = setLoading();

	useEffect(() => {
		if (isLoggedIn === false || isLoggedIn === null) {
			push("/_admin");
		}
	}, [isLoggedIn]);

	useEffect(() => {
		setloading(true);
	}, []);

	useEffect(() => {
		if (data) {
			setClientData([...data.getWork]);
			setloading(false);
		}
	}, [data]);

	const handleAddClick = () => {
		setActionState(ActionType.ADD);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!titleInput.value || !dateInput.value || !descriptInput.value) {
			alert("양식을 모두 채워주세요 😀");
			return;
		}

		if (filesInput.files.length === 0) {
			alert("이미지를 한장 이상 업로드 해주세요. 🖼");
			return;
		}

		setloading(true);

		try {
			// 01. prisma | 이미지 업로드
			const uploadImages = filesInput.files.filter((el) => Boolean(el.file));
			const imageNames = uploadImages.map((el) => el.file.name);
			const uploadedImages = await uploadImagesMutation({ variables: { urls: imageNames } });
			const ids = uploadedImages.data.uploadImage.map((el) => el.id);

			// 02. firebase | id 이름으로 이미지 파일 업로드
			const fbUploads = await Promise.all(
				uploadImages.map((el, index) => {
					return fbUploadStorage("", ids[index], el.file);
				})
			);
			const urls = fbUploads.map((el) => el.fileUrl);

			// 03. update Image
			const newImages = await updateImageMutation({
				variables: {
					ids,
					urls
				}
			});

			// 04. upload work
			const connectedImagesId = newImages.data.updateImage.map((el) => el.id);

			if (nowAction === ActionType.ADD) {
				const {
					data: { uploadWork: newData }
				} = await uploadWorkMutation({
					variables: {
						title: titleInput.value,
						date: dateInput.value,
						descript: descriptInput.value,
						images: connectedImagesId
					}
				});
				setClientData((n) => [{ ...newData, images: newImages.data.updateImage }, ...n]);
			} else if (nowAction === ActionType.EDIT) {
				// delete images on firebase
				deleteImage.forEach((el) => {
					fbDeleteStorage(el);
				});

				const {
					data: { updateWork: newData }
				} = await updateWorkMutation({
					variables: {
						id: nowId,
						title: titleInput.value,
						date: dateInput.value,
						descript: descriptInput.value,
						deleteImage: deleteImage,
						addImages: connectedImagesId
					}
				});

				setClientData((n) => n.map((el) => (el.id === nowId ? newData : el)));
			}
		} catch (err) {
			console.log(err);
			alert("😎 You need to log in!");
			logUserOut();
		}

		initAdmin();
	};

	const handleThumbnailClick = (data) => {
		// client
		filesInput.setFiles((n) => n.filter((el) => el !== data));
		if (data.id) {
			setDeleteImage((n) => [...n, data.id]);
		}
	};

	const handleListClick = (data) => {
		setNowData(data);
		setActionState(ActionType.EDIT);
		setNowId(data.id);

		titleInput.setValue(data.title);
		dateInput.setValue(data.date);
		descriptInput.setValue(data.descript);
		filesInput.setFiles(data.images);
	};

	const handleCloseClick = () => {
		setActionState(ActionType.NULL);
		initAdmin();
	};

	const initAdmin = () => {
		setTimeout(() => {
			titleInput.setValue("");
			dateInput.setValue("");
			descriptInput.setValue("");
			filesInput.setFiles([]);
		}, 500);
		setDeleteImage([]);
		setNowId("");
		setActionState(ActionType.NULL);
		setNowData(null);
		setloading(false);
	};

	const handleDeleteClick = async () => {
		if (!window.confirm("정말 삭제하시겠습니까? 😩")) {
			return;
		}
		setloading(true);
		try {
			await deleteWorkMutation({
				variables: {
					id: nowId
				}
			});

			if (nowData !== null && nowData !== undefined) {
				nowData.images.forEach((el) => {
					fbDeleteStorage(el.id);
				});
			}

			setClientData((n) => n.filter((el) => el.id !== nowData.id));
		} catch (err) {
			console.log(err);
		}
		initAdmin();
	};

	const formContents: AdminFormContents[] = [
		{ ...dateInput, label: "date", placeholder: "2020_09" },
		{ ...descriptInput, label: "descript", type: "textarea" },
		{ ...filesInput, label: "image", type: "file", onThumbnailClick: handleThumbnailClick }
	];

	return (
		<AdminWrapper>
			<ContainerAdminLayout>
				<TitleLg title="work" icons={[{ icon: "plus", onClick: handleAddClick }]} />
				<ListWrapper>
					{clientData &&
						clientData.map((el) => {
							return <AdminList key={el.id} id={el.id} image={el.images[0].url} title={el.title} date={el.date} onClick={() => handleListClick(el)} />;
						})}
				</ListWrapper>
			</ContainerAdminLayout>

			<AdminForm title={"add work"} titleInput={titleInput} contents={formContents} onSubmit={handleSubmit} onCloseClick={handleCloseClick} onDeleteClilck={nowData && handleDeleteClick} />
		</AdminWrapper>
	);
};

export default work;
