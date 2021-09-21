import styled from 'styled-components';

function TitleAdvantages({ colorTitle = '#272727', colorNumber = '#272727', children, fontWeight }) {
    return (
        <Title
            fontWeight={fontWeight}
            colorNumber={colorNumber}
            colorTitle={colorTitle}>
            {children}
        </Title>
    )
}

export default TitleAdvantages


const Title = styled.h2`
    position: relative;
    z-index: 2;
    color: ${({ colorTitle }) => colorTitle};
    margin-bottom: 5px;
    font-weight:${({ fontWeight }) => fontWeight ? fontWeight : '900'};

    span {
        color: ${({ colorNumber }) => colorNumber};
        font-size: 58px;
    }

    @media (max-width: 970px){
        span {
            font-size:40px;
        }
    }

    @media (max-width: 760px){
        span {
            font-size:36px;
        }
    }

    @media (max-width: 480px){
        span {
            font-size:30px;
        }
    }
`;