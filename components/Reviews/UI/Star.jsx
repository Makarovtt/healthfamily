import React from 'react'
import styled from 'styled-components';

const getWidthProcent = (starCount) => {
    return starCount * 100 / 5
}

function Star({ starCount }) {
    return (
        <ContainerStar width={getWidthProcent(starCount)}>
            <img src="/images/reviews/star.svg" alt="star" />
        </ContainerStar>
    )
}

export default Star;

const ContainerStar = styled.div`
    height: 21px;
    width: fit-content;
    position: relative;

    ::after {
            position: absolute;
            top: 0;
            content: '';
            display: block;
            width: ${({ width }) => width ? width + '%' : '100%'};
            height: 100%;
            background: url('/images/reviews/starActive.svg') no-repeat;
    }

    @media (max-width: 670px) {

       width: 120px;

        img {
            width: 100%;
        }

        ::after {
            position: absolute;
            top: 0;
            content: '';
            display: block;
            width: ${({ width }) => width ? width + '%' : '100%'};
            height: 100%;
            background: url('/images/reviews/starActive.svg') no-repeat;
            background-size: 120px;
        }

    }

    
`;
