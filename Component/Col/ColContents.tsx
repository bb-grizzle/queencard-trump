import ColDefault from "./ColDefault";
import { MutableRefObject } from "react";
interface ColContentsProps {
	refElement?: MutableRefObject<HTMLDivElement>;
}
const ColContents: React.FC<ColContentsProps> = ({ children, refElement }) => {
	return (
		<ColDefault col={75} refElement={refElement}>
			{children}
		</ColDefault>
	);
};

export default ColContents;
