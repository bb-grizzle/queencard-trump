import SvgComp from "./SvgComp";
import { SvgCompProps } from "./SvgComp";

interface IconProps extends Omit<SvgCompProps, "path"> {
	className?: string;
}

const Icon: React.FC<IconProps> = ({ svgProps, name, className }) => {
	return <SvgComp path="icon" name={name} svgProps={{ ...svgProps, className }} />;
};

export default Icon;
