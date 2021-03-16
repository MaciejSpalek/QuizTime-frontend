import styled from "styled-components";

export const StyledCategoryList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  width: 100%;
  padding: 10px;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
