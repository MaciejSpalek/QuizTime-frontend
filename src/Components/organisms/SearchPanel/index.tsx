import React from 'react'
import { StyledContainer } from './index.styled'
import Label from '../../atoms/Label'
import Input from '../../atoms/Input'
import Image from '../../atoms/Image'
import ReadingGlassImage from '../../../assets/ReadingGlass.svg'

const SearchPanel = ()=> {
    return (
        <StyledContainer>
            <Label>
                <Input 
                    type="search"
                    placeholder="Szukaj quizu"
                    ariaLabel="Wyszukiwarka quizów"
                />
            </Label>
            <Image 
                url={ReadingGlassImage}
                alt="Lupa"
                width="25px"
                height="25px"
                margin="0 0 0 10px"
            />
        </StyledContainer>
    )
}

export default SearchPanel
