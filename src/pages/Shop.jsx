import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { selectorFilters, sortProducts, filtersProducts } from "../features/filters/filtersSlice";

import { 
    BreadCrumb, Filters, Sort, ProductList, FiltersMobile
    // ProductsPagination 
} from '../components';
// import shopBanner from '../assets/images/shop-banner.jpg';

const Shop = () => {
    const { filtered_products: products, sort, filters} = useSelector(selectorFilters);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filtersProducts());
        dispatch(sortProducts());
    }, [dispatch, sort, filters]);

    return (
        <>
            <BreadCrumb 
                heading='products collection'
                title='products'
            />

            <div className="lg:hidden">
                <FiltersMobile data={products} />
            </div>

            <section className='container pt-10 pb-10'>

                <div className='flex items-start justify-between gap-x-6'>
                    <Filters data={products} />
                    {/* ----------------------------------------------------- */}
                    <div className='flex-1'>

                        {/* Banner */}
                        <div className="mb-10 h-[150px] md:h-[225px] lg:h-[250px] rounded-sm overflow-hidden bg-primary
                        relative flex items-center justify-center text-center">

                            <div className="absolute top-5 left-5 z-20 w-16 h-16 bg-cyan-400 rounded-full text-white flex flex-col items-center justify-center text-sm md:top-8 md:left-8 drop-shadow-sm -rotate-12">
                                <h5>30%</h5>
                                <h6>Off</h6>
                            </div>
                            <div className="space-y-1 md:space-y-1">
                                <h5 className="uppercase text-sm lg:text-base text-white tracking-widest drop-shadow-md">
                                    limited time
                                </h5>
                                <h3 className="font-secondary text-xl font-medium md:text-2xl lg:text-3xl text-white drop-shadow-md">
                                    New year
                                </h3>
                                <h3 className="font-secondary text-xl font-medium md:text-2xl lg:text-3xl text-white drop-shadow-md">
                                    Product sale
                                </h3>
                            </div>
                            {/* <img 
                                src={shopBanner} 
                                alt="banner" 
                                className="w-full h-full object-cover"
                            /> */}
                        </div>

                        {/* Sort */}
                        <Sort data={products} />

                        {/* Products list */}
                        <div className='mt-6 md:mt-8'>
                            <ProductList data={products} />
                        </div>

                        {/* Pagination */}
                        {/* <ProductsPagination />    */}
                        
                    </div>
                </div> 
            </section>
        </>
    )
}

export default Shop;