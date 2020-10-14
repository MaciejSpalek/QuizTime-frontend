import styled from 'styled-components';
import { FlexColumn, FlexCenter } from 'theme/Mixins';
import FormField from 'templates/FormFieldTemplate/FormFieldTemplate';

export const StyledAddingPanel = styled.div`
    ${FlexColumn};
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: white;
    overflow-y: scroll;
`

export const StyledTemplate = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 1fr);
    width: 100%;
    background-color: white;
    border-radius: 5px;
    border: 2px solid ${({theme}) => theme.colors.Neutral80};
`


export const StyledQuestionFormField = styled(FormField)`
    margin: 5px 0;
`