import styled from 'styled-components';
import { FlexColumn, FlexCenter } from 'theme/Mixins';
import FormField from 'templates/FormFieldTemplate/FormFieldTemplate';



export const StyledInputField = styled(FormField)`
    ${FlexCenter};
    flex-direction: row;
    margin: 5px 0;
    label {
        margin-right: 5px;
    }
`
