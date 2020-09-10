import styled from "styled-components";
import media from "../../Styles/media";

const LabelComp = styled.label`
	flex-grow: 0;
	flex-basis: 200px;
	text-transform: capitalize;
	line-height: 36px;

	font-size: 16px;

	@media ${media.tablet} {
		flex-basis: initial;
		margin-bottom: 2px;
	}
`;
const Label = ({ label }) => {
	return <LabelComp>{label}</LabelComp>;
};

export default Label;
