import { FileProps } from "./portfolio";
export interface CoverProps {
	image: FileProps | null;
}

export interface CoverDataProps extends CoverProps {
	id: string;
}
