import { UseInputImageResultType } from "@/hook/input/useInputImage";
import InputLayout from "@/layout/InputLayout";
import styled from "styled-components";
import Button, { BtnTypeEnum } from "../Button";
import Image from "next/image";
import SampleImage from "@/assets/image/sample.jpg";
import { IconName } from "@/types/icon";

interface InputImageProps extends UseInputImageResultType {}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const ImageWrapper = styled.ul`
	display: flex;
	gap: 16px;
	flex-wrap: wrap;
`;

const InputFile = styled.input`
	display: none;
`;

const ButtonUpload = styled(Button)`
	width: 100px;
	height: 100px;
	border-style: dotted;
`;

const ImageList = styled.li`
	border-radius: 8px;
	overflow: hidden;
	position: relative;
`;

const BtnClose = styled(Button)`
	border-radius: 100%;
	background-color: ${(props) => props.theme.color.dim};
	color: ${(props) => props.theme.color.white};
	position: absolute;
	right: 4px;
	top: 4px;
`;

const ImageCustom = styled(Image)`
	object-fit: cover;
`;

const InputImage: React.FC<InputImageProps> = ({ layout, fileRef, onUpload, onChange, files, onDelete }) => {
	return (
		<InputLayout {...layout}>
			<Wrapper>
				<ImageWrapper>
					<InputFile type="file" ref={fileRef} onChange={onChange} multiple={true} />
					<ButtonUpload text="upload" btnType={BtnTypeEnum.LINE} iconName={IconName.ADD} onClick={onUpload} />
					{files?.map((el, index) => {
						return (
							<ImageList key={el.name}>
								<BtnClose iconName={IconName.CLOSE} onClick={() => onDelete(index)} />
								<ImageCustom width={100} height={100} alt={el.name} src={el.url?.toString() ?? el.base64?.toString() ?? ""} />
							</ImageList>
						);
					})}
				</ImageWrapper>
			</Wrapper>
		</InputLayout>
	);
};

export default InputImage;
