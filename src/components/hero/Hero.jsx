import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { heroData } from '../../data';

const Hero = () => {
    return (
        <section className='bg-secondary pt-[72px] lg:pt-0'>
            <Swiper>
                {heroData.map((item) => {
                    return (
                        <SwiperSlide key={item.id}>   
                            <div
                                style={{ backgroundImage: `url(${item.image})` }}
                                className="relative h-[600px] w-full overflow-hidden bg-no-repeat bg-cover bg-center md:bg-right lg:h-screen"
                            >
                                <div className="md:hidden bg-primary/25 w-full h-full"></div>
                                <div className="container">
                                    <div className="absolute top-[50%] -translate-y-[50%] left-0 md:left-auto">
                                    
                                        <div className="text-center md:max-w-sm md:text-left lg:max-w-2xl">
                                            <h3 className="text-xl md:text-2xl lg:text-3xl">{item.subTitle}</h3>
                                            <h1 className="h1 pt-2 pb-4 md:pt-4 md:pb-4">
                                                {item.title}
                                            </h1>
                                            <p className="leading-relaxed px-4 md:px-0 bg-red-0 md:max-w-xs lg:max-w-lg">
                                                {item.description}
                                            </p>
                                            <div className="flex justify-center pt-8 md:justify-start">
                                                <Link 
                                                    to='/shop'
                                                    className="block bg-accent max-w-max capitalize text-white py-4 px-6 rounded-sm hover:bg-primary hover:text-accent shadow-lg transition-all"
                                                >
                                                    shop now
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Hero;