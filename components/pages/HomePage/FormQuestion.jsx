import React, { useState, useEffect, useRef, useMemo } from 'react'
import styled from 'styled-components'
import Container from '../../UI/Container'
import Navigation from '../../Navigation/Navigation';

import FormWraper_ from '../../UI/FormWraper';
import PhoneInputButton from '../../UI/PhoneInputButton';
import DescriptionName from '../../UI/DescriptionName';
import TitleSection from '../../UI/TitleSection';
import SubTitleSection_ from '../../UI/SubTitleSection';
import Input from '../../UI/Input';

const SubTitleSection = styled(SubTitleSection_)`
    margin-top: 15px;
`;

const FormWraper = styled(FormWraper_)`
    position: relative;
    bottom: -15px;
    z-index: 100;
`;

const initialObj = {
    phone: '',
    name: ''
}


function FormQuestion() {


    const [obj, setObj] = useState(initialObj);

    const changeObjHandler = (value, id) => {
        setObj(pre => ({ ...pre, [id]: value }))
    }

    const sendInput = () => {
        if (!obj.phone) {
            alert('Введите телефон');
            return
        }
        if (obj.phone.includes('_')) {
            alert('Введите телефон полностью');
            return
        }
        console.log(obj);
        setObj(initialObj);
    }


    return (
        <Section id='form'>
            <Container>

                <WraperTitle>
                    <TitleSection>Остались <span>вопросы ?</span></TitleSection>
                    <SubTitleSection>{'Оставьте заявку на сайте <br /> и получите скидку в 2000 руб.'}</SubTitleSection>
                </WraperTitle>


                <FormWraper
                    title='Получить скидку <br/> в 2 000 рублей'
                    messangeWarning='Нажимая на кнопку «Получить» <br/> Вы автоматически соглашаетесь с политикой конфиденциальности <br/> и даете согласие на обработку персональных данных'
                >

                    <Input
                        placeholder='Ваше имя'
                        id='name'
                        changeMetod={changeObjHandler}
                        value={obj.name}
                    />

                    <PhoneInputButton
                        placeholder={'+7 (___) ___-____'}
                        value={obj.phone}
                        changeMetod={changeObjHandler}
                        onClick={sendInput}
                        id='phone' />
                </FormWraper>

            </Container>

        </Section >
    )
}

export default FormQuestion;

const WraperTitle = styled.div`
    margin-bottom: 30px;
`;


const ListDescription = styled.ul`
    
    margin-top: 20px;

    li:last-child {
        margin-bottom: 30px;
    }
`;



const Section = styled.section`
    background: url('/images/HomePage/form/background-min.jpg') no-repeat top center;
    background-color: var(--back-gradient);
    padding-top: 100px;
`;

const Left = styled.div`
    h1 {
        font-weight: 400;
    }
    /* min-width: 600px; */
    flex: 1 0 auto;
    position: relative;
    z-index: 1;
`;



const Right = styled.div`
    position: relative;
    width: 100%;
`;

const DoctorImg = styled.img`
    position: absolute;
    right: 0;
    bottom: -300px;
    z-index: 0;
`;

const FlexContainer = styled.div`
    display: flex;

    @media (max-width: 1200px) {
       flex-direction: column;
    }

`;
