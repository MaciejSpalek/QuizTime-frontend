import React, { useEffect, useState, useRef, useCallback } from 'react';
import { IProgressBar } from './CircularProgressBar.model';
import { 
    StyledContainer, 
    StyledWrapper, 
    StyledCircle, 
    StyledScore, 
    StyledText
} from './CircularProgressBar.styled';

const CircularProgressBar = ({
    size,
    score,
    progress,
    strokeWidth
}: IProgressBar) => {
    const circleRef = useRef<SVGCircleElement>(null);
    const [offset, setOffset] = useState(0);
    const [center] = useState(size / 2);
    const [radius] = useState(size / 2 - strokeWidth / 2);
    const [circumference] = useState(2 * Math.PI * radius);

    const manageProgress = useCallback(() => {
        setOffset((progress / 100) * circumference);
        (circleRef as any).current.style = 'transition: stroke-dashoffset 1s ease-in-out';
    }, [progress, circumference]);

    useEffect(() => {
        !isNaN(progress) && manageProgress();
    }, [setOffset, progress, circumference, offset, manageProgress]);


    return (
        <StyledContainer>
            <svg
                className="svg"
                width={size}  
                height={size}>
                <StyledCircle
                    className="svg-circle-bg"
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                />
                <StyledCircle
                    className="svg-circle"
                    ref={circleRef}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                />
            </svg>
            <StyledWrapper >
                <StyledText> SCORE </StyledText>
                <StyledScore> {score} </StyledScore>
            </StyledWrapper>
        </StyledContainer>
    );
};



export default CircularProgressBar;