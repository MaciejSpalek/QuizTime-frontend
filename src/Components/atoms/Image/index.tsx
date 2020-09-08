import React from 'react'
import { StyledImage } from './index.styled'

type Props = {
    url: any
    alt: string
    width: string
    height: string
    margin?: string
}

const Image = ({ url, height, width, alt, margin }: Props) => {
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