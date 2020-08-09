import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: 5px;
  height: 35px;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, .3);
  transition: box-shadow 0.3s ease-in-out;
  outline: none;
`;