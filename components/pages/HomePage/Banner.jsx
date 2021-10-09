import React, { useState, useEffect, useRef, useMemo } from 'react'
import styled from 'styled-components'
import Container from '../../UI/Container'
import Navigation from '../../Navigation/Navigation';

import FormWraper from '../../UI/FormWraper';
import PhoneInputButton from '../../UI/PhoneInputButton';
import _DescriptionName from '../../UI/DescriptionName';



const arrBanners = [
    {
        image: '/images/HomePage/Banner/background.jpg',
        titleName: 'Курцева <br /> Наталья Николаевна</h5>',
        description: 'Гинеколог, стаж 25&nbsp;лет.<br>Врач высшей категории',
        id: 'back1'
    },
    {
        image: '/images/HomePage/Banner/background2.jpg',
        titleName: 'Горюнова <br /> Татьяна Винальевна',
        description: 'Акушер-гинеколог. Член&nbsp;ассоциации эстетической гинекологии&nbsp;РФ',
        id: 'back2'
    },
]


const DescriptionName = styled(_DescriptionName)`
    @media (max-width: 800px) {
        display: none;
    }
`;


function Banner() {
    const section = useRef();
    const [autoSlide, setAutoSlide] = useState(true);
    const [backIndex, setBackIndex] = useState(0);
    const [input, setInput] = useState('');


    useEffect(() => {

        window.addEventListener('resize', changeWidth);

        return () => window.removeEventListener('resize', changeWidth)
    }, []);

    const changeWidth = () => {
        if (section.current.offsetWidth <= 480 && pageYOffset > section.current.clientHeight) {
            setAutoSlide(false);
        }
        else setAutoSlide(true)
    }


    useEffect(() => {
        let intervalSlide = null;
        if (autoSlide) {

            intervalSlide = setInterval(() => {
                backIndex === 0 ? setBackIndex(1) : setBackIndex(0)
            }, 6000)
        }

        return () => clearInterval(intervalSlide);

    }, [backIndex, autoSlide])


    const scrollHandler = () => {
        if (pageYOffset > section.current.clientHeight) {
            setAutoSlide(false)
        }
        else setAutoSlide(true)
    }


    const scrollMemo = useMemo(() => scrollHandler, []);

    useEffect(() => {
        addEventListener('scroll', scrollMemo);

        return () => removeEventListener('scroll', scrollMemo);
    })



    const sendInput = () => {
        if (!input) {
            alert('Введите телефон');
            return
        }
        if (input.includes('_')) {
            alert('Введите телефон полностью');
            return
        }
        console.log(input);
        setInput('');
    }


    return (
        <Section ref={section} background={arrBanners[backIndex].id}>
            <Back1 />
            <Back2 />
            <Container>
                <Navigation phone={'+7 (8512) 51-81-51'} adress={'улица Набережная Приволжского затона, 17 / 1'} />
                <FlexContainer>
                    <Left>
                        <h1>Интимная пластика</h1>
                        <ListDescription>
                            <ItemDescription>
                                <p>В короткие сроки</p>
                            </ItemDescription>
                            <ItemDescription>
                                <p>Без боли</p>
                            </ItemDescription>
                            <ItemDescription>
                                <p>Полностью анонимно</p>
                            </ItemDescription>
                        </ListDescription>
                        <FormWraper
                            title='Получить скидку <br/> в 2 000 рублей'
                            description='Оставьте заявку на&nbsp;сайте и&nbsp;получите скидку в&nbsp;2000&nbsp;руб.'
                            messangeWarning='Нажимая на&nbsp;кнопку &laquo;Получить&raquo; Вы&nbsp;автоматически соглашаетесь с&nbsp;политикой конфиденциальности и&nbsp;даете согласие на&nbsp;обработку персональных данных'
                        >
                            <PhoneInputButton
                                placeholder={'+7 (___) ___-____'}
                                value={input}
                                changeMetod={setInput}
                                onClick={sendInput} />
                        </FormWraper>
                    </Left>
                    <Right>
                        <DescriptionName
                            titleName={arrBanners[backIndex].titleName}
                            description={arrBanners[backIndex].description}
                        />
                    </Right>
                </FlexContainer>

            </Container>

        </Section >
    )
}

export default Banner;


const ListDescription = styled.ul`
    
    margin-top: 10px;

    li:last-child {
        margin-bottom: 30px;
    }
`;

const ItemDescription = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 10px;


    &::before {
        content: '';
        width: 8px;
        height: 8px;
        background-color: #fc6600;
        border-radius: 50%;
        margin-right: 10px;
    }

    p {
        font-size: 24px;
        color: #93517f;
    }

    @media (max-width: 1200px) {
        p {
            font-size: 18px;
        }
    }
`;


const Back1 = styled.div``;
const Back2 = styled.div``;

const Section = styled.section`
    background: url('/images/HomePage/Banner/backgroundzero.jpg') no-repeat top center;
    transition-duration: .8s;
    position: relative;
    
    ${Back1} {
        background: url('/images/HomePage/Banner/background.jpg') no-repeat top center;
        opacity: ${({ background }) => background === 'back1' ? 1 : 0};
    }

    ${Back2} {
        background: url('/images/HomePage/Banner/background2.jpg') no-repeat top center;
        opacity: ${({ background }) => background === 'back2' ? 1 : 0};
    }

    ${Back1}, ${Back2} {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100%;
        transition: .4s;
        animation: 'fade' .2s;
        background-size: cover;
    }

    @media (max-width: 800px) {
        padding-bottom: 60px;
    }

    @media (max-width: 480px) {
        background:  var(--back-gradient);
        padding-bottom: 30px;
        ${Back1}, ${Back2} {
            display: none;
        }
    }
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
