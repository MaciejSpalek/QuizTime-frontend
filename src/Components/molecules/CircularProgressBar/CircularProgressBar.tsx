import React, { useEffect, useState, useRef, useCallback } from 'react';
import { IProgressBar } from './CircularProgressBar.model';
import { 
    StyledContainer, 
    StyledWrapper, 
    StyledCircle, 
    StyledScore, 
    StyledText, 
    StyledSVG
} from './CircularProgressBar.styled';

const CircularProgressBar = ({
    size,
    score,
    color,
    progress,
    strokeWidth
}: IProgressBar) => {
    const [offset, setOffset] = useState(0);
    const circleRef = useRef(null);
    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    const manageProgress = useCallback(() => {
        const progressOffset = (progress / 100) * circumference;
        setOffset(progressOffset);
        (circleRef as any).current.style = 'transition: stroke-dashoffset 1s ease-in-out';
    }, [progress, circumference]);

    useEffect(() => {
        !isNaN(progress) && manageProgress();
    }, [setOffset, progress, circumference, offset, manageProgress]);


    return (
        <StyledContainer>
            <StyledSVG
                className="svg"
                width={size}  
                height={size}>
                <StyledCircle
                    color={color}
                    className="svg-circle-bg"
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                />
                <StyledCircle
                    color={color}
                    className="svg-circle"
                    ref={circleRef}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                />
            </StyledSVG>
            <StyledWrapper >
                <StyledText> SCORE </StyledText>
                <StyledScore color={color}> {score} </StyledScore>
            </StyledWrapper>
        </StyledContainer>
    );
};



export default CircularProgressBar;