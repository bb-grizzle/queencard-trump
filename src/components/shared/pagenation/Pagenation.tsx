import styled from "styled-components";
import Button, { BtnTypeEnum } from "../Button";
import { IconName } from "@/types/icon";
import { useEffect, useState } from "react";

interface PagenationProps {
  current: number;
  total: number;
  range: number;
  onPageClick: (page: number) => void;
  onNextClick: () => void;
  onPrevClick: () => void;
}

const Wrapper = styled.div`
  padding: 32px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const PageWrapper = styled.ul`
  display: flex;
  align-items: center;
`;

const List = styled.li`
  
`;

const BtnArrow = styled(Button)`
  
`;

const BtnPage = styled(Button) <{ active: boolean }>`
  color: ${props => props.active ? props.theme.color.black : props.theme.colorPalette.bw[500]};
  
`;

const Pagenation: React.FC<PagenationProps> = ({ current, total, range, onPageClick, onNextClick, onPrevClick }) => {
  const [pageArr, setPageArr] = useState<number[]>([])
  const [isPrevExist, setIsPrevExist] = useState(false)
  const [isNextExist, setIsNextExist] = useState(false)

  useEffect(() => {
    const halfRange = Math.floor(range / 2);
    setIsPrevExist(current > halfRange + 1)
    setIsNextExist(current < total - halfRange)

    const nowPageArr = new Array(range).fill(0).map((_, index) => {
      let startPage = current - halfRange;
      if (current <= halfRange) {
        startPage = 1;
      } else if (current > total - halfRange) {
        startPage = total - range + 1;
      }
      return startPage + index;
    })
    setPageArr(nowPageArr)
  }, [range, current, total])


  return (
    <Wrapper>
      {isPrevExist && <BtnArrow iconName={IconName.ARROW_LEFT} onClick={onPrevClick} />}

      <PageWrapper>
        {pageArr.map((page, index) => {
          return <List key={index}>
            <BtnPage text={page.toString()} btnType={BtnTypeEnum.TRANSPARENTS} active={page === current} onClick={() => onPageClick(page)} />
          </List>
        })}
      </PageWrapper>

      {isNextExist && <BtnArrow iconName={IconName.ARROW_RIGHT} onClick={onNextClick} />}
    </Wrapper>
  );
}

export default Pagenation;