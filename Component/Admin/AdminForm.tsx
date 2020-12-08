import styled, { css } from "styled-components";
import media from "../../Styles/media";
import ContainerLayout from "../../Layout/ContainerLayout";
import AdminFormTitle from "./AdminFormTitle";
import { useAdminAction } from "../../Context/AdminProvider";
import InputDefault from "../Input/InputDefault";
import Title, { TitleType } from "../Text/Title";
import FormDefault from "../Input/FormDefault";
import InputFile from "../Input/InputFile";
import InputTag from "../Input/InputTag";
import InputOption from "../Input/InputOption";
import FormCategoryInput from "./FormCategoryInput";
import InputColor from "../Input/InputColor";
import EditorDefault from "../Editor/EditorDefault";
import InputContents from "../Input/InputContents";
import TextArea from "../Input/TextArea";
import InputVideo from "../Input/InputVideo";

interface AdminFormProps {
	title: string;
	onSubmit: () => void;
	onDelete?: () => void;
	contents: any;
	formRef: any;
	deleteDisable?: boolean;
	cancelable?: boolean;
	isFilled?: boolean;
}

const Wrapper = styled.div<{ active: boolean; isFilled?: boolean }>`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: ${(props) => props.theme.size.full_height};
	z-index: ${(props) => props.theme.zIndex.adminForm.pc};
	background-color: ${(props) => props.theme.color.white};
	padding-top: ${(props) => props.theme.size.header.pc};
	transition: ${(props) => props.theme.transition.default};
	overflow: scroll;
	padding-bottom: ${(props) => props.theme.size.header.pc};
	scroll-behavior: smooth;
	${(props) => props.theme.style.hideScroll};

	@media ${media.tablet} {
		padding-top: 0px;
		top: ${(props) => (props.isFilled ? props.theme.size.header.mobile : 0)};
		z-index: ${(props) => props.theme.zIndex.adminForm.tablet};
	}

	${(props) =>
		props.active
			? css`
					opacity: 1;
					transform: translateY(0);
					${(props) => props.theme.event.active};
			  `
			: css`
					opacity: 0;
					transform: translateY(32px);
					${(props) => props.theme.event.disable}
			  `};
`;

const Container = styled(ContainerLayout)`
	height: auto;
`;

const FormSection = styled.div`
	margin-top: 40px;
	margin-bottom: 24px;
`;

const AdminForm: React.FC<AdminFormProps> = ({ isFilled, onSubmit, contents, title, formRef, onDelete, deleteDisable = false, cancelable }) => {
	const { adminAction } = useAdminAction();

	const handleSubmit = () => {
		onSubmit();
	};

	return (
		<Wrapper active={adminAction !== null} ref={formRef} isFilled={isFilled}>
			<Container>
				<AdminFormTitle title={title} cancelable={cancelable} />

				<FormDefault onSubmit={handleSubmit} icon={"check"} onDelete={onDelete} deleteDisable={deleteDisable}>
					{contents.map((el, index) => {
						return (
							<FormSection key={index}>
								<Title title={el.title} type={TitleType.SM} />
								{el.inputs.map((input, i) => {
									switch (input.type) {
										case "color":
											return <InputColor {...input} key={i} />;
										case "textarea":
											return <TextArea {...input} key={i} />;
										case "video":
											return <InputVideo {...input} key={i} />;
										case "contents":
											return <InputContents {...input} key={i} />;
										case "file":
											return <InputFile {...input} key={i} />;
										case "tag":
											return <InputTag key={i} {...input} />;
										case "option":
											return <InputOption key={i} {...input} />;
										case "category":
											return <FormCategoryInput key={i} {...input} />;
										case "editor":
											return <EditorDefault key={i} {...input} />;
										default:
											return <InputDefault {...input} key={i} />;
									}
								})}
							</FormSection>
						);
					})}
				</FormDefault>
			</Container>
		</Wrapper>
	);
};

export default AdminForm;
