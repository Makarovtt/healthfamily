import React, { useState } from 'react'
import styled from 'styled-components';

function WraperQuestion({ textQuestion, textResponce }) {

    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(pre => !pre);
    }

    return (
        <SelectWraper>
            <Wraper onClick={toggleOpen}>
                <WraperBorder>
                    <Title>{textQuestion}</Title>
                    <i >
                        <svg
                            width="18px" height="11px">
                            <path fillRule="evenodd" fill="var(--secondary)"
                                d="M17.995,2.131 L9.000,10.995 L0.005,2.131 L2.164,0.003 L9.000,6.740 L15.836,0.003 L17.995,2.131 Z" />
                        </svg>
                    </i>
                </WraperBorder>
            </Wraper>
            {open &&
                <List>
                    <p>{textResponce}</p>
                </List>}
        </SelectWraper>

    )
}

export default WraperQuestion;

const SelectWraper = styled.div`
    margin: 10px 15px;
    width: 100%;
`;

const List = styled.ul`
    user-select: none;
    animation: 'fade' .6s;
    border-radius: 10px;
    background: var(--back-gradient);
    box-shadow: 0.488px 6.983px 57px 0px rgba(59, 16, 46, 0.06);
    z-index: 2;
    position: relative;
    padding: 15px 20px;

    p {
        color: var(--primery);
        font-weight: 600;
    }
`;

const Wraper = styled.li`
    user-select: none;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 70px;
    box-shadow: 0.488px 6.983px 57px 0px rgba(59, 16, 46, 0.06);
    border-radius: 10px;
    padding: 6px;
    cursor: pointer;
`;

const Title = styled.h4`
    font-weight: 700;
`;

const WraperBorder = styled.div`
    border: solid #f2efef 1px;
    border-radius: 10px;
    
    width: 100%;
    height: 100%;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    
`;
