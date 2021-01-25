import colors from 'styles/colors';
import styled from 'styled-components';
import { FlexCenter } from 'styles/Mixins';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledContainer = styled.div`
    ${FlexCenter};
    justify-content: space-between;
    height: 60px;
    width: 100%;
    padding: 10px;
    background-color: ${colors.Gray120};
    border-bottom: 2px solid ${colors.Gray100};
`;

export const StyledWrapper = styled.div`
    ${FlexCenter};
    justify-content: space-evenly;
    width: auto;
    height: 45px;
    background-color: ${colors.Gray40};
    border-radius: 5px;
    padding: 0 10px;
`;


export const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 28px;
    color: ${colors.Gray80};
    margin-right: 10px;
`;

export const StyledUserTag = styled.span`
    font-size: 20px;
    font-weight: bold;
    color: ${colors.Gray20};
`;