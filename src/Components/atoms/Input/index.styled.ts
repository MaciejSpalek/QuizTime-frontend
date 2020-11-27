import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: 5px;
  height: 45px;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({theme}) => theme.colors.Neutral80};
  border-radius: 5px;
  transition: box-shadow 0.3s ease-in-out;
  outline: none;
  margin-bottom: 5px;
`;