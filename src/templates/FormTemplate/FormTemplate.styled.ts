import styled from 'styled-components';
import colors from 'styles/Colors';
import { FlexCenter } from 'styles/Mixins';

export const StyledForm = styled.form`
    ${FlexCenter};
    flex-direction: column;
    height: 100%;
    padding: 10px;
    background-color: ${colors.Gray120};
`;
