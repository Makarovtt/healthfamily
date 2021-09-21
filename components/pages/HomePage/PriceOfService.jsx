import React, { useState } from 'react'
import styled from 'styled-components';
import Button from '../../UI/Button';
import Container from '../../UI/Container';
import SubTitleSection from '../../UI/SubTitleSection';
import TitleSection from '../../UI/TitleSection';
import { useRouter } from 'next/router'

const initialState = [
    {
        title: 'Консультации',
        id: 1,
        active: true,
        items: [
            { title: 'Консультация по интимной пластике', price: 'Бесплатно' },
            { title: 'Первичный прием (осмотр, консультация, забор анализов, одноразовый гинекологический набор)', price: '790-1000 руб.' },
            { title: 'Консультация с назначением лечения, индивидуальный подбор контрацептивов', price: '1000 руб.' },
            { title: 'Контрольная консультация после медикаментозного прерывания', price: '640 руб.' },
            { title: 'Консультация по результатам УЗИ или анализов', price: '700 руб.' },
        ]
    },
/*
    {
        title: 'Анализы',
        id: 2,
        active: false,
        items: [
            { title: 'Мазок на флору', price: '450 руб.' },
            { title: 'Мазок на онкоцитологию', price: '480 руб.' },
        ]
    },
*/
    {
        title: 'Операции',
        id: 3,
        active: false,
        items: [
            { title: 'Гименопластика', price: 'от 15 000 руб.' },
            { title: 'Лабиопластики и интимная пластика', price: 'от 20 000 руб.' },
        ]
    }
]

function PriceOfService() {

    const { push } = useRouter();

    console.log(push);

    const [tabs, setTabs] = useState(initialState);

    const changeActiveTab = (id) => {
        setTabs(pre => pre.map(item => item.id === id ? { ...item, active: true } : { ...item, active: false }));
    }

    const goForm = () => {
        push('/#form')
    }

    return (
        <Section>
            <Container>
                <TitleSection center>Сколько стоят <span>наши услуги</span></TitleSection>
                <SubTitleSection center>Наши цены приятно Вас удивят</SubTitleSection>
                <ListTab>
                    {tabs.map(item => {
                        return (
                            <TabItem key={`tab-${item.id}`} active={item.active} onClick={() => changeActiveTab(item.id)}>
                                <p>{item.title}</p>
                            </TabItem>
                        )
                    })}
                </ListTab>

                {tabs.map(row => {
                    return (
                        <ListRows key={row.id} active={row.active}>

                            {row.items.map(item => {
                                return (
                                    <ItemRows key={item.title}>
                                        <div className="description-rows">
                                            <p>{item.title}</p>
                                        </div>
                                        <div className="price-rows">
                                            <p>{item.price}</p>
                                        </div>
                                    </ItemRows>
                                )
                            })}


                        </ListRows>
                    )
                })}
                <WraperButton>
                    <Button onClick={goForm}>Записаться онлайн</Button>
                </WraperButton>
            </Container>
        </Section>
    )
}

export default PriceOfService;

const WraperButton = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
`;

const ListRows = styled.ul`
    display: ${({ active }) => active ? 'block' : 'none'};
    margin-top: 30px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 1.325px 18.954px 24px 0px rgba(59, 16, 46, 0.06);
    animation: 'fade' .8s;

    li:nth-child(even) {
       background-color: #f8f8f8;
    }
    
`;

const ItemRows = styled.li`

    width: 100%;
    display: flex;
    background-color: white;
    padding: 20px 30px;

    .description-rows {
        width: 85%;

        p {
            font-weight: 600;
        }
    }
    .price-rows {
        min-width: 100px;

        p {
            font-weight: 800;
            text-align: center;
        }
    }

    p {
        color: var(--primery);
    }
`;


const TabItem = styled.li`
    background: ${({ active }) => active ? 'var(--gradient-active)' : 'none'};
    border: ${({ active }) => active ? 'none' : 'solid 2px #eae6e6'};
    width: calc(100% / 3);
    display: flex;
    justify-content: center;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0;
    cursor: pointer;

    
    p {
        font-size: 18px;
        font-weight: 800;
        color: ${({ active }) => active ? 'var(--color-button)' : '--color-batton-disable'};
        text-align: center;
    }
`;

const ListTab = styled.ul`
    margin-top: 60px;
    display: flex;

    li:first-child {
        border-radius: 10px 0px 0px 10px;
        margin-right: -2px;
    }

    li:last-child {
        border-radius: 0px 10px 10px 0px;
        margin-left: -2px;
    }

    @media (max-width: 560px) {

        li:first-child {
            border-radius: 10px;
            margin-right: 0;
        }

        li:last-child {
            border-radius: 10px;
            margin-left: 0;
        }


        display: block;
        li {
            border-radius: 10px;
            width: 100%;
        }
    }
`;


const Section = styled.section`
    padding: 100px 0;
    background: url('/images/HomePage/PriceOfServeces/background.jpg') no-repeat top center;
`;
