import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { getUserLocalStorage } from '../features/auth/authSlice';

import { 
    Hero, Collections, ProductsType, BestSellers, 
    Banner, Why, SpecialOffer, Newsletter, Services, Brands
} from '../components';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserLocalStorage());
    }, [dispatch]);
    
    return (
        <>
            <Hero />
            <Collections />
            <ProductsType />
            <Banner />
            <BestSellers />
            <Why />
            <SpecialOffer />
            <Brands />
            <Services />
            <Newsletter />
        </>
    )
}

export default Home;