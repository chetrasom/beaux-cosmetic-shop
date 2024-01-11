import { useSelector } from 'react-redux';
import { selectorProducts } from '../../features/products/productsSlice';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';

// Import Swiper styles
import "swiper/css";

// Import required modules
import { Navigation } from 'swiper/modules';

import { Heading } from '../../components';
import ProductTypeCard from './ProductTypeCard';

const ProductsType = () => {
    const { products } = useSelector(selectorProducts);

    const newProducts = products.filter((product) => product?.attributes?.new_product === true);

    return (
        <section className='pb-10 lg:pb-[60px]'>
            <div className="container">
                <Heading 
                    subTitle={'choose your type'}
                    title={`what's new for you`}
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
                    {newProducts.map((product) => {
                        return (
                            <SwiperSlide key={product.id}>
                                <ProductTypeCard product={product} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export default ProductsType