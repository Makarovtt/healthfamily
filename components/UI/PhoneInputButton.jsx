import React from 'react';
import MaskedInput from 'react-text-mask';
import styled from 'styled-components';

const PhoneInputButton = ({ placeholder, changeMetod, value, width, onClick, id }) => {

    const onChange = (event) => {
        changeMetod(event.target.value, id);
    }

    return (
        <InputStyle width={width}>
            <MaskedInput
                mask={['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                placeholder={placeholder}
                onChange={onChange}
                value={value}

            />
            <button onClick={onClick}>Получить</button>
        </InputStyle>
    )

}

export default PhoneInputButton;

const InputStyle = styled.div`
    width: 100%;
    margin-top: 15px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    input {
        width: 100%;
        font-size: 18px;
        border-radius: 0;
        border: none;
        border-bottom: 1px solid #E1E1E1;
        transition-duration: .2s;
        background: none;
        color: var(--primery);
        border-radius: 30px;
        background-color: rgb(244, 244, 244);
        box-shadow: inset 0px 0px 5px 0px rgba(0, 1, 0, 0.14);
        padding: 15px 30px;
        
    }

    button {
        background: var(--gradient-active);
        border: none;
        border-radius: 30px;
        color: var(--color-button);
        font-weight: 900;
        padding: 15px 30px;
        text-shadow: 0.14px 1.995px 0px rgba(26, 53, 126, 0.26);
        letter-spacing: 0.03em;
        position: absolute;
        right: 0;
        transition: .3s;
        cursor: pointer;

        :hover {
            background: var(--gradient-active-hover);
        }
    }



    @media (max-width: 500px) {
        input {
            margin-bottom: 10px;
        }
    }

     @media (max-width: 500px) {

        flex-direction: column;

        button {
            position: relative;
            width: 100%;
        }

        
    }
`;