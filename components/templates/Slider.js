import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; // Import autoplay CSS
import { Navigation, Autoplay } from 'swiper/modules';

export default function Slider() {
    return (
        <div className="container-fluid p-0 mb-5">
            <Swiper
                navigation={true}
                modules={[Navigation, Autoplay]} // Include Autoplay module
                autoplay={{
                    delay: 3000, // Time between slides (in milliseconds)
                    disableOnInteraction: false, // Don't disable autoplay on user interaction
                }}
                speed={1000}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <img className="w-100" src="/img/carousel-1.jpg" alt="Image 1" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <h2 className="text-primary font-weight-medium m-0">We Have Been Serving</h2>
                            <h1 className="display-1 text-white m-0">COFFEE</h1>
                            <h2 className="text-white m-0">* SINCE 1950 *</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className="w-100" src="/img/carousel-2.jpg" alt="Image 2" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <h2 className="text-primary font-weight-medium m-0">We Have Been Serving</h2>
                            <h1 className="display-1 text-white m-0">COFFEE</h1>
                            <h2 className="text-white m-0">* SINCE 1950 *</h2>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
