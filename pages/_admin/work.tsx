import styled from "styled-components";
import { setAction, ActionType, useAction } from "../../Context/AdminProvider";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { useQuery, useMutation } from "@apollo/client";
import { GET_WORK, UPLOAD_WORK, UPDATE_WORK, DELETE_WORK } from "../../Queries/workQueries";
import ContainerAdminLayout from "../../Layout/ContainerAdminLayout";
import TitleLg from "../../Component/text/TitleLg";
import AdminList from "../../Component/admin/AdminList";
import ListWrapper from "../../Component/admin/ListWrapper";
import AdminForm from "../../Component/admin/AdminForm";
import { AdminFormContents } from "../../Component/text/interface";
import useInput from "../../Hook/useInput";
import useInputFile from "../../Hook/useInputFile";
import { fbUploadStorage, fbDeleteStorage } from "../../Firebase/firebase";

import { UPLOAD_IMAGES, UPDATE_IMAGE } from "../../Queries/imageQuries";
import { ISLOGIN } from "../../Queries/adminQueries";

const Wrapper = styled.div`
	padding-top: ${(props) => props.theme.size.padding_top_admin.pc};
	/* padding-top: 40px; */
`;

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
	const [deleteWorkMutation] = useMutation(DELETE_WORK);
	const [nowData, setNowData] = useState();
	const [deleteImage, setDeleteImage] = useState([]);

	const titleInput = useInput("");
	const dateInput = useInput("");
	const descriptInput = useInput("");
	const filesInput = useInputFile();

	useEffect(() => {
		if (isLoggedIn === false || isLoggedIn === null) {
			push("/_admin");
		}
	}, [isLoggedIn]);

	useEffect(() => {
		if (data) {
			setClientData([...data.getWork]);
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
					id: nowData.id,
					title: titleInput.value,
					date: dateInput.value,
					descript: descriptInput.value,
					deleteImage: deleteImage,
					addImages: connectedImagesId
				}
			});

			setClientData((n) => n.map((el) => (el.id === nowData.id ? newData : el)));
		}
		initAdmin();
	};

	const handleThumbnailClick = (data) => {
		console.log("handleThumbnailClick");

		// client
		filesInput.setFiles((n) => n.filter((el) => el !== data));

		if (data.id) {
			setDeleteImage((n) => [...n, data.id]);
		}
	};

	const handleListClick = (data) => {
		setNowData(data);
		setActionState(ActionType.EDIT);

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
		setActionState(ActionType.NULL);
		setDeleteImage([]);
		setNowData(null);
	};

	const handleDeleteClick = async () => {
		console.log("handleDeleteClick");
		try {
			await deleteWorkMutation({
				variables: {
					id: nowData.id
				}
			});
			nowData.images.forEach((el) => {
				fbDeleteStorage(el.id);
			});
			setClientData((n) => n.filter((el) => el.id !== nowData.id));
		} catch (err) {
			console.log(err);
		}
		initAdmin();
	};

	const formContents: AdminFormContents[] = [
		{ ...dateInput, label: "date", placeholder: "2020_09" },
		{ ...descriptInput, label: "descript" },
		{ ...filesInput, label: "image", type: "file", onThumbnailClick: handleThumbnailClick }
	];

	return (
		<Wrapper>
			<ContainerAdminLayout>
				<TitleLg title="work" icons={[{ icon: "plus", onClick: handleAddClick }]} />
				<ListWrapper>
					{clientData &&
						clientData.map((el) => {
							return <AdminList key={el.id} id={el.id} image={el.images[0].url} title={el.title} date={el.date} onClick={() => handleListClick(el)} />;
						})}
				</ListWrapper>
			</ContainerAdminLayout>

			<AdminForm title={"add work"} titleInput={titleInput} contents={formContents} onSubmit={handleSubmit} onCloseClick={handleCloseClick} onDeleteClilck={handleDeleteClick} />
		</Wrapper>
	);
};

export default work;
