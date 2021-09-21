import React from 'react'
import styled from 'styled-components';

function PopUp({ setPopUp }) {
    return (
        <Section>
            <WraperForm>

                <Clouse onClick={() => setPopUp(false)}>X</Clouse>
                <h2>Гды вы хотите <br /> <span className="red-text">оставить свой отзыв?</span></h2>
                <ul>
                    <li>
                        <a href="https://yandex.ru/profile/199295468707?intent=reviews" target="_blank" rel="noopener noreferrer">
                            Яндекс
                    </a>
                    </li>
                    <li>
                        <a href="https://go.2gis.com/frkeb" target="_blank" rel="noopener noreferrer">
                            2 GIS
                    </a>
                    </li>
                    <li>
                        <a href="https://www.google.com/search?tbm=lcl&ei=UmGyX7TYDOP4qwG_3otQ&q=%D0%BE%D0%BA%D0%BD%D0%B0+%D0%BF%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0+%D0%B0%D1%81%D1%82%D1%80%D0%B0%D1%85%D0%B0%D0%BD%D1%8C&oq=%D0%BE%D0%BA%D0%BD%D0%B0+%D0%BF%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0+%D0%B0%D1%81%D1%82%D1%80%D0%B0%D1%85%D0%B0%D0%BD%D1%8C&gs_l=psy-ab.12...0.0.0.57538.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.7mGBoLNQtaAlrd=0x41a905142f5dea75:0x7b35ade4a44828c6,1,,,&rlfi=hd:;si:8878193437951142086,l,CizQvtC60L3QsCDQv9Cw0L3QvtGA0LDQvNCwINCw0YHRgtGA0LDRhdCw0L3RjCIDiAEBWkkKGdC-0LrQvdCwINC_0LDQvdC-0YDQsNC80LAiLNC-0LrQvdCwINC_0LDQvdC-0YDQsNC80LAg0LDRgdGC0YDQsNGF0LDQvdGM;mv:[[46.3461937,48.069102199999996],[46.312843699999995,48.021444699999996]]" target="_blank" rel="noopener noreferrer">
                            Google
                    </a>
                    </li>
                </ul>

            </WraperForm>
            <ClouseBlock onClick={() => setPopUp(false)} />
        </Section>
    )
}

export default PopUp;

const ClouseBlock = styled.div`
    position: fixed;
    user-select: none;
    z-index: 1;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
`;

const Clouse = styled.div`
    position: absolute;
    top: -45px;
    right: -45px;
    
    cursor: pointer;
    width: 50px;
    height: 50px;
    background-color: #fffacd;
    border-radius: 50%;
    font-size: 24px;
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;
    transition-duration: .3s;

    :hover {
        background-color: white;
    }

    @media (max-width: 760px) {
        top: 10px;
        right: 10px;
    }
`;

const WraperForm = styled.div`
    z-index: 11;
    background-color: #fffacd;
    padding: 60px 120px;
    border-radius: 20px;
    position: relative;

    h2 {
        text-align: center;
        margin-bottom: 30px;
    }

    li {
        margin-top: 20px;
        box-shadow: 0px 5px 16px rgba(0, 0, 0, 0.17);
    }

    a {
        text-align: center;
        background-color: white;
        display: block;
        padding: 30px;
        font-size: 24px;
        font-weight: 900;
    }

    @media (max-width: 650px) {
        padding: 0;
        border-radius: 0;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        ul {
            width: 100%;
            padding: 0 30px;
        }

        h2 {
            margin-bottom: 0; 
        }
    }
`;

const Section = styled.div`
    position: fixed;
    user-select: none;
    z-index: 30;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: #1d1d1df2;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fade .5s;
`;
