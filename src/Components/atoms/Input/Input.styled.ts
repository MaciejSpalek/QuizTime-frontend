import styled from 'styled-components';
import colors from 'styles/colors';

export const StyledInput = styled.input`
  padding: 5px;
  height: 45px;
  width: 100%;
  font-size: 16px;
  background-color: ${colors.White};
  border: 2px solid ${colors.Gray80};
  border-radius: 5px;
  transition: box-shadow 0.3s ease-in-out;
  outline: none;
  margin-bottom: 5px;
`;