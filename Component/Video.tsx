import styled from "styled-components";
import YouTube from "react-youtube";

const Wrapper = styled.div<{ ratio: number }>`
	${(props) => props.theme.layout.ratio(props.ratio)};
	position: relative;
`;
const YoutubeVideo = styled(YouTube)`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
`;
const Video = ({ value, size }) => {
	return (
		<Wrapper ratio={size && size.width && size.height ? (size.height / size.width) * 100 : 10}>
			{value && (
				<YoutubeVideo
					videoId={value} // defaults -> null
					// id={string}                       // defaults -> null
					// className={string}                // defaults -> null
					// containerClassName={string}       // defaults -> ''
					// opts={obj}                        // defaults -> {}
					// onReady={func}                    // defaults -> noop
					// onPlay={func}                     // defaults -> noop
					// onPause={func}                    // defaults -> noop
					// onEnd={func}                      // defaults -> noop
					// onError={func}                    // defaults -> noop
					// onStateChange={func}              // defaults -> noop
					// onPlaybackRateChange={func}       // defaults -> noop
					// onPlaybackQualityChange={func}    // defaults -> noop
				/>
			)}
		</Wrapper>
	);
};

export default Video;
