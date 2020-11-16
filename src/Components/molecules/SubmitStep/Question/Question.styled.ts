import styled from "styled-components";
import Paragraph from "Components/atoms/Paragraph";

export const StyledQuestion = styled.li`
  list-style: none;
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 20px;
  /* border: 2px solid ${({ theme }) => theme.colors.Neutral80}; */
`;

export const StyledHeading = styled.h3`
  color: ${({ theme }) => theme.colors.Neutral40};
  font-size: 20px;
  font-weight: bold;
`;

export const StyledAnswer = styled(Paragraph)<{isCorrect: boolean}>`
  font-size: 16px;
  color: ${({ isCorrect, theme }) => isCorrect ? theme.colors.green : theme.colors.Neutral40};
  text-align: left;
  padding:  5px;
`;
