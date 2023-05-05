import AdminList from "@/components/shared/admin/AdminList";
import AdminTitle from "@/components/shared/admin/AdminTitle";
import IntroLayout from "@/layout/IntroLayout";
import IntroSectionLayout from "@/layout/IntroSectionLayout";

const IntroAdmin = () => {
	return (
		<IntroLayout title="admin list">
			{/* title */}
			<IntroSectionLayout title="admin title">
				<AdminTitle text="admin title sample" />
			</IntroSectionLayout>

			{/* list */}
			<IntroSectionLayout title="admin list">
				<AdminList
					id={1}
					title="list title list title list title list title list title list title list title list title list title list title list title list title"
					fields={[
						{ field: "field text", value: "value text" },
						{ field: "field text", value: "value text" },
						{ field: "field text", value: "value text" },
					]}
					onEditClick={() => console.log("edit ")}
					onDeleteClick={() => console.log("delete ")}
					onLinkClick={() => console.log("link ")}
				/>
			</IntroSectionLayout>
		</IntroLayout>
	);
};

export default IntroAdmin;
