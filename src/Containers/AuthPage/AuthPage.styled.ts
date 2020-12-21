import styled from 'styled-components';
import Button from 'Components/atoms/Button';
import Link from 'Components/atoms/Link/index';
import PageTemplate from 'templates/PageTemplate/PageTemplate';
import AuthForm from 'templates/FormTemplate';
import Label from 'Components/atoms/Label/index';

export const StyledButton = styled(Button)`
    width: 100%;
`;

export const StyledLink = styled(Link)`
    width: auto;
`;

export const StyledContainer = styled(PageTemplate)`
    width: 100%;
`;

export const StyledAuthForm = styled(AuthForm)`
    max-width: 300px;
`;

export const StyledLabel = styled(Label)`
    align-self: flex-start;
`;

