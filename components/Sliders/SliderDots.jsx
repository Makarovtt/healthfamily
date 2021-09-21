
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs } from 'swiper/core';
import styled from "styled-components";

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);


export default function SliderDots({ images }) {


    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    return (
        <SliderContainer>

            <Swiper spaceBetween={10} thumbs={{ swiper: thumbsSwiper }} className="Slide">
                {images.map(image => {
                    return (
                        <SwiperSlide key={image} className='slide-wraper'>
                            <img src={image} alt='slide-image' />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <DotsWraper>
                <Swiper onSwiper={setThumbsSwiper} slidesPerView={'auto'} spaceBetween={20} onSwiper={setThumbsSwiper} className="mySwiper">

                    {images.map(image => {
                        return (
                            <SwiperSlide key={image} className='dots-item'>
                                <img src={image} alt='slide-image' />
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
            </DotsWraper>
        </SliderContainer>
    )
}


const SliderContainer = styled.div`
    max-width: 670px;

    .Slide {
        max-height: 400px;

    }

    .slide-wraper {
        img {
            width: 100%;
            height: auto;
        }
    }
`;

const DotsWraper = styled.div`
    max-height: 90px;
    margin-top: 15px;
    .dots-item {
        width: fit-content;
        
        transition-duration: .3s;
        cursor: pointer;
        box-shadow: -12px 8px 20px rgb(0 0 0 / 6%);
    }

    .swiper-slide-thumb-active {
        opacity: 1;
        position: relative;
        
        
        &::before   {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: #252627;
            opacity: .4;
        }
        
    }

    img {
        height: 90px;
        width: 150px;
    }
`;