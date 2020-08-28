const BREAKPOINT_DESKTOP = 1167;
const BREAKPOINT_TABLET = 778;
const BREAKPOINT_MOBILE = 576;

const media = {
	mobile: `screen and (max-width: ${BREAKPOINT_MOBILE}px)`,
	tablet: `screen and (max-width: ${BREAKPOINT_TABLET}px)`,
	desktop: `screen and (max-width: ${BREAKPOINT_DESKTOP}px)`
};

export default media;
