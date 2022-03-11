import { css } from "styled-components";
const ROBOTO = `Roboto, sans-serif`;
const NOTO = `Noto Sans KR, sans-serif`;
const GREY = `GreyLL, sans-serif`;

export const fontFamily = {
	roboto: css`
		font-family: ${ROBOTO};
		font-size: 32px;
		font-weight: 400;
		line-height: 31px;
	`,
	kr: {
		// display
		d1: css`
			font-family: ${NOTO};
			font-size: 64px;
			font-style: normal;
			font-weight: 700;
		`,
		d2: css`
			font-family: ${NOTO};
			font-size: 52px;
			font-style: normal;
			font-weight: 700;
			line-height: 104px;
		`,
		d3: css`
			font-family: ${NOTO};
			font-size: 52px;
			font-style: normal;
			font-weight: 700;
			line-height: 104px;
		`,
		// head line
		h1: css`
			font-family: ${NOTO};
			font-size: 32px;
			font-style: normal;
			font-weight: 700;
			line-height: 58px;
		`,
		h2: css`
			font-family: ${NOTO};
			font-size: 28px;
			font-style: normal;
			font-weight: 700;
			line-height: 50px;
		`,
		h3: css`
			font-family: ${NOTO};
			font-size: 28px;
			font-style: normal;
			font-weight: 400;
			line-height: 45px;
		`,
		h4: css`
			font-family: ${NOTO};
			font-size: 24px;
			font-style: normal;
			font-weight: 700;
			line-height: 38px;
		`,
		h5: css`
			font-family: ${NOTO};
			font-size: 20px;
			font-style: normal;
			font-weight: 500;
			line-height: 32px;
		`,
		h6: css`
			font-family: ${NOTO};
			font-size: 18px;
			font-style: normal;
			font-weight: 500;
			line-height: 29px;
		`,
		// paragraph
		p1: css`
			font-family: ${NOTO};
			font-size: 16px;
			font-style: normal;
			font-weight: 400;
			line-height: 26px;
		`,
		p2: css`
			font-family: ${NOTO};
			font-size: 16px;
			font-style: normal;
			font-weight: 700;
			line-height: 1.6;
		`,
		// btn
		btn_sm: css`
			//styleName: btn_sm;
			font-family: ${NOTO};
			font-size: 14px;
			font-style: normal;
			font-weight: 500;
		`,
		btn_md: css`
			//styleName: btn_md;
			font-family: ${NOTO};
			font-size: 16px;
			font-style: normal;
			font-weight: 500;
		`,
		btn_lg: css`
			//styleName: btn_lg;
			font-family: ${NOTO};
			font-size: 20px;
			font-style: normal;
			font-weight: 700;
		`,
		// caption
		caption: css`
			font-family: ${NOTO};
			font-size: 12px;
			font-weight: 400;
			line-height: 19px;
		`,
	},
	en: {
		// display
		d1: css`
			font-family: ${GREY};
			font-size: 64px;
			font-style: normal;
			font-weight: 400;
			line-height: 128px;
		`,
		d2: css`
			font-family: ${GREY};
			font-size: 52px;
			font-style: normal;
			font-weight: 400;
			line-height: 94px;
		`,
		d3: css`
			font-family: ${GREY};
			font-size: 28px;
			font-style: normal;
			font-weight: 400;
			line-height: 45px;
		`,
		// headline
		h6: css`
			font-family: ${ROBOTO};
			font-size: 18px;
			font-style: normal;
			font-weight: 400;
			line-height: 29px;
		`,
		h4: css`
			font-family: ${ROBOTO};
			font-size: 24px;
			font-style: normal;
			font-weight: 700;
			line-height: 38px;
		`,
		h3: css`
			font-family: ${ROBOTO};
			font-size: 28px;
			font-style: normal;
			font-weight: 400;
			line-height: 45px;
		`,
		h5: css`
			font-family: ${ROBOTO};
			font-size: 20px;
			font-style: normal;
			font-weight: 500;
			line-height: 32px;
		`,
		h2: css`
			font-family: ${ROBOTO};
			font-size: 28px;
			font-style: normal;
			font-weight: 600;
			line-height: 45px;
		`,
		h1: css`
			font-family: ${ROBOTO};
			font-size: 32px;
			font-style: normal;
			font-weight: 600;
			line-height: 58px;
		`,
		// paragraph
		p2: css`
			font-family: ${ROBOTO};
			font-size: 16px;
			font-style: normal;
			font-weight: 700;
			line-height: 26px;
		`,

		p1: css`
			font-family: ${ROBOTO};
			font-size: 16px;
			font-style: normal;
			font-weight: 400;
			line-height: 26px;
		`,

		// btn
		btn_sm: css`
			font-family: ${ROBOTO};
			font-size: 14px;
			font-style: normal;
			font-weight: 500;
			line-height: 22px;
		`,

		btn_md: css`
			font-family: ${ROBOTO};
			font-size: 16px;
			font-style: normal;
			font-weight: 500;
			line-height: 26px;
		`,

		btn_lg: css`
			font-family: ${ROBOTO};
			font-size: 20px;
			font-style: normal;
			font-weight: 700;
			line-height: 32px;
		`,

		// caption
		caption: css`
			font-family: ${ROBOTO};
			font-size: 12px;
			font-style: normal;
			font-weight: 400;
			line-height: 19px;
		`,
	},
};
