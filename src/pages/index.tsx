import HomeCamera from "@/components/camera/HomeCamera";
import PageLayout from "@/layout/PageLayout";
import HomeProvider from "@/provider/HomeProvider";

export default function Home() {
	return <PageLayout title="Home">
		<HomeProvider>
			<HomeCamera />
		</HomeProvider>
	</PageLayout>;
}
