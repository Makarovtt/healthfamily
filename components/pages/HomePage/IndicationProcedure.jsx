import React from 'react'
import styled from 'styled-components';
import Container from '../../UI/Container';
import TitleSection from '../../UI/TitleSection';

function IndicationProcedure() {
    return (
        <Section>
            <Container>
                <TitleSection center>Показания <span>к процедуре</span></TitleSection>
                <ListProcedure>
                    <ItemProcedure>
                        <Image src="/images/HomePage/indication-procedure/image1.svg" alt="indication" />
                        <h5>Гименопластика восстановление девственности</h5>
                        <p>Операция по восстановлению целостности девственной плевы. В последнее время она приобретает особую популярность и востребованность среди женщин</p>
                    </ItemProcedure>
                    <ItemProcedure>
                        <Image src="/images/HomePage/indication-procedure/image2.svg" alt="indication" />
                        <h5>Омоложение корректировка внешнего вида</h5>
                        <p>Различные эстетические дефекты наружных половых органов плохо влияют на&nbsp;качество сексуальной жизни, а&nbsp;ещё женщина бывает не&nbsp;удовлетворена собой и&nbsp;в&nbsp;целом жизнью. И&nbsp;это такие&nbsp;же важные проблемы, как и&nbsp;любая другая, связанная со&nbsp;здоровьем и&nbsp;красотой.</p>
                    </ItemProcedure>
                    <ItemProcedure>
                        <Image src="/images/HomePage/indication-procedure/image3.svg" alt="indication" />
                        <h5>Увеличение точки G. Повышение либидо.</h5><h5>Гименопластика. Восстановление девственности</h5>
                        <p>Инъекционная безболезненная и&nbsp;совершенно безопасная для здоровья женщины процедура&nbsp;&mdash; увеличение объёма точки &laquo;G&raquo; вернёт утраченное сексуальное влечение. Аугментация точки &laquo;G&raquo; позволяет восполнить объем мягких тканей путем введения препаратов гиалуроновой кислоты без токсинов</p>
                    </ItemProcedure>
                    <ItemProcedure>
                        <Image src="/images/HomePage/indication-procedure/image4.svg" alt="indication" />
                        <h5>Медицинские показания: недержание мочи, уретриты, циститы, вагинизм</h5>
                        <p>Интимная пластика решает не&nbsp;только эстетические проблемы, чаще манипуляции необходимы по&nbsp;медицинским показаниям. Это климактерический синдром и&nbsp;сопутствующие ему урогенитальные расстройства в&nbsp;виде атрофического вагинита, недержания мочи, уретритов и&nbsp;циститов</p>
                    </ItemProcedure>
                    <ItemProcedure>
                        <Image src="/images/HomePage/indication-procedure/image5.svg" alt="indication" />
                        <h5>Натирание и неприятные ощущения при ходьбе или занятиях спортом</h5>
                        <p>Запишитесь на&nbsp;приём, и&nbsp;мы&nbsp;подберём для вас оптимальный вид интимной пластики и&nbsp;проведём все необходимые диагностические процедуры.
                            Мы&nbsp;не&nbsp;советуем выполнять процедуры нерожавшим женщинам и&nbsp;девушкам, не&nbsp;достигшим полового созревания</p>
                    </ItemProcedure>
                </ListProcedure>
            </Container>
        </Section>
    )
}

export default IndicationProcedure;

const Section = styled.section`
    padding: 100px 0;


    @media (max-width: 1200px) {
        padding: 80px 0;
    }

    @media (max-width: 960px) {
        padding: 60px 0;
    }

    @media (max-width: 560px) {
        padding: 40px 0;
    }
`;

const ListProcedure = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 50px;
`;

const ItemProcedure = styled.li`
    border: solid #fbf5f2 2px;
    border-radius: 10px;
    width: 370px;
    padding: 20px;
    margin: 10px;
    
    h5 {
        margin-bottom: 5px;
    }
`;

const Image = styled.img`
    margin: 0 auto;
    display: block;
    margin-bottom: 15px;
`;
