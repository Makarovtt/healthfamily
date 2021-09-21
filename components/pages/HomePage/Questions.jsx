import React from 'react'
import styled from 'styled-components';
import Button from '../../UI/Button';
import Container from '../../UI/Container';
import SubTitleSection from '../../UI/SubTitleSection';
import TitleSection from '../../UI/TitleSection';
import WraperQuestion from '../../UI/WraperQuestion';

const arrQuestions = [
    { qestion: 'Какой вид наркоза используется при интимной пластике?', responce: 'Для удобства пациентки данная процедура проводится под местной анестезией' },
    { qestion: 'Как долго нельзя заниматься сексом после интимной пластики?', responce: 'При инъекционной интимной пластике период воздержания - 2 дня. При оперативном вмешательстве период восстановления составляет в среднем 2-3 недели, а половая активность возможна через 4-6 недель' },
    { qestion: 'Остаются ли рубцы или шрамы после операции по интимной пластике?', responce: 'Практически нет. Современные методики и опыт наших специалистов позволяют сделать интимную зону естественной и без следов оперативного вмешательства' },
    { qestion: 'На сколько сохраняется эффект?', responce: 'При соблюдении рекомендаций врача эффект сохраняется  от 8 до 18 мес.' },
    { qestion: 'Какие есть противопоказания?', responce: 'Индивидуальная непереносимость препаратов, онкозаболевания, воспалительные процессы на период процедуры' },
    { qestion: 'Какие анализы сдавать перед процедурой?', responce: 'Перед проведением процедуры интимной пластики необходимо сдать анализы на флору, онкоцитологию, ЗПП, Rw, ВИЧ, коагулограмма, общий анализ крови' },
]

function Questions() {
    return (
        <Section>
            <Container>
                <TitleSection center>Часто задаваемые <span>вопросы</span></TitleSection>
                <SubTitleSection center>Перед обращением к нам</SubTitleSection>
                <QuestionsList>
                    {arrQuestions.map((item, index) => {
                        return (
                            <WraperQuestion
                                key={index}
                                textQuestion={item.qestion}
                                textResponce={item.responce} />
                        )
                    })}

                </QuestionsList>
                {/* <WraperButton>
                    <Button>Задать свой вопрос</Button>
                </WraperButton> */}
            </Container>
        </Section>
    )
}

export default Questions;

const WraperButton = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
`;

const Section = styled.section`
    
`;

const QuestionsList = styled.ul`
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;
`;
