import React from 'react'
import { StyledImage } from './index.styled'

interface Props {
    url: any
    alt: string
    width: string
    height: string
    margin?: string
}

const Image: React.FC<Props> = ({ url, height, width, alt, margin }) => {
    return (
        <StyledImage 
            src={url}
            alt={alt}
            width={width}
            height={height}
            margin={margin}>
        </StyledImage>
    )
}

export default Image