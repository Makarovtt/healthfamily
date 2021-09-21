import styled from 'styled-components';
import Container from '../Container';



const spaseStr = (str, color, Component) => {

    const arrStr = str.split('/');
    return (
        <>
            {arrStr.map((item, index) => {
                if (arrStr.lenght !== index + 1) {
                    return (
                        <Component key={index} color={color}>
                            {item}<br />
                        </Component>
                    )
                }
                return (
                    <Component key={index} color={color}>
                        {item}
                    </Component>
                )
            })}
        </>
    )
}

function HappyAdvantages({ arr }) {

    return (
        <Section backColor={arr.backColor}>
            <Container>
                <TitlePage
                    titleColor={arr.titleColor}
                    primaryTitleColor={arr.primaryTitleColor}
                >{arr.title[0]} <br /><span>{arr.title[1]}</span></TitlePage>
                <List>
                    {arr.items.map(item => {
                        return (
                            <ListItem
                                key={item.title}
                                colorBack={item.colorBack}>
                                <ItemDescription>
                                    {spaseStr(item.title, item.color, TitleItem)}

                                    {spaseStr(item.description, item.color, TextItem)}

                                    <NumberItem
                                        colorNumber={item.colorNumber}>
                                        {item.number}
                                    </NumberItem>
                                </ItemDescription>
                                <ItemImage right={item.rightImage} src={item.image} alt='advantagesImage' />
                            </ListItem>
                        )
                    })}

                </List>
            </Container>
        </Section>
    )
}

export default HappyAdvantages;

const TitlePage = styled.h2`
    color: ${({ titleColor }) => titleColor ? titleColor : '#1e1e1e'};

    span {
        color: ${({ primaryTitleColor }) => primaryTitleColor ? primaryTitleColor : '#1e1e1e'};
    }
`;

const Section = styled.section`
    background-color: ${({ backColor }) => backColor ? backColor : '#fef0d4'};
    padding-top: 100px;
`;

const List = styled.ul`
    margin: 0 -15px;
    display: flex;
    flex-wrap: wrap;
    /* margin-top: 20px; */
`;

const ListItem = styled.li`
    width: calc(50% - 30px);
    background-color: ${({ colorBack }) => colorBack ? colorBack : 'white'};
    display: flex;
    position: relative;
    /* overflow: hidden; */
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 30px;
    padding: 30px;
    min-height: 300px;
`;

const TitleItem = styled.h3`
    font-weight: 900;
    text-transform: uppercase;
    margin-bottom: 10px;
    line-height: 20px;
    color: ${({ color }) => color ? color : '#1e1e1e'};
`;

const TextItem = styled.p`
    width: 270px;
    line-height: 24px;
    color: ${({ color }) => color ? color : '#1e1e1e'};
`;

const NumberItem = styled.h3`
    font-size: 115px;
    color: ${({ colorNumber }) => colorNumber ? colorNumber : '#f0f0f0'};
    position: absolute;
    bottom: -20px;
`;

const ItemDescription = styled.div`
    z-index: 2;
`;

const ItemImage = styled.img`
    position: absolute;
    bottom: 0;
    right: ${({ right }) => right ? right : 0};
    z-index: 1;
`;
