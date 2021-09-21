import styled from "styled-components";


function TitleSection({ children, center }) {
    return (
        <Title center={center}>
            {children}
        </Title>
    )
}

export default TitleSection;

const Title = styled.h2`
    font-weight: 400;
    color: var(--primery);
    ${({ center }) => center && { textAlign: 'center' }};
    
    span {
        font-style: italic;
        font-weight: 800;
    }


`;
