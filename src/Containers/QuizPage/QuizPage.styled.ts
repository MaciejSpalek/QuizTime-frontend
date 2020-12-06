import styled from 'styled-components';
import MultiStepForm from 'Components/organisms/MultiStepForm';
import { FlexColumn } from 'styles/mixins';

export const StyledMultiStepForm = styled(MultiStepForm)`
    ${FlexColumn};
    form {
        height: calc(100vh - 2*60px);
    }
    div {
        top: calc(100vh - 2*60px)
    }
`;

