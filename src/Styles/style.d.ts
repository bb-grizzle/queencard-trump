import "styled-components";
import { color } from "./theme/color";
import { componentStyle } from "./theme/componentStyle";
import { div } from "./theme/div";
import { event } from "./theme/event";
import { fontFamily } from "./theme/fontFamily";
import { fontStyle } from "./theme/fontStyle";
import { layout } from "./theme/layout";
import { size } from "./theme/size";
import { transition } from "./theme/transition";
import { zIndex } from "./theme/zIndex";

declare module "styled-components" {
	export interface DefaultTheme {
		color: typeof color;
		componentStyle: typeof componentStyle;
		div: typeof div;
		event: typeof event;
		fontFamily: typeof fontFamily;
		fontstyle: typeof fontStyle;
		layout: typeof layout;
		size: typeof size;
		transition: typeof transition;
		zIndex: typeof zIndex;
	}
}
