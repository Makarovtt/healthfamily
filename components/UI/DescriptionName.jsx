import React from 'react'
import styled from 'styled-components';

function DescriptionName({ titleName, description, className }) {
    return (
        <Wraper className={className}>
            <Top>
                <h5 dangerouslySetInnerHTML={{ __html: titleName }} />
            </Top>
            <Bottom>
                <h5 dangerouslySetInnerHTML={{ __html: description }} />
            </Bottom>
        </Wraper>
    )
}

export default DescriptionName;

const Wraper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const Top = styled.div`
    width: fit-content;
    background: var(--gradient-active);
    border-radius: 5px;
    padding: 5px  10px;

    h5 {
        font-family: 'Secondary';
        font-size: 18px;
        font-weight: 900;
        text-shadow: 0.14px 1.995px 0px rgba(176, 56, 36, 0.26);
        color: var(--color-button);
    }

   

`;

const Bottom = styled.div`
    width: fit-content;
    background: white;
    border-radius: 2px;
    padding: 5px 8px;
    max-width: 220px;
    position: relative;
    right: -3px;

    h5 {
        color: var(--primery);
        font-family: 'Secondary';
        font-size: 14px;
        font-weight: 800;
    }


`;
