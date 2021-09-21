import styled from 'styled-components';
import Button from '../UI/Button';
import Container from '../UI/Container';
import ItemReviews from './UI/ItemReviews';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

function Reviews({ reviews, setPopUp }) {
    return (
        <Section>
            <Container>
                <TitleReviews><ColorYelow>Отзывы</ColorYelow> наших заказчиков</TitleReviews>
                <Slider>

                    <ListReviews>

                        <Swiper
                            slidesPerView={1}
                            initialSlide={0}
                            spaceBetween={30}

                            autoHeight={true}

                            navigation={{
                                nextEl: `${Next}`,
                                prevEl: `${Prev}`
                            }}
                            loop={true}
                        >

                            {reviews.map((revie, i) => {
                                return (
                                    <SwiperSlide key={revie.name + i}>
                                        <ItemReviews
                                            name={revie.name}
                                            date={revie.date}
                                            count={revie.count}
                                            color={revie.color}
                                            link={revie.link}
                                            from={revie.from}
                                            comment={revie.comment}
                                        />
                                    </SwiperSlide>
                                )
                            })}

                        </Swiper>

                        <WraperSlidesBtn>
                            <Prev>
                                <i>
                                    <svg
                                        width="17.5px" height="24.5px">
                                        <path fillRule="evenodd" stroke="rgb(36, 36, 36)" strokeWidth="3px" strokeLinecap="butt" strokeLinejoin="miter" fill="none"
                                            d="M12.205,21.503 L1.508,11.502 L12.205,1.504 " />
                                    </svg>
                                </i>
                            </Prev>

                            <Next>
                                <i>
                                    <svg
                                        width="17.5px" height="24.5px">
                                        <path fillRule="evenodd" stroke="rgb(36, 36, 36)" strokeWidth="3px" strokeLinecap="butt" strokeLinejoin="miter" fill="none"
                                            d="M3.793,1.491 L14.490,11.490 L3.793,21.489 " />
                                    </svg>
                                </i>
                            </Next>
                        </WraperSlidesBtn>
                    </ListReviews>


                </Slider>
                <WraperBtn>
                    <Button onClick={() => setPopUp(true)} animate={false}>Оставить отзыв</Button>
                </WraperBtn>
            </Container>
        </Section>
    )
}

export default Reviews;


const WraperSlidesBtn = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 670px) {
        width: 400px;
        height: 50px;
        background-color: white;
        justify-content: space-between;
    }

    @media (max-width: 670px) {
        width: 290px;
    }
`;


const Next = styled.button`
    position: absolute;
    right: -70px;
    height: 80%;




    border: none;
    box-shadow: 0.628px 8.978px 18px 0px rgba(0, 0, 0, 0.15);
    background-color: rgb(255, 255, 255);
    width: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition-duration: .3s;

    i {
        position: relative;
        top: 3px;
    }  

    :hover {
        background-color: #f8f48a;
    }

    :active {
        background-color: white;
    }

    @media (max-width: 670px) {
        position: initial;
        width: 50px;
        height: 100%;
    }
`;

const Prev = styled.button`
    position: absolute;
    left: -70px;
    height: 80%;



    border: none;
    box-shadow: 0.628px 8.978px 18px 0px rgba(0, 0, 0, 0.15);
    background-color: rgb(255, 255, 255);
    width: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition-duration: .3s;

    i {
        position: relative;
        top: 3px;
    }  

    :hover {
        background-color: #f8f48a;
    }

    :active {
        background-color: white;
    }

    @media (max-width: 670px) {
        position: initial;
        width: 50px;
        height: 100%;
    }
`;

const WraperBtn = styled.div`
    display: flex;
    justify-content: center;
`;


const Slider = styled.div`
    position: relative;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;

    @media (max-width: 670px) {
        margin: 30px 0; 
    }  
`;


const ColorYelow = styled.span`
    color: #fbf78a;
`;

const Section = styled.section`
    background: url('/images/reviews/reviews-min.png') center center repeat;
    background-color: #181a26;
    padding: 100px 0;
    height: auto;

    @media (max-width: 670px) {
        padding: 40px 0; 
    }
`;

const TitleReviews = styled.h2`
    text-align: center;
    color: white;

    @media (max-width: 670px) {
        width: 300px;
        margin: 0 auto;
    }    
`;

const ListReviews = styled.ul`
    width: 840px;
    margin-left: 20px;
    margin-right: 20px;
    position: relative;
    display: flex;
    align-items: center;

    @media (max-width: 1200px ){
        width: 700px;
    }

    @media (max-width: 960px ) {
        width: 480px;
    }

    

    @media (max-width: 670px) {
        width: 290px;
        display: block;
    }
`;


