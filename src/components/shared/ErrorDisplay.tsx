import styled from "styled-components";
import Icon from "./Icon";
import { IconName } from "@/types/icon";

interface ErrorProps {
	className?: string;
	text?: string;
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 16px;
	color: ${(props) => props.theme.colorPalette.sub.warn};
	text-align: center;
`;

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
`;

const Text = styled.p`
	${(props) => props.theme.fontStyle.body.medium};
`;

const TextError = styled.p`
	${(props) => props.theme.fontStyle.body.medium};
	color: ${(props) => props.theme.colorPalette.bw[500]};
`;

const ErrorDisplay: React.FC<ErrorProps> = ({ text }) => {
	return (
		<Wrapper>
			<Icon name={IconName.ERROR} />
			<TextWrapper>
				<Text>에러가 발생했어요. </Text>
				{text && <TextError>{text}</TextError>}
			</TextWrapper>
		</Wrapper>
	);
};

export default ErrorDisplay;
