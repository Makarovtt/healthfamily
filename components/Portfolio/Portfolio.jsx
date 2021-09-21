import styled from 'styled-components';
import Container from '../UI/Container';
// import VerticalSlider from './UI/VerticalSlider';
import { useEffect, useState } from 'react';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, Mousewheel, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, Mousewheel, Thumbs]);

function Portfolio({ images }) {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    return (
        <Section>
            <Container>

                <FlexContainer>
                    <Left>
                        <h2>Выполненые <span className='red-text'>проекты</span></h2>

                        <PrimeryImageList>
                            <ArrowNext>
                                <i>
                                    <svg
                                        width="20px" height="28px">
                                        <path fillRule="evenodd" strokeWidth="4px" strokeLinecap="butt" strokeLinejoin="miter" fill="none"
                                            d="M4.962,2.004 L16.011,13.003 L4.962,24.002 " />
                                    </svg>
                                </i>
                            </ArrowNext>
                            <ArrowPrev>
                                <i>
                                    <svg

                                        width="20px" height="28px">
                                        <path fillRule="evenodd" strokeWidth="4px" strokeLinecap="butt" strokeLinejoin="miter" fill="none"
                                            d="M13.137,23.996 L1.989,12.997 L13.137,1.998 " />
                                    </svg>
                                </i>
                            </ArrowPrev>
                            <Swiper
                                id='main'
                                slidesPerView={1}
                                spaceBetween={15}
                                slidesPerGroup={1}
                                thumbs={{ swiper: thumbsSwiper }}

                                navigation={true}
                                navigation={{
                                    nextEl: `${ArrowNext}`,
                                    prevEl: `${ArrowPrev}`
                                }}
                                scrollbar={false}
                                loop={false}
                            >
                                {images.map((image, i) => {
                                    return (
                                        <SwiperSlide key={image.url + i}>
                                            <ImageItem>
                                                <img src={image.url} alt={`image-${i + 1}`} />
                                            </ImageItem>
                                        </SwiperSlide>
                                    )
                                })}

                            </Swiper>

                        </PrimeryImageList>
                    </Left>
                    <Right>
                        <ListSlider>
                            <div className="swiper-scrollbar">
                                <div className="swiper-scrollbar-drag" />
                            </div>
                            <Swiper
                                id='thumbs'
                                onSwiper={setThumbsSwiper}
                                spaceBetween={15}
                                slidesPerView={4}
                                height={540}
                                direction='vertical'
                                mousewheel={{ sensitivity: 20 }}
                                scrollbar={{
                                    draggable: true, snapOnRelease: false, dragSize: 60, el: '.swiper-scrollbar'
                                }}>


                                {images.map((image, i) => {
                                    return (
                                        <SwiperSlide key={image.url + i + 'thumbs'}>
                                            <ItemSlider >
                                                <img src={image.url} alt="thumbs" />
                                            </ItemSlider>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </ListSlider>
                    </Right>
                </FlexContainer>
            </Container>
        </Section>
    )
}

export default Portfolio;

const ArrowNext = styled.div`
    user-select: none;
    position: absolute;
    right: 10px;
    width: 50px;
    height: 50px;
    background-color: white;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: .5s;
    opacity: 0;

    i {
        position: relative;
        top: 2px;

        svg {
            stroke: rgb(50, 50, 50);
        }
    }

    @media (max-width: 670px) {
        width: 40px;
        height: 40px;
    }
`;

const ArrowPrev = styled.div`
    user-select: none;
    cursor: pointer;
    position: absolute;
    left: 10px;
    width: 50px;
    height: 50px;
    background-color: white;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .5s;
    opacity: 0;
    

    i {
        position: relative;
        top: 2px;

        svg {
            stroke: rgb(50, 50, 50);
        }
    }

    @media (max-width: 670px) {
        width: 40px;
        height: 40px;
    }
`;

const Section = styled.section`
    

    h2 {
        margin-bottom: 50px;
    }

    @media (max-width: 1200px){
        h2 {
            text-align: center;
        }
    }

    @media (max-width: 670px){
        h2 {
            margin-bottom: 30px;
        }
    }
`;

const FlexContainer = styled.div`
    display: flex;

    @media (max-width: 1200px){
        justify-content: center;
    }
`;

const Left = styled.div`
    padding-top: 100px;
    padding-right: 50px;
    padding-bottom: 100px;

    @media (max-width: 1200px){
        padding-right: 0;
    }

    @media (max-width: 670px) {
        padding-top: 60px;
        padding-bottom: 60px;
    }
`;

const Right = styled.div`
    background-color: #efefef;
    position: relative;
    padding-top: 192px;
    padding-bottom: 100px;
    width: 230px;

    ::after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 10000px;
        background-color: #efefef;

        pointer-events: none;
        box-sizing: border-box;
    }

    @media (max-width: 1200px){
        display: none;
    }
`;

const PrimeryImageList = styled.ul`
    width: 900px;
    height: 540px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .swiper-button-disabled {
        i {
            svg {
                stroke: rgb(161, 161, 161);
            }
        }
    }

    :hover {
        ${ArrowPrev}, ${ArrowNext} {
            opacity: 1
        }
        
    }

    @media (max-width: 960px) {
        width: 600px;
        height: 400px;
    }

    @media (max-width: 670px) {
        width: 460px;
        height: 260px;
    }

    @media (max-width: 480px) {
        width: 360px;
        height: 160px;
    }
`;

const ImageItem = styled.li`
    overflow: hidden;
    width: 900px;
    height: 540px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    
    img {
        width: auto;
        height: 100%;
    }

    @media (max-width: 960px) {
        width: 600px;
        height: 400px;
    }

    @media (max-width: 670px) {
        width: 460px;
        height: 260px;
    }

    @media (max-width: 480px) {
        width: 360px;
        height: 160px;
    }

`;


const ListSlider = styled.ul`
    position: relative;
    /* z-index: 2; */
    height: 540px;
    overflow: hidden;

    .swiper-scrollbar {
        position: absolute;
        height: 540px;
        z-index: 10;
        cursor: pointer;
        right: 5px;
        width: 3px;
        background-color: #c1c1c1;


            .swiper-scrollbar-drag {
            background-color: #303030;
            width: 9px;
            border-radius: 0;
            left: -3px;
        }
    }

    .swiper-slide-thumb-active {
        img {
            opacity: 1;
        }
    }
`;

const ItemSlider = styled.li`
    cursor: pointer;
    background-color: #292929;
    width: 180px;
    height: 123px;
    margin-right: 40px;

    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 100%;
        opacity: .3;
        transition: .3s;
    }


`;



