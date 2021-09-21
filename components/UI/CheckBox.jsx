import styled from 'styled-components';

function CheckBox({ children, onChange }) {
    return (
        <CheckBoxItem>
            <label >
                <input type="checkbox" onChange={onChange} value={children} />
                <CastomCheckBox />
                <span>{children}</span>
            </label>
        </CheckBoxItem>
    )
}

export default CheckBox;


const CastomCheckBox = styled.span`
    width: 25px;
    height: 25px;
    border: #dbdbdb 1px solid ;
    background-color: rgb(255, 255, 255);
    
    
    ::before {
        content: url('/images/quiz/success.svg');
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: #f8ef03;
        opacity: 0;
    }
`;

const CheckBoxItem = styled.li`
    margin-left: 20px;


    label {
        display: flex;
        align-items: center;
        user-select: none;
        cursor: pointer;

        span {
            margin-right: 5px;
        }

        input {
            display: none;
        }

        input:checked + ${CastomCheckBox}:before {
            opacity: 1;
        }
    }

    @media (max-width: 770px) {
        margin: 10px;
    }
`;