import React from 'react'
import { StyledImage } from './index.styled'

type Props= {
    url: any;
    alt: string
    width: string;
    height: string;
}
const Image: React.FC<Props> = ({ url, height, width, alt }) => {
    return (
        <StyledImage 
            src={url}
            width={width}
            height={height}
            alt={alt}>
        </StyledImage>
    )
}

export default Image