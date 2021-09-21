import React from 'react'
import styled from 'styled-components';
import Container from '../../UI/Container';
import Dots from '../../UI/Dots';
import TitleSection from '../../UI/TitleSection';

function AboutUs() {
    return (
        <Section>
            <Container>
                <FlexContainer>
                    <Left>
                        <TitleSection>О нашем <span>центре</span></TitleSection>

                        <AboutText>
                        Центр «Здоровье семьи» существует с 2012. 
Специлисты центра являются практикующими специалистами в области гинекологии 
и постоянно совершенствуют свой профессиональный уровень, регулярно участувуют в научных конференцих, 
проходят курсы повышения квалификации.
                        </AboutText>

                        <AboutText>
                            Конфиденциальность&nbsp;&mdash; один из&nbsp;главных принципов нашей деятельности. Скованность многих пациенток определяется неуверенностью в&nbsp;безопасности предоставляемой ими информации.
                        </AboutText>

                        <AboutText>
                            Мы же гарантируем, что все сказанное на консультации и все принятые решения между пациенткой и врачом останутся сугубо между ними. Так что приходите к нам со спокойной душой!
                        </AboutText>
                    </Left>

                    <Right>
                        <img src="/images/HomePage/About/Office.jpg" alt="office" />
                    </Right>

                </FlexContainer>

            </Container>
        </Section>
    )
}

export default AboutUs;

const ListDescription = styled.ul`
    
`;

const Section = styled.section`
    padding: 100px 0;

    @media (max-width: 1200px) {
        padding: 80px 0;
    }

    @media (max-width: 970px) {
        padding: 60px 0;
    }

    @media (max-width: 670px) {
        padding: 40px 0;
    }
`;

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 970px) {
        display: block;
    }
`;

const Left = styled.div`
    

`;

const AboutText = styled.p`
    margin-top: 20px;
    line-height: 160%;
    max-width: 450px;

    span {
        font-weight: 900;
    }

    @media (max-width: 670px) {
        margin-top: 10px;
        line-height: 140%;
    }


`;

const Right = styled.div`
    position: relative;
    margin-left: 30px;
    img {
        position: relative;
        z-index: 2;
    }

    @media (max-width: 970px) {
        margin-left: initial;
        margin-top: 30px;
        width: fit-content;
    }

    @media (max-width: 670px) {
        width: 100%;
        img {
            width: 100%;
        }
    }
    
`;


