import { useEffect, useState } from "react"
import { useSearchParams, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productsSlice";
import { selectorProducts } from "../features/products/productsSlice";
import { closeSearchBox } from "../features/toggle/toggleSlice";

import { VscSearchStop } from 'react-icons/vsc';
import { IoSearchOutline } from "react-icons/io5";

import { BreadCrumb, SearchCard } from '../components';
import Loader from "../components/Loader";

const Search = () => {
    const dispatch = useDispatch();
    const { products, products_status: status } = useSelector(selectorProducts);

    const [keywords, setKeywords] = useState("");
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const search = searchParams ? searchParams.get('q') : null;

    const searchFilterProducts = products.filter((item) => item?.attributes?.name.toLowerCase().includes(search.toLocaleLowerCase()));

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal

        dispatch(fetchProducts('/api/products?populate=*'), {signal});

        return () => {
            controller.abort()
        }

    }, [dispatch, search]);

    // Loading
    if (status === 'loading') {
        return <Loader />
    }

    const searchKeywords = (e) => {
        e.preventDefault()

        if(!keywords) {
            navigate('/')
            setKeywords("")
        }
        else {
            navigate(`/search?q=${keywords}`)
            setKeywords("")
        }
    }

    return (
        <>
            <BreadCrumb 
                // heading={`SEARCH: ${searchFilterProducts.length} RESULTS FOUND FOR "${search}"`}
                heading={'Search'}
                title={`Search: ${searchFilterProducts.length} results found for "${search}"`}
            />

            <div className='container pt-20 pb-10'>

                <div className="w-[300px] md:w-[400px] lg:w-[500px] mx-auto">
                    <form onSubmit={searchKeywords} className='h-12 flex'>
                        <input 
                            type="text" 
                            name="search" 
                            id="search" 
                            autoComplete="off"
                            className="w-full h-full focus:outline-none border-2 px-4 text-[15px]"
                            placeholder="Search product"
                            value={keywords}
                            onChange={(e) => setKeywords(e.target.value)} 
                        />
                        <button
                            aria-label="search"
                            onClick={() => dispatch(closeSearchBox())}
                            className='block h-full px-4 bg-accent-primary text-white text-xl hover:bg-accent transition-all'
                        >
                            <IoSearchOutline />
                        </button>
                    </form>
                </div>

                {
                    searchFilterProducts.length > 0 ? (
                        <div className="pt-8">
                            <div className="pb-8">
                                <h4 className="flex flex-wrap items-center justify-center gap-1 text-2xl lg:text-3xl">
                                    Search results for keyword: 
                                    <span className="text-primary text-2xl lg:text-3xl font-medium">{`" ${search} "`}</span>
                                    found in {searchFilterProducts?.length} post{searchFilterProducts?.length > 1 ? 's': null}.
                                </h4>
                            </div>
                            
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                                {searchFilterProducts.map((product, index) => {
                                    return (
                                        <SearchCard key={index} product={product} />
                                    )
                                })}
                            </div>
                        </div>
                    ) : (
                        <div className="pt-14">
                            <h4 className="flex flex-col items-center justify-center gap-3 text-2xl lg:text-3xl pb-12">
                                <VscSearchStop className="text-5xl block" />
                                <div className="flex items-center gap-1">
                                    Oops! No results for:
                                    <span className="text-primary text-2xl lg:text-3xl font-medium">{`" ${search} "`}</span>
                                </div>
                            </h4>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Search