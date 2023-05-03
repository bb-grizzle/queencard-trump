import Icon from "@/components/shared/Icon";
import IntroLayout from "@/layout/IntroLayout";
import { IconName } from "@/types/icon";
import styled from "styled-components";

const Wrapper = styled.ul`
	display: flex;
	gap: 16px;
`;

const List = styled.li`
	background-color: ${(props) => props.theme.color.white};
	width: 32px;
	height: 32px;
	${(props) => props.theme.layout.center_flex};
	border-radius: 4px;
	border: 1px solid ${(props) => props.theme.colorPalette.bw[200]};
`;

const ComponentIcon = () => {
	return (
		<IntroLayout title="icons">
			<Wrapper>
				{Object.values(IconName).map((icon) => {
					return (
						<List key={icon}>
							<Icon name={icon} svgProps={{ stroke: "black" }} />
						</List>
					);
				})}
			</Wrapper>
		</IntroLayout>
	);
};

export default ComponentIcon;
