import styled from 'styled-components';
import InputPhoneMask from '../UI/InputPhoneMask';
import Container from '../UI/Container';
import Input from '../UI/Input';
import { useState } from 'react';
import Button from '../UI/Button';

const initialUserInfo = {
    name: {
        id: 'name',
        value: ''
    },
    phone: {
        id: 'phone',
        value: ''
    }
}

function OrderForm() {

    const [userInfo, setUserInfo] = useState(initialUserInfo);

    const changeUserInfo = (value, id) => {
        setUserInfo(pre => {
            return {
                ...pre,
                [id]: { ...pre[id], value }
            }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(userInfo);
    }

    return (
        <Section>
            <Container>
                <FlexContainer>
                    <Left>
                        <h2>Вызвать замерщика</h2>
                        <p>Замерщик подстроится под удобное для Вас время.
                        <br /> Замер займет не более <span className='black-text'>10 минут</span>.
                        <br />Это <span className='black-text red-text'>БЕСПЛАТНО</span>  и ни к чему Вас не обязывает</p>
                        <form onSubmit={submitHandler}>
                            <ul>
                                <li>
                                    <Input
                                        placeholder='Ваше имя'
                                        width='280px'
                                        value={userInfo.name.value}
                                        id={userInfo.name.id}
                                        changeMetod={changeUserInfo} />
                                </li>
                                <li>
                                    <InputPhoneMask
                                        placeholder='+7 (___) ___-____'
                                        width='280px'
                                        value={userInfo.phone.value}
                                        id={userInfo.phone.id}
                                        changeMetod={changeUserInfo} />
                                </li>
                            </ul>
                            <Button type='submit'>Вызвать замерщика</Button>
                        </form>
                    </Left>
                    <Right>
                        <ContainerImage>
                            <Master src="/images/form/master-min.png" alt="master" />
                            <BackGroundRight src='/images/form/backgroundForm.jpg' alt="backgroundForm" />
                        </ContainerImage>
                    </Right>
                </FlexContainer>
            </Container>
        </Section>
    )
}

export default OrderForm;

const Section = styled.section`
    background-color: #ffecb4;
    overflow: hidden;
`;

const FlexContainer = styled.div`
    display: flex;
    position: relative;

    @media (max-width: 970px) {
        display: block;
    }
`;

const Left = styled.div`
    padding-bottom: 100px;
    padding-top: 100px;
    padding-right: 130px;

    h2 {
        margin-bottom: 20px;
    }

    p {
        font-size: 20px;
        line-height: 26px;
    }

    ul {
        margin-top: 20px;
    }

    li {
        margin-bottom: 15px;
    }

    @media (max-width: 1200px) {

        padding-right: 60px;

        h2 {
            margin-bottom: 10px;
        }

        p {
            font-size: 18px;
        }
    }

    @media (max-width: 970px) {

        padding-right: 60px;

        

        p {
            font-size: 18px;
            line-height: 20px;
        }
    }

    @media (max-width: 760px) {

        padding-bottom: 60px;
        padding-top: 60px;
        padding-right: 0;

        p {
            font-size: 16px;
        }

        
    }

    @media (max-width: 480px) {
        
        p {
            font-size: 14px;
            line-height: 18px;
        }
    }
`;

const Right = styled.div`
    position: relative;
    min-height: 612px;
    

    @media (max-width: 970px) {
        position: absolute;
        bottom: 0;
        left: 350px;
    }

    @media (max-width: 670px) {
        position: relative;
        bottom: 0;
        left: 350px;
        min-height: 150px;
    }

    @media (max-width: 480px) {
        min-height: 270px;
        width: 100%;
        left: initial;
    }
`;

const ContainerImage = styled.div`
    position: absolute;
    width: 878px;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;

    @media (max-width: 970px) {
        height: 400px;
        top: initial;
        bottom: 0; 
        left: 120px;
    }
`;

const Master = styled.img`
    position: absolute;
    z-index: 3;
    bottom: 0;
    left: -100px;

    @media (max-width: 970px) {
        height: 420px;
        top: initial;
        bottom: 0; 
        left: -100px;
    }

    @media (max-width: 760px) {
        height: 350px;
        left: -140px;
    }

    @media (max-width: 670px) {
        height: 300px;
        left: -250px;
    }

    @media (max-width: 480px) {
        height: 300px;
        left: -123px;
    }
`;

const BackGroundRight = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    object-fit: cover;

    @media (max-width: 960px) {
        display: none;
    }
`;
