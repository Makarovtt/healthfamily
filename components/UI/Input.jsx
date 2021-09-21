import React from 'react';
import styled from 'styled-components';

function Input({ type, id, placeholder, changeMetod, value, width }) {

    const onChange = (event) => {
        changeMetod(event.target.value, id);
    }

    return (
        <InputStyle width={width}>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange} />
        </InputStyle>
    )
}

export default Input;


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
        box-shadow: inset 0px 0px 5px 0px rgba(0, 1, 0, 0.1);
        padding: 15px 30px;
        
    }


`;
