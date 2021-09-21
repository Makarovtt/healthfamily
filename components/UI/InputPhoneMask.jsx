import React from 'react';
import MaskedInput from 'react-text-mask';
import styled from 'styled-components';

const InputPhoneMask = ({ placeholder, changeMetod, value, width, id, label }) => {

    const onChange = (event) => {
        changeMetod(event.target.value, id);
    }

    return (
        <InputStyle width={width}>
            <label htmlFor={id}>{label}</label>
            <MaskedInput
                mask={['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                placeholder={placeholder}
                onChange={onChange}
                value={value}

            />
        </InputStyle>
    )

}

export default InputPhoneMask;

const InputStyle = styled.div`
    margin-top: 15px;
    label {
        color: white;
        font-size: 18px;
    }

    input {
        width: ${({ width }) => width ? width : '100%'};
        height: 40px;
        font-size: 16px;
        border-radius: 0;
        border: none;
        border-bottom: 1px solid #E1E1E1;
        transition-duration: .2s;
        background: none;
        color: white;
        
    }
`;