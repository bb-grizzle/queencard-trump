import AdminWrapper from "../../Component/admin/AdminWrapper";
import ContainerAdminLayout from "../../Layout/ContainerAdminLayout";
import TitleLg from "../../Component/text/TitleLg";
import ListWrapper from "../../Component/admin/ListWrapper";
import { useState, useEffect } from "react";
import AdminList from "../../Component/admin/AdminList";
import AdminForm from "../../Component/admin/AdminForm";
import useInput from "../../Hook/useInput";
import { AdminFormContents, InsperationData } from "../../interface/interface";
import useInputFile from "../../Hook/useInputFile";
import { ActionType, setAction, useAction } from "../../Context/AdminProvider";
import { useLoading, setLoading } from "../../Context/AppProvider";
import { useQuery, useMutation } from "@apollo/client";
import { GET_INSPERATION, UPLOAD_INSPERATION, UPDATE_INSPERATION, DELETE_INSPERATION } from "../../Queries/insperationQuries";
import { ISLOGIN } from "../../Queries/adminQueries";
import { UPLOAD_IMAGES, UPDATE_IMAGE } from "../../Queries/imageQuries";
import { fbUploadStorage, fbDeleteStorage } from "../../Firebase/firebase";
import { useRouter } from "next/dist/client/router";

const insperation = () => {
	const [clientData, setClientData] = useState([]);
	const [nowData, setNowData] = useState<InsperationData>();
	const setActionState = setAction();
	const [deleteImage, setDeleteImage] = useState("");
	const setloading = setLoading();
	const { push } = useRouter();

	const titleInput = useInput("");
	const fileInput = useInputFile();
	const nowAction = useAction();

	// QUERIES
	const { data, loading } = useQuery(GET_INSPERATION);
	const {
		data: { isLoggedIn }
	} = useQuery(ISLOGIN);
	const [uploadImagesMutation] = useMutation(UPLOAD_IMAGES);
	const [updateImageMutation] = useMutation(UPDATE_IMAGE);
	const [uploadInsperationMutation] = useMutation(UPLOAD_INSPERATION);
	const [updateInsperationMutation] = useMutation(UPDATE_INSPERATION);
	const [deleteInsperationMutation] = useMutation(DELETE_INSPERATION);
	useEffect(() => {
		initAdmin();
	}, []);
	useEffect(() => {
		setloading(loading);
		if (data) {
			setClientData(data.getInsperation);
		}
	}, [loading]);

	useEffect(() => {
		if (isLoggedIn === false || isLoggedIn === null) {
			push("/_admin");
		}
	}, [isLoggedIn]);

	const initAdmin = () => {
		setTimeout(() => {
			titleInput.setValue("");
			fileInput.setFiles({ file: null, url: "" });
		}, 500);
		setDeleteImage("");
		setActionState(ActionType.NULL);
		setNowData(null);
		setloading(false);
	};

	const handleAddClick = () => {
		setActionState(ActionType.ADD);
	};
	const handleListClick = (data) => {
		setNowData(data);
		setDeleteImage(data.thumbnail.id);
		setActionState(ActionType.EDIT);
		titleInput.setValue(data.title);
		fileInput.setFiles(data.thumbnail);
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		if (!titleInput.value) {
			alert("양식을 모두 채워주세요 😀");
			return;
		}

		if (!fileInput.files) {
			alert("이미지를 한장 이상 업로드 해주세요. 🖼");
			return;
		}

		setloading(true);

		try {
			let connectId = "";
			// 01. prisma | 이미지 업로드
			const uploadFile = fileInput.files.file || undefined;

			if (uploadFile !== undefined) {
				const {
					data: { uploadImage }
				} = await uploadImagesMutation({ variables: { urls: [uploadFile.name] } });

				// 02. firebase | id 이름으로 이미지 파일 업로드
				const fbUploaded = await fbUploadStorage("", uploadImage[0].id, uploadFile);
				const url = fbUploaded.fileUrl;

				// 03. update Image
				const newImages = await updateImageMutation({
					variables: {
						ids: [uploadImage[0].id],
						urls: [url]
					}
				});
				connectId = newImages.data.updateImage[0].id;
			}

			// // 04. upload work

			if (nowAction === ActionType.ADD) {
				// UPLOAD
				const {
					data: { uploadInsperation: newData }
				} = await uploadInsperationMutation({
					variables: {
						title: titleInput.value,
						imageId: connectId
					}
				});
				setClientData((n) => [{ ...newData }, ...n]);
			} else if (nowAction === ActionType.EDIT) {
				// UPDATE
				// - fb delete storage
				if (fileInput.files.file !== undefined) {
					deleteImage && fbDeleteStorage(deleteImage);
				}

				const {
					data: { updateInsperation: newData }
				} = await updateInsperationMutation({
					variables: {
						id: nowData.id,
						title: titleInput.value,
						imageId: connectId
					}
				});
				setClientData((n) => n.map((el) => (el.id === nowData.id ? newData : el)));
			}
		} catch (err) {
			console.log(err);
			alert("😎 You need to log in!");
			// logUserOut();
		}

		initAdmin();
	};

	const handleCloseClick = () => {
		initAdmin();
	};

	const handleDeleteClick = async () => {
		if (!window.confirm("정말 삭제하시겠습니까? 😩")) {
			return;
		}
		setloading(true);
		try {
			await deleteInsperationMutation({
				variables: {
					id: nowData.id
				}
			});

			if (nowData !== null && nowData !== undefined) {
				fbDeleteStorage(nowData.thumbnail.id);
			}

			setClientData((n) => n.filter((el) => el.id !== nowData.id));
		} catch (err) {
			console.log(err);
		}
		initAdmin();
	};

	const formContents: AdminFormContents[] = [{ ...fileInput, label: "image", type: "file", isOneImage: true }];

	return (
		<AdminWrapper>
			<ContainerAdminLayout>
				<TitleLg title="insperation" icons={[{ icon: "plus", onClick: handleAddClick }]} />
				<ListWrapper>
					{clientData &&
						clientData.map((el) => {
							return <AdminList key={el.id} id={el.id} image={el.thumbnail.url} title={el.title} date={el.date} onClick={() => handleListClick(el)} />;
						})}
				</ListWrapper>
			</ContainerAdminLayout>

			<AdminForm title={"add Insperation"} titleInput={titleInput} contents={formContents} onSubmit={handleSubmit} onCloseClick={handleCloseClick} onDeleteClilck={nowData && handleDeleteClick} />
		</AdminWrapper>
	);
};

export default insperation;
