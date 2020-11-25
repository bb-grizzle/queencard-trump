import { useEffect } from "react";
import styled from "styled-components";
import InputDefault from "./InputDefault";
import Video from "../Video";

const Wrapper = styled.div``;
const InputVideo = ({ url, value, size }) => {
	return (
		<Wrapper>
			<InputDefault {...url} placeholder="url" />

			<Video value={value} size={size} />
		</Wrapper>
	);
};

export default InputVideo;
