import styled from "styled-components";
import { FlexCenter } from "../../../../theme/Mixins";
import { CheckedSquare, NoCheckedSquare } from '../../../../assets';

export const StyledOption = styled.li<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 5px;
  height: 50px;
  width: 100%;
  cursor: pointer;
  margin: 5px 0;
  padding: 5px;
`;

export const StyledOptionTitle = styled.span`
  color: ${({ theme }) => theme.colors.Neutral20};
  pointer-events: none;
`;

export const StyledColorField = styled.span<{ value: string | undefined }>`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  margin-right: 10px;
  background-color: ${({ value }) => value};
`;

export const StyledIconField = styled.div`
  ${FlexCenter};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.Neutral80};
  width: 40px;
  height: 40px;
  margin-right: 10px;

  svg {
    width: 30px;
    height: 30px;
    path {
      fill: ${({ theme }) => theme.colors.Neutral20};
    }
  }
`;


export const StyledPaletteField = styled.div<{value: string | undefined}>`
  margin-right: 10px;
  svg {
    width: 30px;
    height: 30px;
    path {
      fill: ${({value}) => value};
    }
  }
`;


export const StyledNoCheckedSquare = styled(NoCheckedSquare)`
    width: 30px;
    height: 30px;
    margin-right: 20px;
    path {
      fill: ${({theme}) => theme.colors.green};
    }
`

export const StyledCheckedSquare = styled(CheckedSquare)`
    width: 30px;
    height: 30px;
    margin-right: 20px;
    path {
      fill: ${({theme}) => theme.colors.green};
    }
`

export const StyledWrapper = styled.div`
  ${FlexCenter};
  justify-content: flex-start;
  width: 100%;
`
