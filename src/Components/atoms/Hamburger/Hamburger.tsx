import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { StyledButton, StyledInnerBox, StyledOuterBox } from './Hamburger.styled'
import { setHamburgerStatus } from 'redux/Actions/statusesActions'

const Hamburger = ()=> {
    const hamburgerStatus = useSelector<RootState, boolean>(state => state.statuses.hamburgerStatus)
    const dispatch = useDispatch();

    const toggle = ()=> dispatch(setHamburgerStatus(!hamburgerStatus));

    return (
        <StyledButton aria-expanded="false" onClick={toggle}>
            <StyledOuterBox>
                <StyledInnerBox></StyledInnerBox>
            </StyledOuterBox>
        </StyledButton>
    )
}

export default Hamburger
