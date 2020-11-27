import styled from 'styled-components';
import { FlexCenter } from 'theme/Mixins';

export const StyledWrapper = styled.div`
    ${FlexCenter};
    width: auto;
    height: auto;
    margin-left: 20px;
    label {
        position: relative;
        ::before {
            content: "";
            position: absolute;
            right: 0;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: 2px solid ${({theme}) => theme.colors.green};
            transform: translate(0, -50%);
            transition: .3s ease-in-out;
        }
        ::after {
            content: "";
            position: absolute;
            right: 0;
            width: 22px;
            height: 22px;
            border-radius: 50%;
            transform: translate(0, -50%);
            background-color: ${({theme}) => theme.colors.green};
            transition: .3s ease-in-out;
            opacity:0;
            margin-right: 4px;
        }
    }
`;

export const StyledRadioButton = styled.input`
    opacity: 0;
    :checked ~ label::after {
        opacity: 1;
    }
`;

