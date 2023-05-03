import Button, { BtnTypeEnum } from "@/components/shared/Button";
import IntroLayout from "@/layout/IntroLayout";
import { colorPalette } from "@/styles/theme/colorPalette";
import { IconName } from "@/types/icon";
import styled from "styled-components";

const Section = styled.section`
	display: flex;
	flex-direction: column;
	gap: 16px;
	padding: 16px 0;
`;

const SectionTitle = styled.h2``;

const BtnWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
`;

const ComponentButton = () => {
	return (
		<IntroLayout title="button">
			{/* type */}
			<Section>
				<SectionTitle>text button</SectionTitle>
				<BtnWrapper>
					<Button mainColor={colorPalette.bw[800]} text="button" btnType={BtnTypeEnum.LINE} />
					<Button mainColor={colorPalette.bw[800]} text="button" btnType={BtnTypeEnum.SOLID} />
					<Button mainColor={colorPalette.bw[800]} text="button" btnType={BtnTypeEnum.TRANSPARENTS} />
					<Button mainColor={colorPalette.bw[800]} text="button" btnType={BtnTypeEnum.SOLID} disabled={true} />
					<Button mainColor={colorPalette.bw[800]} text="button" btnType={BtnTypeEnum.SOLID} loading={true} />
				</BtnWrapper>
			</Section>

			{/* icon */}
			<Section>
				<SectionTitle>icon button</SectionTitle>
				<BtnWrapper>
					<Button mainColor={colorPalette.bw[800]} iconName={IconName.ADD} btnType={BtnTypeEnum.LINE} />
					<Button mainColor={colorPalette.bw[800]} iconName={IconName.ADD} btnType={BtnTypeEnum.SOLID} />
					<Button mainColor={colorPalette.bw[800]} iconName={IconName.ADD} btnType={BtnTypeEnum.TRANSPARENTS} />
					<Button mainColor={colorPalette.bw[800]} iconName={IconName.ADD} btnType={BtnTypeEnum.SOLID} disabled={true} />
					<Button mainColor={colorPalette.bw[800]} iconName={IconName.ADD} btnType={BtnTypeEnum.SOLID} loading={true} />
				</BtnWrapper>
			</Section>

			{/* icon with text */}
			<Section>
				<SectionTitle>icon button</SectionTitle>
				<BtnWrapper>
					<Button mainColor={colorPalette.bw[800]} iconName={IconName.ADD} text="button" btnType={BtnTypeEnum.LINE} />
					<Button mainColor={colorPalette.bw[800]} iconName={IconName.ADD} text="button" btnType={BtnTypeEnum.SOLID} />
					<Button mainColor={colorPalette.bw[800]} iconName={IconName.ADD} text="button" btnType={BtnTypeEnum.TRANSPARENTS} />
					<Button mainColor={colorPalette.bw[800]} iconName={IconName.ADD} text="button" btnType={BtnTypeEnum.SOLID} disabled={true} />
					<Button mainColor={colorPalette.bw[800]} iconName={IconName.ADD} text="button" btnType={BtnTypeEnum.SOLID} loading={true} />
				</BtnWrapper>
			</Section>

			{/* icon with text reverse */}
			<Section>
				<SectionTitle>icon button reverse</SectionTitle>
				<BtnWrapper>
					<Button reverse={true} mainColor={colorPalette.bw[800]} iconName={IconName.ADD} text="button" btnType={BtnTypeEnum.LINE} />
					<Button reverse={true} mainColor={colorPalette.bw[800]} iconName={IconName.ADD} text="button" btnType={BtnTypeEnum.SOLID} />
					<Button reverse={true} mainColor={colorPalette.bw[800]} iconName={IconName.ADD} text="button" btnType={BtnTypeEnum.TRANSPARENTS} />
					<Button reverse={true} mainColor={colorPalette.bw[800]} iconName={IconName.ADD} text="button" btnType={BtnTypeEnum.SOLID} disabled={true} />
					<Button reverse={true} mainColor={colorPalette.bw[800]} iconName={IconName.ADD} text="button" btnType={BtnTypeEnum.SOLID} loading={true} />
				</BtnWrapper>
			</Section>
		</IntroLayout>
	);
};

export default ComponentButton;
