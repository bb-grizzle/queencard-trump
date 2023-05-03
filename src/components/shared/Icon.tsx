import SvgComp from "./SvgComp";
import { SvgCompProps } from "./SvgComp";

interface IconProps extends Omit<SvgCompProps, "path"> {}

const Icon: React.FC<IconProps> = ({ svgProps, name }) => {
	return <SvgComp path="icon" name={name} svgProps={svgProps} />;
};

export default Icon;
