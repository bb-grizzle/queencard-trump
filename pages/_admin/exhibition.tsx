import AdminWrapper from "../../Component/admin/AdminWrapper";
import ContainerAdminLayout from "../../Layout/ContainerAdminLayout";
import TitleLg from "../../Component/text/TitleLg";
import ListWrapper from "../../Component/admin/ListWrapper";
import { useState, useEffect } from "react";
import AdminList from "../../Component/admin/AdminList";
import { ActionType, setAction, useAction } from "../../Context/AdminProvider";
import AdminForm from "../../Component/admin/AdminForm";
import useInput from "../../Hook/useInput";
import { AdminFormContents, ExhibitionData } from "../../interface/interface";
import useInputFile from "../../Hook/useInputManyFile";
import { setLoading } from "../../Context/AppProvider";
import { useQuery, useMutation } from "@apollo/client";
import { GET_EXHIBITION, UPLOAD_EXHIBITION, UPDATE_EXHIBITION, DELETE_EXHIBITION } from "../../Queries/exhibitionQueries";
import { UPLOAD_IMAGES, UPDATE_IMAGE } from "../../Queries/imageQuries";
import { fbUploadStorage, fbDeleteStorage } from "../../Firebase/firebase";
import { LOCAL_LOGOUT_QUERY, ISLOGIN } from "../../Queries/adminQueries";
import { useRouter } from "next/dist/client/router";

const exhibition = () => {
	const [clientData, setClientData] = useState([]);
	const { push } = useRouter();
	const setActionState = setAction();
	const nowAction = useAction();

	// state
	const titleInput = useInput("");
	const descriptInput = useInput("");
	const galleryInput = useInput("");
	const dateInput = useInput("");
	const locationInput = useInput("");
	const linkInput = useInput("");
	const filesInput = useInputFile();
	const [nowData, setNowData] = useState<ExhibitionData>();
	const [nowId, setNowId] = useState("");
	const [deleteImage, setDeleteImage] = useState([]);
	const setloading = setLoading();

	// query
	// -admin
	const {
		data: { isLoggedIn }
	} = useQuery(ISLOGIN);
	const [logUserOut] = useMutation(LOCAL_LOGOUT_QUERY);
	// -exhibition
	const { data, loading } = useQuery(GET_EXHIBITION);
	const [uploadImagesMutation] = useMutation(UPLOAD_IMAGES);
	const [updateImageMutation] = useMutation(UPDATE_IMAGE);
	const [uploadExhibitionMutation] = useMutation(UPLOAD_EXHIBITION);
	const [updateExhibitionMutation] = useMutation(UPDATE_EXHIBITION);
	const [deleteExhibitionMutation] = useMutation(DELETE_EXHIBITION);

	useEffect(() => {
		setloading(loading);
		if (data) {
			setClientData(data.getExhibition);
		}
	}, [loading]);

	useEffect(() => {
		if (isLoggedIn === false || isLoggedIn === null) {
			// push("/_admin");
		}
	}, [isLoggedIn]);

	const initAdmin = () => {
		setTimeout(() => {
			titleInput.setValue("");
			galleryInput.setValue("");
			dateInput.setValue("");
			locationInput.setValue("");
			linkInput.setValue("");
			descriptInput.setValue("");
			filesInput.setFiles([]);
		}, 500);
		setDeleteImage([]);
		setActionState(ActionType.NULL);
		setNowData(null);
		setloading(false);
	};

	const handleAddClick = () => {
		setActionState(ActionType.ADD);
	};

	const handleListClick = (data) => {
		setNowData(data);
		setNowId(data.id);
		setActionState(ActionType.EDIT);

		titleInput.setValue(data.title);
		galleryInput.setValue(data.gallery);
		dateInput.setValue(data.date);
		locationInput.setValue(data.location);
		linkInput.setValue(data.link);
		descriptInput.setValue(data.descript);
		filesInput.setFiles(data.images);
	};

	const handleThumbnailClick = (data) => {
		// client
		filesInput.setFiles((n) => n.filter((el) => el !== data));
		if (data.id) {
			setDeleteImage((n) => [...n, data.id]);
		}
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		if (!titleInput.value || !galleryInput.value || !dateInput.value || !locationInput.value || !descriptInput.value) {
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
				// UPLOAD
				const {
					data: { uploadExhibition: newData }
				} = await uploadExhibitionMutation({
					variables: {
						title: titleInput.value,
						gallery: galleryInput.value,
						date: dateInput.value,
						location: locationInput.value,
						link: linkInput.value,
						descript: descriptInput.value,
						images: connectedImagesId
					}
				});
				setClientData((n) => [{ ...newData, images: newImages.data.updateImage }, ...n]);
			} else if (nowAction === ActionType.EDIT) {
				// UPDATE

				// delete images on firebase
				deleteImage &&
					deleteImage.forEach((el) => {
						fbDeleteStorage(el);
					});

				const {
					data: { updateExhibition: newData }
				} = await updateExhibitionMutation({
					variables: {
						id: nowId,
						title: titleInput.value,
						gallery: galleryInput.value,
						date: dateInput.value,
						location: locationInput.value,
						link: linkInput.value,
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

	const handleCloseClick = () => {
		initAdmin();
	};
	const handleDeleteClick = async () => {
		if (!window.confirm("정말 삭제하시겠습니까? 😩")) {
			return;
		}
		setloading(true);
		try {
			await deleteExhibitionMutation({
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
		{ ...descriptInput, label: "descript", type: "textarea" },
		{ ...galleryInput, label: "gallery" },
		{ ...dateInput, label: "date", placeholder: "2020.08.05 Wed - 08.30 Sun" },
		{ ...locationInput, label: "location" },
		{ ...linkInput, label: "link" },
		{ ...filesInput, label: "image", type: "file", onThumbnailClick: handleThumbnailClick }
	];

	return (
		<AdminWrapper>
			<ContainerAdminLayout>
				<TitleLg title="exhibition" icons={[{ icon: "plus", onClick: handleAddClick }]} />
				<ListWrapper>
					{clientData &&
						clientData.map((el) => {
							return <AdminList key={el.id} id={el.id} image={el.images[0].url} title={el.title} date={el.date} onClick={() => handleListClick(el)} />;
						})}
				</ListWrapper>
			</ContainerAdminLayout>

			<AdminForm title={"add exhibition"} titleInput={titleInput} contents={formContents} onSubmit={handleSubmit} onCloseClick={handleCloseClick} onDeleteClilck={nowData && handleDeleteClick} />
		</AdminWrapper>
	);
};

export default exhibition;
