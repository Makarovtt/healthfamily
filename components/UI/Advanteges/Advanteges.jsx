
import styled from 'styled-components';
import Container from '../Container';



function Advanteges({ children, advantagesArr }) {
    return (
        <Section>
            <Container>
                {children}
                <List>
                    {advantagesArr.map(item => {
                        console.log()
                        return (
                            <Item
                                key={item.title}
                                stretch={item.stretch}
                                stretchHeight={item.stretchHeight}
                                right={item.right}
                                colorBask={item.colorBask}
                                colorStrech={item.colorStrech}
                                colorText={item.colorText}
                                paddingTop={item.paddingTop}
                                textWidth={item.textWidth}
                                imageBottom={item.imageBottom}
                            >
                                <Number colorNumber={item.colorNumber}>{item.number}</Number>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                                <img src={item.image} alt="advanteges" />
                            </Item>
                        )
                    })}
                </List>
            </Container>
        </Section>
    )
}

export default Advanteges;

const Section = styled.section`
    padding-top: 100px;
`;

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
    margin: 0 -15px;
    margin-top: 50px;
`;

const Item = styled.li`
    width: calc(33% - 30px);
    height: 300px;
    position: relative;
    padding: 0 15px;
    background-color: ${({ colorBask }) => colorBask ? colorBask : 'white'};
    padding-top: ${({ paddingTop }) => paddingTop ? paddingTop : 0};

    ::before {
        content: '';
        position: absolute;
        display: ${({ stretch }) => stretch ? 'block' : 'none'};
        bottom: 0;
        ${({ right }) => right ? 'left: 0;' : 'right: 0;'};
        width: 10000px;
        height: ${({ stretchHeight }) => stretchHeight ? stretchHeight : '100%'};
        background-color: ${({ colorStrech }) => colorStrech ? colorStrech : '#fef0d4'};
    }

    h4 {
        position: relative;
        font-size: 20px;
        font-weight: 900;
        margin-bottom: 8px;
        z-index: 2;
        color: ${({ colorText }) => colorText ? colorText : '#1e1e1e'};
    }

    p {
        position: relative;
        max-width: ${({ textWidth }) => textWidth ? textWidth : '270px'};
        z-index: 2;
        color: ${({ colorText }) => colorText ? colorText : '#1e1e1e'};
        line-height: 22px;
    }

    img {
        position: absolute;
        right: 0;
        bottom: ${({ imageBottom }) => imageBottom ? imageBottom : 0};
        z-index:1;
    }
`;

const Number = styled.h3`
    position: absolute;
    right: 0;
    top: -15px;
    font-size: 80px;
    color: ${({ colorNumber }) => colorNumber ? colorNumber : '#f7f7f7'};
    font-weight: 800;
    z-index: 1;
`;


