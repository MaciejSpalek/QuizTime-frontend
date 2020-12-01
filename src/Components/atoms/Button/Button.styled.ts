import styled from 'styled-components';
import colors from 'styles/colors';

export const StyledButton = styled.button.attrs(props => ({
    isDisabled: props.disabled
}))`
    position: relative;
    color: ${({isDisabled}) => isDisabled ? colors.Gray60 : colors.White};
    min-height: 45px;
    font-size: 24px;
    font-weight: bold;
    font-size: 22px;
    background-color: ${({isDisabled}) => isDisabled ? colors.DarkGreen : colors.BasicGreen};
    border-radius: 5px;
    border: none;
    overflow: hidden;
    padding: 0 5px;
    margin: 5px 0;
    cursor: pointer;
`;

