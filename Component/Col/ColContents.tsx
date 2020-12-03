import ColDefault from "./ColDefault";
import { MutableRefObject } from "react";
import useSize from "../../Hook/useSize";
interface ColContentsProps {
	refElement?: MutableRefObject<HTMLDivElement>;
}
const ColContents: React.FC<ColContentsProps> = ({ children, refElement }) => {
	const { isTablet } = useSize();
	return (
		<ColDefault col={!isTablet ? 75 : 100} refElement={refElement}>
			{children}
		</ColDefault>
	);
};

export default ColContents;
