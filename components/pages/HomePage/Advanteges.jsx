import styled from 'styled-components';
import Container from '../../UI/Container';
import SubTitleSection from '../../UI/SubTitleSection';
import TitleSection from '../../UI/TitleSection';


function Advanteges() {
    return (
        <Section>
            <TopDecor src="images/HomePage/advantages/decor.png" alt="decor" />
            <CircleMask />

            <Container>
                <ContainerSection>
                    <TitleSection center>Почему следует <span>обратиться к нам?</span></TitleSection>
                    <SubTitleSection center>Специалисты, которых рекомендуют</SubTitleSection>

                    <WraperAdvatege left>
                        <img src="/images/HomePage/advantages/image1.png" alt="advantages" />
                        <WraperText>
                            <WraperBorder>
                                <TextTitle>Опытные специалисты и&nbsp;современное оборудование</TextTitle>
                                <Text>Основное преимущество &laquo;Здоровье семьи&raquo;&nbsp;&mdash; это врачи высшей категории с&nbsp;большим стажем (более 10&nbsp;лет) и&nbsp;опытом работы в&nbsp;сфере интимной контурной пластики и&nbsp;не&nbsp;только. Наши специалисты имеют необходимое образование и&nbsp;постоянно совершенствуют свои профессиональные навыки</Text>
                            </WraperBorder>
                        </WraperText>
                    </WraperAdvatege>

                    <WraperAdvatege>
                        <WraperText>
                            <WraperBorder>
                                <TextTitle>Быстрое восстановление без крови и боли</TextTitle>
                                <Text>Процедура проводится без операции, наркоза и&nbsp;сопровождается минимальными рисками. В&nbsp;ходе манипуляций мы&nbsp;используем сертифицированные препараты и&nbsp;гарантируем отсутствие побочных эффектов</Text>
                            </WraperBorder>
                        </WraperText>
                        <img src="/images/HomePage/advantages/image2.png" alt="advantages" />
                    </WraperAdvatege>

                    <WraperAdvatege left>
                        <img src="/images/HomePage/advantages/image3.png" alt="advantages" />
                        <WraperText>
                            <WraperBorder>
                                <TextTitle>Современное оборудование и большой опыт в эстетических операциях</TextTitle>
                                <Text>Специалисты &laquo;Здоровье семьи&raquo; помогут вам стать красивыми и&nbsp;сексуальными без боли, выраженных отёков и&nbsp;осложнений! Достигнуть желаемого результата удаётся не&nbsp;только благодаря опыту и&nbsp;профессионализму врачей, но&nbsp;и&nbsp;оснащённости центра современным медицинским оборудованием, инструментарием и&nbsp;применением качественных шовных материалов.
                                    Нами проведено уже большое количество операций, тем самым мы&nbsp;избавили многих женщин от&nbsp;комплексов интимной зоны.</Text>
                            </WraperBorder>
                        </WraperText>
                    </WraperAdvatege>

                    <WraperAdvatege >
                        <WraperText>
                            <WraperBorder>
                                <TextTitle>Полностью анонимно</TextTitle>
                                <Text>Конфиденциальность&nbsp;&mdash; один из&nbsp;главных принципов нашей деятельности. Скованность многих пациенток определяется неуверенностью в&nbsp;безопасности предоставляемой ими информации. Мы&nbsp;же гарантируем, что все сказанное на&nbsp;консультации и&nbsp;все принятые решения между пациенткой и&nbsp;врачом останутся сугубо между ними. Так что приходите к&nbsp;нам со&nbsp;спокойной душой!</Text>
                            </WraperBorder>
                        </WraperText>
                        <img src="/images/HomePage/advantages/image4.png" alt="advantages" />
                    </WraperAdvatege>

                </ContainerSection>
            </Container>
            <BottomDecor src="images/HomePage/advantages/decor.png" alt="decor" />
        </Section>
    )
}

export default Advanteges;

const WraperAdvatege = styled.div`
    display: flex;
    align-items: center;

    ${({ left }) => left ? ({ marginTop: 30 }) : ({ justifyContent: 'flex-end', marginTop: 30 })};
    
    img {
       ${({ left }) => left ? ({ marginRight: 30 }) : ({ marginLeft: 30 })};
    }

    @media (max-width: 960px) {

        margin-top: 20px;

        img {
            width: 350px;
        }
    }


    @media (max-width: 760px) {

        flex-direction: ${({ left }) => left ? 'column' : 'column-reverse'};

        ${({ left }) => left ? ({ marginTop: 30 }) : ({ justifyContent: 'flex-end', marginTop: 30 })};

        img {
            margin: 0;
        }
    }

    @media (max-width: 480px) {

        img {
            width: 300px;
            margin: 0;
        }
    }
`;

const WraperText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: white;
    padding: 10px;
    box-shadow: 0.698px 9.976px 24px 0px rgba(179, 70, 44, 0.13);
    
`;

const WraperBorder = styled.div`
    border: solid #f2efef 1px;
    border-radius: 10px;
    padding: 20px;
    width: 100%;
`;

const TextTitle = styled.h3`
    max-width: 500px;
`;

const Text = styled.p`
    max-width: 500px;
    font-size: 16px;
    line-height: 150%;
    margin-top: 10px;
`;

const ContainerSection = styled.div`
    position: relative;
    z-index: 4;
`;

const Section = styled.section`
    padding: 100px 0;
    margin-top: 50px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* overflow: hidden; */
    position: relative;

    ::after {
        content: '';
        background: #f9f9f9;
        position: absolute;
        z-index: 2;
        bottom: 0;
        width: 100%;
        height: 200px;
    }
`;

const CircleMask = styled.div`
    border-radius: 50%;
    background: var(--back-gradient);
    width: 4000px;
    height: 100%;
    position: absolute;
    z-index: 3;
`;

const TopDecor = styled.img`
    position: absolute;
    top: -45px;
    z-index: 4;
`;

const BottomDecor = styled.img`
    position: absolute;
    bottom: -45px;
    z-index: 4;
    transform: rotate(180deg);
`;


