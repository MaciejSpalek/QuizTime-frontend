import styled from 'styled-components';
import { FlexColumn, FlexCenter } from 'theme/Mixins';
import FormField from 'templates/FormFieldTemplate/FormFieldTemplate';

export const StyledQuestionPanel = styled.div`
    ${FlexColumn};
    height: 100%;
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

export const StyledFormField = styled(FormField)`
    ${FlexCenter};
    flex-direction: row;
    margin: 5px 0;
    label {
        margin-right: 5px;
    }
`

export const StyledQuestionFormField = styled(FormField)`
    margin: 5px 0;
`