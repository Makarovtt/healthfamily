import styled from 'styled-components';

function Container({ children }) {
    return (
        <Section>
            {children}
        </Section>
    )
}

export default Container;

const Section = styled.div`
    position: relative;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
`;
