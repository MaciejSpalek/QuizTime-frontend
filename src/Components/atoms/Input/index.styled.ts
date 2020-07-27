import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: 5px;
  height: 35px;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  outline: none;
`;