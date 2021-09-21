import React from 'react';
import styled from 'styled-components';




function FormWraper({ children, title, description, messangeWarning, className }) {



    return (
        <Wraper className={className}>
            {title && <TitleForm dangerouslySetInnerHTML={{ __html: title }} />}
            {description && <DescriptionTitle dangerouslySetInnerHTML={{ __html: description }} />}
            <WraperContent>
                {children}
            </WraperContent>
            {messangeWarning && <MessageWarning dangerouslySetInnerHTML={{ __html: messangeWarning }} />}
        </Wraper>
    )
}

export default FormWraper

const WraperContent = styled.div`
    margin: 20px 0;
    position: relative;
    z-index: 1;
    width: 87%;
`;

const TitleForm = styled.h3`
    text-align: center;
    position: relative;
    z-index: 1;
    font-size: 36px;
    font-weight: 600;

    @media (max-width: 1200px) {
        font-size: 28px;
    }

    @media (max-width: 600px) {
        font-size: 24px;
    }
`;

const DescriptionTitle = styled.p`
    font-size: 24px;
    font-weight: 300;
    color: var(--primery);
    max-width: 364px;
    text-align: center;
    margin-top: 10px;
    position: relative;
    z-index: 1;

    @media (max-width: 1200px) {
        font-size: 18px;
    }
`;

const MessageWarning = styled.p`
    font-size: 12px;
    text-align: center;
    position: relative;
    z-index: 1;
    max-width: 380px;
`;

const Wraper = styled.div`
    background-color: rgb(255, 255, 255);
    box-shadow: 1.325px 18.954px 35px 0px rgba(110, 22, 24, 0.14);
    
    width: fit-content;
    border-radius: 20px;
    padding: 40px 60px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    ::after {   
        content: ''; 
        border-width: 2px;
        border-color: rgb(251, 245, 242);
        border-style: solid;
        border-radius: 20px;
        position: absolute;
        z-index: 0;
        width: calc(100% - 20px);
        height: calc(100% - 20px);
    }

    @media (max-width: 600px) {
        padding: 20px 20px;
    }
`;