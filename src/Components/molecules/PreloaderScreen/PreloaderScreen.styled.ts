import PreloaderScreen from 'Components/molecules/PreloaderScreen';
import styled from 'styled-components';
import colors from 'styles/Colors';

export const StyledPreloaderScreen = styled(PreloaderScreen)`
    height: calc(100vh - 60px); 
    width: 900px;
    background-color: ${colors.Gray120};
`;