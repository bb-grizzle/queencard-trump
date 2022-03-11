interface HeadDataProps {
	description: string;
	title: string;
	url: string;
}

export const headData: HeadDataProps = {
	description: "description",
	title: "title",
	url: process.env.NEXT_PUBLIC_URL
};
