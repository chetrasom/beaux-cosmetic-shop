import { useSelector } from "react-redux";
import { selectorProducts } from "../../features/products/productsSlice";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';

// Import Swiper styles
import "swiper/css";

// Import required modules
import { Navigation } from 'swiper/modules';

import { Heading } from '../../components';
import BestSellersCard from './BestSellersCard';

const BestSellers = () => {
    const { products } = useSelector(selectorProducts);

    const bestSellersProducts = products.filter((product) => product?.attributes?.collections === true);

    return (
        <section className='pb-10 lg:pb-[60px]'>
            <div className="container">
                <Heading 
                    subTitle={'Divine beauty'}
                    title={`best sellers`}
                />

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
                    {bestSellersProducts.map((product) => {
                        return (
                            <SwiperSlide key={product.id}>
                                <BestSellersCard product={product} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export default BestSellers;