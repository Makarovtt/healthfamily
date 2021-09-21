import React from 'react'
import styled from 'styled-components';

function SubTitleSection({ children, center, className }) {
    return (
        <SubTitle center={center} dangerouslySetInnerHTML={{ __html: children }} className={className} />
    )
}

export default SubTitleSection;

const SubTitle = styled.p`
    font-size: 24px;
    text-align: ${({ center }) => center ? 'center' : 'initial'};
`;
