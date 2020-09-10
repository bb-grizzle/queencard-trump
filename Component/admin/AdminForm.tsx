import styled from "styled-components";
import ContainerAdminLayout from "../../Layout/ContainerAdminLayout";
import TitleLg from "../text/TitleLg";
import { useAction } from "../../Context/AdminProvider";
import InputDefault from "../input/InputDefault";
import InputFile from "../input/InputFile";
import theme from "../../Styles/theme";
import Submit from "../input/Submit";
import { AdminFormContents } from "../../interface/interface";
import InputTextArea from "../input/inputTextarea";

interface AdminFormProps {
	title: string;
	titleInput: any;
	contents: AdminFormContents[];
	onSubmit: any;
	onCloseClick: any;
	onDeleteClilck?: any;
}

const Wrapper = styled.div<{ active: boolean }>`
	padding-top: ${(props) => props.theme.size.header.pc};
	position: fixed;
	width: 100%;
	${(props) => props.theme.layout.full_height};
	top: 0;
	background-color: white;
	left: 0;
	z-index: ${(props) => props.theme.zIndex.adminForm};
	transform: ${(props) => (props.active ? "translateY(0%);" : "translateY(100%);")};
	transition: ${(props) => props.theme.transition.default};
	overflow: scroll;
	padding-bottom: ${(props) => props.theme.size.padding_bottom_admin.pc};
`;

const Div = styled.div`
	width: 100%;
	height: 1px;
	background-color: ${(props) => props.theme.color.gray.light};
	margin-bottom: 40px;
`;

const FormWrapper = styled.form`
	/* border: 2px solid red; */
	box-sizing: content-box;
`;

const Container = styled(ContainerAdminLayout)`
	height: initial;
`;

const FormRow = styled.div`
	border-bottom: 1px solid ${theme.color.bg};
	margin-bottom: 16px;

	&:nth-last-child(2) {
		border: none;
	}
`;

const AdminForm: React.FC<AdminFormProps> = ({ title, contents, titleInput, onSubmit, onCloseClick, onDeleteClilck }) => {
	const handleCloseClick = () => {
		onCloseClick();
	};
	const handleDeleteClick = () => {
		onDeleteClilck();
	};
	const useaction = useAction();

	const renderInput = (el) => {
		switch (el.type) {
			case "file":
				return (
					<InputFile key={el.label} bgColor={theme.color.bg} label={el.label} value="value" onChange={el.onChange} files={el.files} onThumbnailClick={el.onThumbnailClick} isOneImage={el.isOneImage} />
				);
			case "textarea":
				return <InputTextArea key={el.label} value={el.value} onChange={el.onChange} label={el.label} placeholder={el.placeholder ? el.placeholder : el.label} bgColor={theme.color.bg} />;
			default:
				return (
					<InputDefault key={el.label} value={el.value} onChange={el.onChange} label={el.label} placeholder={el.placeholder ? el.placeholder : el.label} bgColor={theme.color.bg} type={el.type} />
				);
		}
	};

	return (
		<Wrapper active={!!useaction}>
			<Div />
			<Container>
				<TitleLg
					title={title}
					icons={
						onDeleteClilck
							? [
									{ icon: "delete", onClick: handleDeleteClick },
									{ icon: "close", onClick: handleCloseClick }
							  ]
							: [{ icon: "close", onClick: handleCloseClick }]
					}
				/>
				<FormWrapper onSubmit={onSubmit}>
					<FormRow>
						<InputDefault {...titleInput} label="title" placeholder="title" bgColor={theme.color.bg} />
					</FormRow>
					<FormRow>
						{contents.map((el) => {
							return renderInput(el);
						})}
					</FormRow>
					<Submit value="확인" divColor={theme.color.bg} />
				</FormWrapper>
			</Container>
		</Wrapper>
	);
};

export default AdminForm;
