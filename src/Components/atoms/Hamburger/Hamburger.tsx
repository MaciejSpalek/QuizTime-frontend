import React from 'react';
import { RootState } from 'redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setHamburgerStatus } from 'redux/Actions/statusActions';
import { StyledButton, StyledInnerBox, StyledOuterBox } from './Hamburger.styled';

const Hamburger = ()=> {
    const hamburgerStatus = useSelector<RootState, boolean>(state => state.status.hamburgerStatus);
    const dispatch = useDispatch();
    const toggle = ()=> dispatch(setHamburgerStatus(!hamburgerStatus));

    return (
        <StyledButton aria-expanded="false" onClick={toggle}>
            <StyledOuterBox>
                <StyledInnerBox isActive={hamburgerStatus}/>
            </StyledOuterBox>
        </StyledButton>
    );
};

export default Hamburger;
