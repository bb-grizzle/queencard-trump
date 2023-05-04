import Button, { BtnTypeEnum } from "@/components/shared/Button";
import IntroLayout from "@/layout/IntroLayout";
import IntroSectionLayout from "@/layout/IntroSectionLayout";
import { colorPalette } from "@/styles/theme/colorPalette";
import { IconName } from "@/types/icon";

const ComponentButton = () => {
	return (
		<IntroLayout title="button">
			{/* type */}
			<IntroSectionLayout title="text button">
				<Button mainColor={colorPalette.bw[800]} text="button" btnType={BtnTypeEnum.LINE} />
				<Button mainColor={colorPalette.bw[800]} text="button" btnType={BtnTypeEnum.SOLID} />
				<Button mainColor={colorPalette.bw[800]} text="button" btnType={BtnTypeEnum.TRANSPARENTS} />
				<Button mainColor={colorPalette.bw[800]} text="button" btnType={BtnTypeEnum.SOLID} disabled={true} />
				<Button mainColor={colorPalette.bw[800]} text="button" btnType={BtnTypeEnum.SOLID} loading={true} />
			</IntroSectionLayout>

			{/* icon */}
			<IntroSectionLayout title="icon button">
				<Button mainColor={colorPalette.bw[800]} iconName={IconName.ADD} btnType={BtnTypeEnum.LINE} />
				<Button mainColor={colorPalette.bw[800]} iconName={IconName.ADD} btnType={BtnTypeEnum.SOLID} />
				<Button mainColor={colorPalette.bw[800]} iconName={IconName.ADD} btnType={BtnTypeEnum.TRANSPARENTS} />
				<Button mainColor={colorPalette.bw[800]} iconName={IconName.ADD} btnType={BtnTypeEnum.SOLID} disabled={true} />
				<Button mainColor={colorPalette.bw[800]} iconName={IconName.ADD} btnType={BtnTypeEnum.SOLID} loading={true} />
			</IntroSectionLayout>

			{/* icon with text */}
			<IntroSectionLayout title="icon with text button">
				<Button mainColor={colorPalette.bw[800]} iconName={IconName.ADD} text="button" btnType={BtnTypeEnum.LINE} />
				<Button mainColor={colorPalette.bw[800]} iconName={IconName.ADD} text="button" btnType={BtnTypeEnum.SOLID} />
				<Button mainColor={colorPalette.bw[800]} iconName={IconName.ADD} text="button" btnType={BtnTypeEnum.TRANSPARENTS} />
				<Button mainColor={colorPalette.bw[800]} iconName={IconName.ADD} text="button" btnType={BtnTypeEnum.SOLID} disabled={true} />
				<Button mainColor={colorPalette.bw[800]} iconName={IconName.ADD} text="button" btnType={BtnTypeEnum.SOLID} loading={true} />
			</IntroSectionLayout>

			{/* icon with text reverse */}
			<IntroSectionLayout title="icon with text button reverse">
				<Button reverse={true} mainColor={colorPalette.bw[800]} iconName={IconName.ADD} text="button" btnType={BtnTypeEnum.LINE} />
				<Button reverse={true} mainColor={colorPalette.bw[800]} iconName={IconName.ADD} text="button" btnType={BtnTypeEnum.SOLID} />
				<Button reverse={true} mainColor={colorPalette.bw[800]} iconName={IconName.ADD} text="button" btnType={BtnTypeEnum.TRANSPARENTS} />
				<Button reverse={true} mainColor={colorPalette.bw[800]} iconName={IconName.ADD} text="button" btnType={BtnTypeEnum.SOLID} disabled={true} />
				<Button reverse={true} mainColor={colorPalette.bw[800]} iconName={IconName.ADD} text="button" btnType={BtnTypeEnum.SOLID} loading={true} />
			</IntroSectionLayout>
		</IntroLayout>
	);
};

export default ComponentButton;
