import styled from 'styled-components';
import FormField from 'templates/FormFieldTemplate/FormFieldTemplate';
import ErrorMessage from 'Components/atoms/ErrorMessage';
import { FlexColumn, FlexCenter } from 'styles/mixins';



export const StyledInputField = styled(FormField)`
    ${FlexCenter};
    flex-direction: row;
    margin: 5px 0;
    label {
        margin-right: 5px;
    }
`;

export const StyledWrapper = styled.div`
    ${FlexColumn};
    flex-direction: column;
`;

export const StyledErrorMessage = styled(ErrorMessage)`
    margin-left: 60px;
`;