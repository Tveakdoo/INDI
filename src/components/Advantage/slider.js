import {Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import React from "react";
import {Text, WeHave, Unlock, SliderWrapper} from "./style";

export const Slider = ({list}) => {
    return (
        <SliderWrapper>
            <Swiper
                modules={[Autoplay]}
                autoplay={{delay: 2000}}
                spaceBetween={100}
                slidesPerView={1}
            >
                <Unlock>
                    {
                        list.map((item, index) => <React.Fragment key={index.toString()}>
                            {Object.entries(item).map(([key, value]) => (
                                <SwiperSlide key={key}>
                                    <WeHave>
                                        <img src={`/img/svg/${key}`} alt={`${value}`}/>
                                        <Text>{value}</Text>
                                    </WeHave>
                                </SwiperSlide>
                            ))}
                        </React.Fragment>)
                    }
                </Unlock>
            </Swiper>
        </SliderWrapper>
    );
};