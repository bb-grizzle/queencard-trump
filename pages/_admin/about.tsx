import styled from "styled-components";
import AdminWrapper from "../../Component/admin/AdminWrapper";
import ContainerAdminLayout from "../../Layout/ContainerAdminLayout";
import TitleLg from "../../Component/text/TitleLg";
import useInput from "../../Hook/useInput";
import { useState, useEffect } from "react";
import AdminForm from "../../Component/admin/AdminForm";
import { ActionType, setAction, useAction } from "../../Context/AdminProvider";
import { setLoading } from "../../Context/AppProvider";
import { useMutation, useQuery } from "@apollo/client";
import { UPLOAD_INFO, GET_ALLINFO, UPDATE_INFO, DELETE_INFO } from "../../Queries/infoQuries";
import ListWrapper from "../../Component/admin/ListWrapper";
import AdminInfoList from "../../Component/admin/AdminInfoList";
import TitleMd from "../../Component/text/TitleMd";
import { InfoData } from "../../interface/interface";

const FieldGroup = styled.div`
	width: 100%;
	&:not(:first-child) {
		margin-top: 64px;
	}
`;

const about = () => {
	const [clientData, setClientData] = useState({
		EDUCATION: [],
		EXHIBITION: [],
		AWARD: []
	});
	const yearInput = useInput("");
	const fieldInput = useInput("EDUCATION");
	const textInput = useInput("");
	const priorityInput = useInput("");
	const [nowData, setNowData] = useState<InfoData>();
	const setActionState = setAction();
	const setloading = setLoading();
	const nowAction = useAction();
	const [preField, setPreField] = useState("");

	// QURIES
	const [uploadInfoMutation] = useMutation(UPLOAD_INFO);
	const [updateInfoMutation] = useMutation(UPDATE_INFO);
	const [deleteInfoMutation] = useMutation(DELETE_INFO);
	const { data, loading } = useQuery(GET_ALLINFO);

	useEffect(() => {
		setloading(loading);
		if (!loading) {
			data.getAllInfo.forEach((el) => {
				const field = el.field;
				setClientData((n) => ({
					...n,
					[field]: n[field].concat(el)
				}));
			});
		}
	}, [loading]);

	const initAdmin = () => {
		setTimeout(() => {
			yearInput.setValue("");
			fieldInput.setValue("");
			textInput.setValue("");
			priorityInput.setValue("");
		}, 500);
		setActionState(ActionType.NULL);
		setloading(false);
		setNowData(null);
	};

	const handleAddClick = () => {
		setActionState(ActionType.ADD);
	};

	const handleListClick = (data) => {
		setNowData(data);
		setActionState(ActionType.EDIT);
		textInput.setValue(data.text);
		fieldInput.setValue(data.field);
		yearInput.setValue(data.year);
		priorityInput.setValue(data.priority);
		setPreField(data.field);
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		if (yearInput.value === "" || fieldInput.value === "" || textInput.value === "" || priorityInput.value === "") {
			alert("양식을 모두 채워주세요 😀");
			return;
		}

		setloading(true);

		if (nowAction === ActionType.ADD) {
			try {
				const { data } = await uploadInfoMutation({
					variables: {
						year: +yearInput.value,
						text: textInput.value,
						field: fieldInput.value,
						priority: +priorityInput.value
					}
				});
				const newData = data.uploadInfo;

				setClientData((n) => ({ ...n, [newData.field]: [newData, ...n[newData.field]] }));
			} catch (err) {
				console.log(err);
			}
		} else if (nowAction === ActionType.EDIT) {
			try {
				const { data } = await updateInfoMutation({
					variables: {
						id: nowData.id,
						year: +yearInput.value,
						field: fieldInput.value,
						text: textInput.value,
						priority: +priorityInput.value
					}
				});
				const newData = data.updateInfo;
				if (preField === newData.field) {
					setClientData((n) => {
						return { ...n, [newData.field]: n[newData.field][0] ? n[newData.field].map((el) => (el.id === newData.id ? newData : el)) : [newData] };
					});
				} else {
					setClientData((n) => {
						return { ...n, [preField]: n[preField].filter((el) => el.id !== newData.id), [newData.field]: [newData, ...n[newData.field]] };
					});
				}
			} catch (err) {
				console.log(err);
			}
		}
		initAdmin();
	};

	const handleCloseClick = () => {
		initAdmin();
	};

	const handleDeleteClick = async ({ id, field }) => {
		if (!window.confirm("정말 삭제하시겠습니까? 😩")) {
			return;
		}
		try {
			setloading(true);
			await deleteInfoMutation({ variables: { id } });
			setClientData((n) => {
				return { ...n, [field]: n[field].filter((el) => el.id !== id) };
			});
		} catch (err) {
			console.log(err);
		}
		initAdmin();
	};

	const formContents = [
		{ ...fieldInput, label: "field", type: "dropdown" },
		{ ...yearInput, label: "year", type: "number" },
		{ ...priorityInput, label: "priority", type: "number" }
	];
	return (
		<AdminWrapper>
			<ContainerAdminLayout>
				<TitleLg title="about" icons={[{ icon: "plus", onClick: handleAddClick }]} />
				<ListWrapper>
					{clientData &&
						Object.keys(clientData).map((el, index) => {
							return (
								<FieldGroup key={`${el}_${index}`}>
									<TitleMd title={`- ${el}`} />
									{clientData[el].map((list) => (
										<AdminInfoList key={list.id} year={list.year} priority={list.priority} text={list.text} onClick={() => handleListClick(list)} onDeleteClick={() => handleDeleteClick(list)} />
									))}
								</FieldGroup>
							);
						})}
				</ListWrapper>
			</ContainerAdminLayout>
			<AdminForm title={"add about info"} titleInput={textInput} contents={formContents} onSubmit={handleSubmit} onCloseClick={handleCloseClick} onDeleteClilck={nowData && handleDeleteClick} />
		</AdminWrapper>
	);
};

export default about;
