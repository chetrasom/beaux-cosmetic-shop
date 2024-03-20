import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct, selectorProducts } from '../features/products/productsSlice';
// Component
import { BreadCrumb, ThumbsGallerySlide } from '../components';
import Content from '../components/single-detail/Content';
import Tabs from '../components/single-detail/Tabs';
import Related from '../components/single-detail/Related';
import Loader from '../components/Loader';

import { Link } from 'react-router-dom';

const SingleDetail = () => {
    const { id } = useParams();
    
    const dispatch = useDispatch();
    const { single_product, single_status: status, single_error: error } = useSelector(selectorProducts);
    const navigate = useNavigate();

    useEffect(() => {
        // if (status === 'idle') {
        //     dispatch(fetchSingleProduct(`/api/products?populate=*&filters[slug][$eq]=${id}`))
        // }
        dispatch(fetchSingleProduct(`/api/products?populate=*&filters[slug][$eq]=${id}`))
    }, [dispatch, id]);

    useEffect(() => {
        if (status === 'failed') {
            setTimeout(() => {
                navigate('/')
            }, 3000);
        }
    }, [navigate, status]);

    // Loading
    if (status === 'loading') {
        return <Loader />
    }

    // Error
    if (status === 'failed') {
        return (
            <div className='h-[650px] flex items-center justify-center'>
                <h3 className='font-primary text-3xl text-center'>
                    {error}
                </h3>
            </div>
        )
    }

    // console.log(single_product[0]?.attributes?.description[0]?.children[0].text);
    console.log(single_product);

    return (
        <>
            <BreadCrumb 
                heading='product'
                title={single_product[0]?.attributes?.name}
                product
            />
            

            <section className='container pt-5 pb-10 lg:pt-8'>

                <div className='text-center pb-5 lg:pb-8'>
                    <Link 
                        to='/' 
                        className='block uppercase max-w-max bg-accent-primary text-white text-[15px] px-4 py-3 rounded-sm mx-auto hover:bg-primary transition-all lg:mx-0'
                    >
                        back to home
                    </Link>
                </div>

                <div className='grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:gap-x-10'>
                    <div className='bg-transparent'>
                        <ThumbsGallerySlide 
                            images={single_product[0]?.attributes?.images?.data}
                            thumbnail={single_product[0]?.attributes?.thumbnail?.data}
                        />
                    </div>
                    
                    <div>
                        <Content 
                            name={single_product[0]?.attributes?.name}
                            stars={single_product[0]?.attributes?.stars}
                            reviews={single_product[0]?.attributes?.reviews}
                            price={single_product[0]?.attributes?.price}
                            discountPrice={single_product[0]?.attributes?.discountPrice}
                            description={single_product[0]?.attributes?.description[0]?.children[0].text}
                            saving={single_product[0]?.attributes?.saving}
                            stock={single_product[0]?.attributes?.stock}
                            single_product={single_product[0]?.attributes}
                        />
                    </div>
                </div>

                <div className='py-10'>
                    <Tabs />
                </div>

                <div>
                    <Related />
                </div>

            </section>
        </>
    )
}

export default SingleDetail;