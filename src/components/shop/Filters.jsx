import { useRef } from "react";
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from "react-redux";
import { selectorFilters } from "../../features/filters/filtersSlice";
import { updateFilters, clearFilters } from "../../features/filters/filtersSlice";
import { selectorProducts } from "../../features/products/productsSlice";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';

// Import Swiper styles
import "swiper/css";

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import FiltersBannerCard from "./FiltersBannerCard";
import Stars from "../Stars";
import { getUniqueValues, formatPrice } from "../../utils/helpers";

const Filters = ({ data }) => {
    const swiperContainerRef = useRef(null);
    
    const { products } = useSelector(selectorProducts);
    const bestSellersProducts = products.filter((product) => product?.attributes?.collections === true);

    const {
        filters: {
            text,
            product_type,
            brand,
            min_price,
            max_price,
            price,
            shipping,
        },
        all_products
    } = useSelector(selectorFilters);
    
    const dispatch = useDispatch();

    // getUniqueValues product_type
    const productsType = getUniqueValues(all_products, 'product_type');
    const brands = getUniqueValues(all_products, 'brand');

    const updateFiltersHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        // work with button
        if (name === 'product_type') {
            value = e.target.textContent;
        }

        if (name === 'brand') {
            value = e.target.textContent;
        }

        // work with number
        if (name === 'price') {
            value = Number(value)
        }

        // work with checkbox
        if (name === 'shipping') {
            value = e.target.checked
        }

        dispatch(updateFilters({ name, value }))
    }

    const clearFiltersHandler = () => {
        dispatch(clearFilters())
    }

    return (
        <div className='hidden lg:block lg:basis-1/4'>

            <form onSubmit={(e) => e.preventDefault()}>
                <ul className="divide-y divide-gray-300">

                    {/* Products length */}
                    <li className="space-y-5 pb-5">
                        <h5 className="font-primary text-lg tracking-wider border-l-2 border-primary pl-4">Filters</h5>
                        <h5 className="text-stone-500">{data?.length} products</h5>
                    </li>

                    {/* Search */}
                    <li className="space-y-5 py-5">
                        <h5 className="font-primary text-lg tracking-wider border-l-2 border-primary pl-4">
                            Search favorite products
                        </h5>
                        <div>
                            <input 
                                type="text" 
                                name="text" 
                                id="text"
                                value={text}
                                onChange={updateFiltersHandler}
                                placeholder="Enter keyword.."
                                className="w-full border-2 focus:outline-primary rounded-sm px-4 py-2.5 text-[15px]"
                                autoComplete="off"
                            />
                        </div>
                    </li>

                    {/* Products type */}
                    <li className="space-y-5 py-5">
                        <h5 className="font-primary text-lg tracking-wider border-l-2 border-primary pl-4">
                            Product type
                        </h5>
                        <div>
                            {productsType.map((p_type, index) => {
                                return (
                                    <button
                                        key={index}
                                        aria-label="products type"
                                        type="button"
                                        name="product_type" // specific name
                                        className={`${product_type === p_type.toLowerCase() ? 'bg-primary text-white hover:bg-primary' : 'text-neutral-600 hover:bg-secondary'} 
                                        w-full rounded-sm text-left capitalize font-medium px-4 py-2 transition-all`}
                                        onClick={updateFiltersHandler}
                                    >
                                        {p_type}
                                    </button>
                                )
                            })}
                        </div>
                    </li>

                    {/* Brand */}
                    <li className="space-y-5 py-5">
                        <h5 className="font-primary text-lg tracking-wider border-l-2 border-primary pl-4">
                            Brand
                        </h5>
                        <div>
                            {brands.map((item, index) => {
                                return (
                                    <button
                                        key={index}
                                        aria-label="brand"
                                        type="button"
                                        name="brand" // specific name
                                        className={`${brand === item.toLowerCase() ? 'bg-primary text-white hover:bg-primary' : 'text-neutral-600 hover:bg-secondary'} 
                                        w-full rounded-sm text-left capitalize font-medium px-4 py-2 transition-all`}
                                        onClick={updateFiltersHandler}
                                    >
                                        {item}
                                    </button>
                                )
                            })}
                        </div>
                    </li>

                    {/* Price */}
                    <li className="space-y-5 py-5">
                        <h5 className="font-primary text-lg tracking-wider border-l-2 border-primary pl-4">
                            Price
                        </h5>

                        <h5>The current price is {formatPrice(price)}</h5>

                        <input 
                            type="range" 
                            name="price" 
                            id="price"
                            min={min_price}
                            max={max_price}
                            value={price}
                            onChange={updateFiltersHandler}
                            className="w-full h-2 bg-gray-200 accent-primary appearance-none"
                        />
                    </li>

                    {/* Shipping */}
                    <li className="space-y-5 py-5">
                        <h5 className="font-primary text-lg tracking-wider border-l-2 border-primary pl-4">
                            Shipping
                        </h5>

                        <div className='flex items-center justify-between'>
                            <label htmlFor="shipping">Free Shipping</label>
                            <input 
                                type="checkbox" 
                                name="shipping" 
                                id="shipping"
                                checked={shipping}
                                onChange={updateFiltersHandler}
                                className="w-4 h-4"
                            />
                        </div>
                    </li>

                    {/* Reset filters */}
                    <li className="space-y-5 py-5">
                        <h5 className="font-primary text-lg tracking-wider border-l-2 border-primary pl-4">
                            Reset
                        </h5>

                        <button
                            type="button"
                            aria-label="clear filters"
                            onClick={clearFiltersHandler}
                            className="bg-secondary rounded-sm w-full capitalize py-3 hover:bg-primary transition-all"
                        >
                            clear filters
                        </button>
                    </li>

                    {/* Recent products */}
                    <li className="space-y-5 py-5">
                        <h5 className="font-primary text-lg tracking-wider border-l-2 border-primary pl-4">
                            Recent Products
                        </h5>

                        <div className="flex flex-col gap-y-4">
                            {bestSellersProducts.slice(0, 5).map((product, index) => {
                                const coverImg = product?.attributes?.images?.data[0]?.attributes?.url;
                                return (
                                    <div key={index} className="flex gap-x-4">
                                        <figure className="basis-1/4 border-2 border-primary rounded-sm">
                                            <img 
                                                src={coverImg} 
                                                alt={product?.attributes?.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </figure>
                                        <div className="flex-1">
                                            <h5 className="mb-2">{product?.attributes?.name}</h5>
                                            <div className="mb-3">
                                                <Stars 
                                                    stars={product?.attributes?.stars} 
                                                    style={'text-xs'}
                                                />
                                            </div>
                                            {product?.attributes?.discountPrice > 0 ? (
                                                <div className='flex items-center gap-x-3'>
                                                    <h4 className='font-secondary'>
                                                        {formatPrice(product?.attributes?.discountPrice)}
                                                    </h4>
                                                    <h5 className='line-through text-sm text-gray-400'>
                                                        {formatPrice(product?.attributes?.price)}
                                                    </h5>
                                                </div>
                                            ) : (
                                                <h4 className='font-secondary'>
                                                    {formatPrice(product?.attributes?.price)}
                                                </h4>
                                            )}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </li>

                </ul>
            </form>

            {/* Filtering */}

            {/* Banner */}
            <div className="border-t pt-5">
                <h5 className="font-primary text-lg tracking-wider border-l-2 border-[#FFD700] pl-4">
                    New Arrivals
                </h5>
                <div className="w-full h-full overflow-hidden py-6">
                    <Swiper className="max-w-[275px] drop-shadow-sm" ref={swiperContainerRef}>
                        {data.map((product) => {
                            return (
                                <SwiperSlide key={product.id}>
                                    <FiltersBannerCard key={product.id} product={product} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                    <div className="flex items-center justify-center gap-2 mt-10">
                        <button 
                            onClick={() => swiperContainerRef.current.swiper.slidePrev()}
                            aria-label="previous"
                            className="w-10 h-10 bg-accent text-white rounded-sm flex items-center justify-center hover:bg-primary transition-all"
                        >
                            <MdKeyboardArrowLeft className="w-7 h-7" />
                        </button>
                    
                        <button 
                            onClick={() => swiperContainerRef.current.swiper.slideNext()}
                            aria-label="next"
                            className="w-10 h-10 bg-accent text-white rounded-sm flex items-center justify-center hover:bg-primary transition-all"
                        >
                            <MdKeyboardArrowRight className="w-7 h-7" />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Filters;

Filters.propTypes = {
    data: PropTypes.array
}