import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectorCart, countCartTotal } from "../features/cart/cartSlice";

import { Outlet } from "react-router-dom"
import { Header, MobileNavbar, Footer, ScrollToTop, ScrollTop, CartSidebar, SearchBox } from '../components';

const SharedLayout = () => {
    const dispatch = useDispatch();
    const { cart } = useSelector(selectorCart);

    useEffect(() => {
        dispatch(countCartTotal());
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [dispatch ,cart]);

    return (
        <>
            <ScrollTop />
            <Header />
            <MobileNavbar />
            <CartSidebar />
            <SearchBox />
            {/* className="pt-[100px] md:pt-[110px] lg:pt-[120px]" */}
            <main className="">
                <Outlet />
            </main>
            <Footer />
            <ScrollToTop />
        </>
    )
}

export default SharedLayout;