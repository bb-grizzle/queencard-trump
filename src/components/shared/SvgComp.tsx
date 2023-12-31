import { useDynamicSVGImport } from "@/hook/useDynamicSVGImport";
import { useCallback } from "react";
import IconLoading from "../../assets/icon/loading.svg";
import IconError from "../../assets/icon/error.svg";
import theme from "@/styles/theme";

export interface SvgCompProps {
	path: "icon" | "shared" | "trump";
	name: string;
	svgProps?: React.SVGProps<SVGSVGElement>;
}

const SvgComp: React.FC<SvgCompProps> = ({ name, path, svgProps }) => {
	const { error, loading, SvgIcon } = useDynamicSVGImport(`${path}/${name}`);

	const renderIcon = useCallback(() => {
		if (error) {
			return <IconError stroke="red" strokeWidth="2" {...svgProps} />;
		} else if (loading) {
			return <IconLoading stroke={theme.colorPalette.bw[400]} {...svgProps} />;
		} else if (SvgIcon) {
			return <SvgIcon {...svgProps} />;
		} else {
			return <>else</>;
		}
	}, [error, loading, SvgIcon, svgProps]);

	return renderIcon();
};

export default SvgComp;
