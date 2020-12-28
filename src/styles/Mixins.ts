import { css } from "styled-components";
import colors from "./Colors";

export const FlexColumn = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FlexRow = css`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const FirstLinkStyle = css`
  background-color: ${({ theme }) => theme.colors.grayscale[2]};
  padding: 10px;
  margin: 10px 0;
  font-weight: bold;
`;

export const AbbreviateText = css`
  -ms-word-break: break-all;
  word-break: break-all;
  word-break: break-word;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
`;

export const scrollBar = css`
  ::-webkit-scrollbar {
    width: 5px;
    @media (min-width: 900px) {
      width: 16px;
    }
  }

  ::-webkit-scrollbar-track {
    background: ${colors.Gray80};
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: ${colors.BasicGreen};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.Gray20};
  }
`;
