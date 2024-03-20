import { useState } from "react"
import PropTypes from 'prop-types';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './thumbGallery.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const ThumbsGallerySlide = ({ images, thumbnail }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            {/* Slide 1 main */}
            <Swiper
                style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={10}
                navigation={true}
                // thumbs={{ swiper: thumbsSwiper }}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 mb-2"
            >
                {images?.map((slide, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img 
                                src={slide?.attributes?.url} 
                                alt="main images"
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>

            {/* Slide small thumb */}
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
                
            >
                {images?.map((slide, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img 
                                src={slide?.attributes?.url} 
                                alt="thumbnail images"
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}

export default ThumbsGallerySlide;

ThumbsGallerySlide.propTypes = {
    images : PropTypes.array,
    thumbnail : PropTypes.any
}