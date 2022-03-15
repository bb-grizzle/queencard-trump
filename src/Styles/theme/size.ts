export const size = {
	height_input: "36px",
	full_height: `calc(var(--vh, 1vh) * 100);`,
	full_height_withCalc: (calculation: string) => `calc(var(--vh, 1vh) * 100 + ${calculation});`,
	container: {
		pc: "1024px",
	},
	headerPadding: {
		pc: 36,
		mobile: 20,
	},
	header: {
		pc: 80,
		mobile: 56,
	},
	offset: {
		tablet: 16,
	},
	padding_top_admin: {
		pc: 200,
		mobile: 80,
	},
	padding_top_contents: {
		pc: 64,
		tablet: 16,
	},
	padding_bottom_admin: {
		pc: 100,
		mobile: 60,
	},
	gap: {
		list: 30,
		section: 32,
		contents: 16,
	},
	cover: {
		pc: 500,
		tablet: 320,
		mobile: 160,
	},

	margin: {
		submit_top: 56,
	},
};
