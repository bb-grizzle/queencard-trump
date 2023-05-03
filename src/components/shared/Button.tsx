import { ButtonHTMLAttributes, MouseEvent } from "react";
import styled, { css } from "styled-components";
import { colorPalette } from "@/styles/theme/colorPalette";
import { IconName } from "@/types/icon";
import Icon from "./Icon";
import IconLoading from "../../assets/icon/loading.svg";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text?: string;
	reverse?: boolean;
	iconName?: IconName;
	btnType?: BtnTypeEnum;
	mainColor?: string;
	loading?: boolean;
}

export enum BtnTypeEnum {
	SOLID,
	LINE,
	TRANSPARENTS,
}

const ButtonWrapper = styled.button<{ isIconOnly: boolean; btnType: BtnTypeEnum; mainColor: string; disabled?: boolean; loading: boolean }>`
	position: relative;
	padding: 8px 14px;
	border-radius: 8px;
	${(props) => props.theme.fontStyle.body.medium};

	${(props) => {
		if (props.disabled) {
			return css`
				opacity: 0.3;
				cursor: not-allowed;
			`;
		} else if (props.loading) {
			return css`
				cursor: progress;
			`;
		} else {
			return css`
				cursor: pointer;
				&:hover {
					opacity: 0.7;
				}
			`;
		}
	}}

	${(props) =>
		props.isIconOnly &&
		css`
			width: ${props.theme.size.btn.icon}px;
			height: ${props.theme.size.btn.icon}px;
			padding: 0;
		`};

	${(props) => {
		switch (props.btnType) {
			case BtnTypeEnum.TRANSPARENTS:
				return css`
					color: ${props.mainColor};
					border: none;
					background-color: ${props.theme.colorPalette.sub.transparents};
				`;
			case BtnTypeEnum.SOLID:
				return css`
					background-color: ${props.mainColor};
					color: ${props.theme.color.white};
					border: none;
				`;
			case BtnTypeEnum.LINE:
				return css`
					border: 1px solid ${props.mainColor};
					color: ${props.mainColor};
				`;
		}
	}};
`;

const Item = styled.div<{ loading: boolean; reverse: boolean }>`
	display: flex;
	opacity: ${(props) => (props.loading ? 0 : 1)};
	justify-content: center;
	align-items: center;
	gap: 8px;
	flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
`;

const Text = styled.p``;

const LoadingWrapper = styled.div`
	${(props) => props.theme.layout.full_abs};
	${(props) => props.theme.layout.center_flex};
`;

const Button: React.FC<ButtonProps> = ({
	text,
	reverse = false,
	iconName,
	btnType = BtnTypeEnum.TRANSPARENTS,
	mainColor = colorPalette.bw[700],
	onClick,
	type = "button",
	loading = false,
	...rest
}) => {
	const onButtonClick = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
		e.preventDefault();
		onClick?.(e);
	};

	return (
		<ButtonWrapper isIconOnly={!text && !!iconName} loading={loading} btnType={btnType} mainColor={mainColor} onClick={onButtonClick} type={type} {...rest}>
			<Item loading={loading} reverse={reverse}>
				{iconName && <Icon name={iconName} />}
				{text && <Text>{text}</Text>}
			</Item>
			{loading && (
				<LoadingWrapper>
					<IconLoading />
				</LoadingWrapper>
			)}
		</ButtonWrapper>
	);
};

export default Button;
