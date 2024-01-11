import { useSelector } from "react-redux";
import { selectorProducts } from "../../features/products/productsSlice";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';

// Import Swiper styles
import "swiper/css";

// Import required modules
import { Navigation } from 'swiper/modules';
import RelatedCard from "./RelatedCard";
import { shuffleArray } from "../../utils/helpers";

const Related = () => {
    const { products } = useSelector(selectorProducts);

    const relatedProducts = products.filter((product) => product?.attributes?.collections === true);
    const randomRelatedProducts = shuffleArray(relatedProducts)

    return (
        <>
            <div className='mb-6'>
                <h2 className="text-3xl text-center lg:text-left">You may also like</h2>
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
                        slidesPerView: 3,
                        spaceBetween: 32,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 32,
                    },
                }}
                className='productsType'
            >
                {randomRelatedProducts.map((product) => {
                    return (
                        <SwiperSlide key={product.id}>
                            <RelatedCard product={product} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}

export default Related