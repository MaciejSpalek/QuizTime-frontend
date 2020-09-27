import styled, {css} from "styled-components";
import { FlexColumn } from "../../../theme/Mixins";
import { LogoutIcon, LoginIcon, HomeIcon, UserIcon } from '../../../assets';

export const StyledMenu = styled.ul`
    ${FlexColumn};
    align-items: flex-start;
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: ${({theme}) => theme.colors.white};
    padding: 10px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, .3);    
    z-index: 999;
`

const IconStyles = css`
    width: 40px;
    height: 40px;
    margin-right: 10px;
`

export const StyledLoginIcon = styled(LoginIcon)`
    ${IconStyles}
`
export const StyledHomeIcon = styled(HomeIcon)`
    ${IconStyles}
`
export const StyledUserIcon = styled(UserIcon)`
    ${IconStyles}
`
export const StyledLogoutIcon = styled(LogoutIcon)`
    ${IconStyles}
`
