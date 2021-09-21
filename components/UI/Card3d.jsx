import React from 'react'
import styled from 'styled-components';

function Card3d({ children }) {
    return (

        <Card>
            <Front>{children[0]}</Front>
            <Back>{children[1]}</Back>
        </Card>
    )
}

export default Card3d;




const Front = styled.div`
    
`;

const Back = styled.div`
    transform: rotateY(180deg);
`;

const Card = styled.div`
    margin: 15px;
    min-width: 370px;
    min-height: 230px;
    position: relative;
    perspective: 1000px;
    cursor: pointer;

    ${Front}, ${Back} {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        transition: .6s;
        backface-visibility: hidden;
    }

    :hover {
        ${Front} {
            transform: rotateY(180deg);
        }

        ${Back} {
            transform: rotateY(360deg);
        }
    }

    @media (max-width: 480px) {
        min-width: 280px;
    }
`;
