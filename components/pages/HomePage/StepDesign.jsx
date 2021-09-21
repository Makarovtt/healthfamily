import React from 'react'
import styled from 'styled-components';
import Container from './../../UI/Container';
import TitleSection from './../../UI/TitleSection';

function StepDesign() {
    return (
        <Section>
            <Container>
                <GridContainer>
                    <WraperTitle>
                        <TitleSection ><span>Этапы</span><br /> проектирования</TitleSection>
                    </WraperTitle>
                    <Card1 >
                        <TitleCard>Предпроектная подготовка</TitleCard>
                        <Description>
                            Позволяет оценить масштаб, сложность работ, выбрать участок под строительство
                        </Description>
                        <Number bottom>01</Number>
                        <img src="/images/HomePage/step-design/image1.jpg" alt="card" />
                    </Card1>

                    <Card2 >
                        <TitleCard>Разработка проектной документации</TitleCard>
                        <Description>
                            В&nbsp;соответствии с&nbsp;требованиями нормативных актов формируется перечень необходимых документов, который затем подается на&nbsp;рассмотрение экспертной комиссии (государственной или негосударственной). Результат&nbsp;&mdash; положительное заключение экспертизы&nbsp;и, как следствие&nbsp;&mdash; разрешение на&nbsp;строительство
                        </Description>
                        <Number bottom>02</Number>
                        <img src="/images/HomePage/step-design/image2.png" alt="card" />
                    </Card2>

                    <Card3>
                        <TitleCard color='white'>Разработка рабочего проекта</TitleCard>
                        <Number color='#F6BE2D'>03</Number>
                        <Description color='#BEBEBE'>
                            Детальная проработка существующей документации, на&nbsp;основании которой будет возводиться объект.
                        </Description>
                        <img src="/images/HomePage/step-design/image3.jpg" alt="card" />
                    </Card3>
                </GridContainer>
            </Container>
        </Section>
    )
}

export default StepDesign;



const Section = styled.section`
    background: url('/images/HomePage/step-design/banner.jpg') repeat-y top center;
    padding-top: 100px;
    background-color: #efedee;


    @media (max-width: 1200px) {
        padding: 80px 0;
    }

    @media (max-width: 970px) {
        padding: 60px 0;
    }

    @media (max-width: 670px) {
        padding: 30px 0;
    }
`;

const GridContainer = styled.div`
    display: grid;
    gap: 30px 30px;
    grid-template-columns: 1fr 1fr; 
    /* grid-template-rows: 1fr 1fr 1fr 1fr 1fr;  */
    align-items: flex-end;
    grid-template-areas: 
    "title card1"
    "card2 card1"
    "card2 card3"
    "card2 card3"; 

    @media (max-width: 1200px) {

        grid-template-columns: 1fr;

        grid-template-areas: 
        "title"
        "card1"
        "card2"
        "card3"
    }

`;

const WraperTitle = styled.div`
    grid-area: title;

`;

const Card1 = styled.div`
    padding: 30px 35px;
    grid-area: card1;
    height: 320px;
    background-color: white;
    position: relative;
    overflow: hidden;

    img {
        position: absolute;
        right: 0;
        top: 0;
    }


    @media (max-width: 1200px) {
        height: 320px;
    }

    @media (max-width: 480px) {
        height: 320px;

        img {
            right: -40px;
            top: 20px;
        }
    }

    
`;

const Card2 = styled.div`
    grid-area: card2;
    background-color: white;
    padding: 30px 35px;
    height: 580px;
    position: relative;

    img {
        position: absolute;
        right: -50px;
        bottom: 0;
    }

    @media (max-width: 1200px) {
        height: 400px;
        
        img {
            right: -30px;
        }
    }

    @media (max-width: 670px) {
        padding: 15px;
        img {
            opacity: .3;
        }
    }
`;

const Card3 = styled.div`
    grid-area: card3;
    height: 360px;
    background-color: #3b3a38;
    padding-top: 140px;
    padding-left: 30px;
    position: relative;
    overflow: hidden;

    img {
        position: absolute;
        right: 0;
        top: 0;
        width: auto;
        height: 100%;
    }

    @media (max-width: 1200px) {
        height: 320px;
        padding: 30px 35px;
    }
`;

const TitleCard = styled.h3`
    width: 310px;
    position: relative;
    z-index: 1;
    color: ${({ color }) => color};

    @media (max-width: 480px){
        max-width: 290px;
    }
`;

const Number = styled.h3`
    position: absolute;
    font-weight: 900;
    font-size: 170px;
    ${({ bottom }) => bottom ? { bottom: '-43px' } : { top: '-43px' }}
    left: 30px;
    color: ${({ color }) => color ? color : '#EEEEEE'};
    z-index: 1;

    @media (max-width: 1200px) {
        display: none;
    }
`;

const Description = styled.p`
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    max-width: 320px;
    margin-top: 10px;
    position: relative;
    z-index: 1;
    color: ${({ color }) => color ? color : 'initial'};

    @media (max-width: 480px){
        max-width: 290px;
    }
`;




