import styled from 'styled-components';
import {Spinner as Loader} from 'react-bootstrap';

export const StyledLoader = styled(Loader)`
    width: 40px;
    height: 40px;
    color: ${({theme}) => theme.colors.green}
`;