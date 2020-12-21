import styled from "styled-components";
import useImageLoad from "../../Hook/useImageLoad";
import { useEffect } from "react";
interface BackgroundImageProps {
	image: string;
	opacity?: number;
}
const Wrapper = styled.div<{ image: string; active: boolean; opacity: number }>`
	${(props) => props.theme.layout.full_abs};
	${(props) => props.theme.layout.full_image(props.image)};
	${(props) => props.theme.transition.load(props.active, props.opacity)};
`;
const BackgroundImage: React.FC<BackgroundImageProps> = ({ image, opacity = 1 }) => {
	const { load, setUrl } = useImageLoad(null);
	useEffect(() => {
		setUrl(image);
	}, []);
	return <Wrapper image={image} active={load} opacity={opacity} />;
};

export default BackgroundImage;
