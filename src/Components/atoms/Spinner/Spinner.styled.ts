import styled from 'styled-components';
import colors from 'styles/colors';
import {Spinner as Loader} from 'react-bootstrap';

export const StyledLoader = styled(Loader)`
    width: 40px;
    height: 40px;
    color: ${colors.BasicGreen};
`;