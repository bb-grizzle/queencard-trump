import styled, { css } from "styled-components";
import PageContainer from "../../../Layout/PageLayout";
import AddBtn from "../../../Component/Admin/AddBtn";
import ContainerLayout from "../../../Layout/ContainerLayout";
import AdminTitleSection from "../../../Component/Admin/AdminTitleSection";
import AdminForm from "../../../Component/Admin/AdminForm";
import BtnText from "../../../Component/Btn/BtnText";
import { AdminFormContents } from "../../../Interface/adminForm";
import { MutableRefObject } from "react";
import { PortfolioProps, PortfolioDataProps } from "../../../Interface/portfolio";
import media from "../../../Styles/media";
import PortfolioList from "../../../Component/PortfolioList";

interface PortfolioPresentorProps {
	category: string[];
	onSubmit: () => void;
	formContents: AdminFormContents[];
	formRef: MutableRefObject<HTMLFormElement>;
	data: PortfolioDataProps[];
	onCategoryClick: (id: string | null) => void;
	nowCategory: string | null;
	listCol: number;
}

const Category = styled.ul`
	display: flex;
	margin-bottom: ${(props) => `${props.theme.size.gap.section}px`};
`;

const CategoryList = styled.li<{ active: boolean }>`
	border: 1px solid ${(props) => props.theme.color.gray.dark};
	padding: 12px;
	border-radius: 12px;
	margin-right: 12px;
	display: flex;
	align-items: center;
	${(props) =>
		props.active
			? css`
					background-color: ${(props) => props.theme.color.gray.dark};
					color: ${(props) => props.theme.color.white};
			  `
			: css`
					background-color: transparent;
					color: ${(props) => props.theme.color.gray.dark};
			  `};

	@media ${media.hover} {
		&:hover {
			cursor: pointer;
			opacity: 0.5;
		}
	}
`;

const CategoryBtn = styled(BtnText)``;
const Count = styled.p`
	margin-left: 8px;
	font-size: 12px;
`;

const ListWrppaer = styled.ul`
	display: flex;
	margin-bottom: ${(props) => `${props.theme.size.gap.section}px`};
	flex-wrap: wrap;
`;

const PortfolioPresentor: React.FC<PortfolioPresentorProps> = ({ category, onSubmit, formContents, formRef, data, nowCategory, onCategoryClick, listCol }) => {
	return (
		<PageContainer>
			<ContainerLayout>
				<AdminTitleSection title="포트폴리오" />

				<Category>
					<CategoryList active={nowCategory === null} onClick={() => onCategoryClick(null)}>
						<CategoryBtn text={"전체"} />
					</CategoryList>
					{category &&
						Object.keys(category).map((key, index) => {
							return (
								<CategoryList key={index} active={nowCategory === category[key].id} onClick={() => onCategoryClick(category[key].id)}>
									<CategoryBtn text={category[key].name} opacityAction={false} />
									<Count>{category[key].count}</Count>
								</CategoryList>
							);
						})}
				</Category>

				<ListWrppaer>
					{data &&
						data
							.filter((el) => (nowCategory !== null ? el.category.id === nowCategory : el))
							.map((portfolio, index) => {
								return <PortfolioList key={portfolio.id} data={portfolio} col={listCol} isLast={(index + 1) % listCol === 0} />;
							})}
				</ListWrppaer>
			</ContainerLayout>

			<AdminForm title={"포트폴리오"} onSubmit={onSubmit} contents={formContents} formRef={formRef} />

			<AddBtn />
		</PageContainer>
	);
};

export default PortfolioPresentor;
