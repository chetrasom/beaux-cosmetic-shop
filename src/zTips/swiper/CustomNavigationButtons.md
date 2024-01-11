## Swiper JS Custom Navigation Buttons
#### Custom Navigation buttons out of swiper container

```JS
import { useRef } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';

// Import Swiper styles
import "swiper/css";

// Import required modules
import { Navigation } from 'swiper/modules';

const CustomNavigationButtons = () => {
    const swiperContainerRef = useRef(null);

    return (
        <section>

            <div className='flex items-center gap-x-6'>
                <button onClick={() => swiperContainerRef.current.swiper.slidePrev()}>Previous</button>
                <button onClick={() => swiperContainerRef.current.swiper.slideNext()}>Next</button>
            </div>
            
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 32,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 32,
                    },
                }}
                className='productsType bg-pink-400'
                ref={swiperContainerRef}
            >
                {productsTypeData.map((product) => {
                    return (
                        <SwiperSlide key={product.id}>
                            <ProductTypeCard product={product} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
};

export default CustomNavigationButtons;
```