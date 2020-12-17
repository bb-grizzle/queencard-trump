interface HeadDataProps {
	description: string;
	title: string;
	url: string;
}

export const headData: HeadDataProps = {
	description: "Awesome School",
	title: "어썸스쿨",
	url: process.env.NEXT_PUBLIC_URL
};
