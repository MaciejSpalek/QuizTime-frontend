import styled from 'styled-components';
import { FlexColumn } from 'theme/Mixins';

export const StyledQuestionsPanel = styled.div`
    ${FlexColumn};
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: white;
    overflow-y: scroll;
`