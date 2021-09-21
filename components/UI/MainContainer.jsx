import React from 'react'
import styled from 'styled-components';

function MainContainer({ children }) {
    return (
        <MainWraper>
            <MainBody>
                {children}
            </MainBody>
        </MainWraper>
    )
}

export default MainContainer;

const MainWraper = styled.div`
    min-height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: nowrap;
`;

const MainBody = styled.div`
    width: 100%;
    flex: 1 1 auto;
    display: block;
    position: relative;
`;


