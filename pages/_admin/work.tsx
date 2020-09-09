import styled from "styled-components";
import { useisAdminLogin, setAction, ActionType, useAction } from "../../Context/AdminProvider";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { useQuery, useMutation } from "@apollo/client";
import { GET_WORK, UPLOAD_WORK, UPDATE_WORK } from "../../Queries/workQueries";
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

const Wrapper = styled.div`
	padding-top: ${(props) => props.theme.size.padding_top_admin.pc};
	/* padding-top: 40px; */
`;

const work = () => {
	const [clientData, setClientData] = useState([]);
	const { push } = useRouter();
	const isLogin = useisAdminLogin();
	const { data } = useQuery(GET_WORK);
	const setActionState = setAction();
	const nowAction = useAction();
	const [uploadImagesMutation] = useMutation(UPLOAD_IMAGES);
	const [updateImageMutation] = useMutation(UPDATE_IMAGE);
	const [uploadWorkMutation] = useMutation(UPLOAD_WORK);
	const [updateWorkMutation] = useMutation(UPDATE_WORK);
	const [nowId, setNowId] = useState("");
	const [deleteImage, setDeleteImage] = useState([]);

	const titleInput = useInput("");
	const dateInput = useInput("");
	const descriptInput = useInput("");
	const filesInput = useInputFile();

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
		if (!titleInput.value || !dateInput.value || !descriptInput.value || !filesInput.files) {
			alert("양식을 모두 채워주세요 😀");
			return;
		}

		// 01. prisma | 이미지 업로드
		const uploadImages = filesInput.files.filter((el) => Boolean(el.file));
		const imageNames = uploadImages.map((el) => el.file.name);
		const uploadedImages = await uploadImagesMutation({ variables: { urls: imageNames } });
		const ids = uploadedImages.data.uploadImage.map((el) => el.id);

		// 02. firebase | 이미지 파일 업로드
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
			console.log(newData);
			setClientData((n) => [{ ...newData, images: newImages.data.updateImage }, ...n]);
		} else if (nowAction === ActionType.EDIT) {
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

			console.log(newData);
			// setClientData((n) => [{ ...updateData, images: newImages.data.updateImage }, ...n]);
		}
		initAdmin();
		setActionState(ActionType.NULL);
	};

	useEffect(() => {
		console.log(deleteImage);
	}, [deleteImage]);

	const handleThumbnailClick = (data) => {
		console.log("handleThumbnailClick");

		// client
		filesInput.setFiles((n) => n.filter((el) => el !== data));

		if (data.id) {
			setDeleteImage((n) => [...n, data.id]);
		}
	};

	const handleListClick = (data) => {
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
	};

	const handleDeleteClick = (id) => {
		console.log("handleDeleteClick");
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
