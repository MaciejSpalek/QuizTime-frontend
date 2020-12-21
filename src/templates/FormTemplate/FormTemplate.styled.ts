import styled from 'styled-components';
import colors from 'styles/colors';
import { FlexCenter } from 'styles/mixins';

export const StyledForm = styled.form`
    ${FlexCenter};
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: ${colors.Gray100};
`;
