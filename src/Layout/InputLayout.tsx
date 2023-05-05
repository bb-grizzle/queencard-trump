import { UseInputLayoutResultType } from "@/hook/input/useInputLayout";
import { ReactNode } from "react";
import styled from "styled-components";

export interface InputLayoutProps extends UseInputLayoutResultType {
	className?: string;
	children: ReactNode;
}

const Wrapper = styled.label`
	width: 100%;
`;

const Label = styled.p`
	margin-bottom: 12px;
	font-weight: 500;
	font-size: 13px;
	color: ${(props) => props.theme.colorPalette.bw[900]};
`;

const InputWrapper = styled.div`
	position: relative;
	margin-bottom: 12px;
`;

const CaptionWrapper = styled.div``;

const Caption = styled.p<{ isError: boolean }>`
	${(props) => props.theme.fontStyle.body.medium};
	color: ${(props) => (props.isError ? props.theme.colorPalette.sub.warn : props.theme.colorPalette.bw[400])};
`;

const InputLayout: React.FC<InputLayoutProps> = ({ label, note, errorMessage, className, children }) => {
	return (
		<Wrapper className={className}>
			{/* label */}
			{label && <Label>{label}</Label>}
			{/* input */}
			<InputWrapper>{children}</InputWrapper>

			{/* note */}
			{note && (
				<CaptionWrapper>
					<Caption isError={false}>{note}</Caption>
				</CaptionWrapper>
			)}

			{/* error */}
			{errorMessage && (
				<CaptionWrapper>
					<Caption isError={true}>{errorMessage}</Caption>
				</CaptionWrapper>
			)}
		</Wrapper>
	);
};

export default InputLayout;
