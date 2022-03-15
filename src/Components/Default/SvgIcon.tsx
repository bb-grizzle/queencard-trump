import dynamic from "next/dynamic";
import { SVGProps } from "react";
import { SvgIconProps } from "../../Interface/icon";
import { colorPalette } from "../../Styles/theme/colorPalette";

interface SvgIconCustomProps extends SvgIconProps {
	className?: string;
}

export enum IconName {
	CAMERA = "camera",
	CHECK = "check",
	CLOSE = "close",
	COUNSEL = "counsel",
	CROWN = "crown",
	DATA = "data",
	DELETE = "delete",
	DOWN = "down",
	DOWNLOAD = "download",
	FILTER = "filter",
	FORM = "form",
	LEFT = "left",
	MENU = "menu",
	MESSAGE = "message",
	MONEY = "money",
	PENCIL = "pencil",
	PERCENT = "percent",
	RIGHT = "right",
	SEARCH = "search",
	SEND = "send",
	STORAGE = "storage",
	PROFILE = "profile",
}

const SvgIcon: React.FC<SvgIconCustomProps> = ({ name, fill, className }) => {
	const DynamicComponent = dynamic<SVGProps<SVGSVGElement>>(() => import(`../../Asset/icon/${name}.svg`), { ssr: true });

	return <DynamicComponent className={className} fill={fill ?? colorPalette.bw[500]} />;
};

export default SvgIcon;
