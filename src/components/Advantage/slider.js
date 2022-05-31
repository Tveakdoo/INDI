import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {list} from "./index";
import React from "react";
import {Text, WeHave} from "./style";
export const Slider = () => {
    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {
                list.map((item) => <React.Fragment>
                        {Object.entries(item).map(([key, value]) => (
                            <SwiperSlide>
                                <WeHave>
                                    <img src={`/img/svg/${key}`} alt={value}/>
                                    <Text>{value}</Text>
                                </WeHave>
                            </SwiperSlide>
                            ))}

                </React.Fragment>)
            }
        </Swiper>
    );
};