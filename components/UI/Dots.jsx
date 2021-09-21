import React from 'react'
import styled from 'styled-components';

function Dots({ children, marginTop = 20, width = 10, widthBorder = 5, color = '#F88F0D' }) {
    return (
        <ListItem
            marginTop={marginTop}
            width={width}
            widthBorder={widthBorder}
            color={color}>
            {children}
        </ListItem>
    )
}

export default Dots;

const ListItem = styled.li`
    display: flex;
    align-items: flex-start;
    margin-top: ${({ marginTop }) => `${marginTop}px`};
    
    &::before {
        display: block;
        content: '';
        width: ${({ width }) => `${width}px`};
        min-width: ${({ width }) => `${width}px`};
        height: ${({ width }) => `${width}px`};
        border: ${({ widthBorder, color }) => `${widthBorder}px solid ${color}`};
        margin-right: 10px;
    }
`;

