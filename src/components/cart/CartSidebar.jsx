import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { selectorToggle, closeCartSidebar } from "../../features/toggle/toggleSlice";
import { selectorCart } from "../../features/cart/cartSlice";
import { selectorAuth } from "../../features/auth/authSlice";

import { formatPrice } from "../../utils/helpers";
import { IoMdClose } from "react-icons/io";

import CartSidebarItem from "./CartSidebarItem";

const CartSidebar = () => {
    const dispatch = useDispatch();
    const { isCartSidebar } = useSelector(selectorToggle);
    const { cart, total_amount, shipping_fee } = useSelector(selectorCart);
    const { myUser } = useSelector(selectorAuth);

    const closeSidebarCart = () => {
        dispatch(closeCartSidebar())
    };

    return (
        <div className={`${isCartSidebar ? 'opacity-100 visible' : ' opacity-0 invisible'} fixed inset-0 bg-black/25 z-40 transition-all ease-in-out duration-300`}>
            <div className={`${isCartSidebar ? 'right-0 visible' : '-right-full invisible'} absolute top-0 md:max-w-[45vw] lg:max-w-[30vw] w-full bg-white h-screen p-6 lg:p-8 ease-in-out transition-all duration-300`}>

                {cart.length > 0 ? (
                    <div className="h-full flex flex-col justify-between">
                        {/* Display Items */}
                        <div className="flex items-center justify-between border-b pb-3">
                            <h5 className="text-accent text-2xl">Your cart</h5>
                            <button 
                                onClick={closeSidebarCart}
                                aria-label="close sidebar"
                            >
                                <IoMdClose className="w-7 h-7 text-red-500" />
                            </button>
                        </div>

                        <div className={`${cart.length > 3 ? 'overflow-y-scroll' : 'overflow-auto'} h-[62.5%] horizontalCard`}>
                            {cart.map((cartItem, index) => {
                                return <CartSidebarItem key={index} cartItem={cartItem} />
                            })}
                        </div>

                        <div className="border-t">
                            {/* Total amount */}
                            <div className="flex justify-between py-4">
                                <span>Subtotal + Shipping fee</span>
                                <h4 className="text-lg">
                                    {formatPrice(total_amount + shipping_fee)}
                                </h4>
                            </div>
                            
                            <div className="space-y-2">
                                <Link 
                                    to='/cart'
                                    onClick={closeSidebarCart}
                                    className="block bg-accent text-white rounded-sm uppercase text-center tracking-wider hover:bg-primary hover:text-accent transition-all py-4"
                                >
                                    view cart
                                </Link>

                                {myUser === true ? (
                                    <Link 
                                        to='/checkout' 
                                        onClick={closeSidebarCart}
                                        className="block bg-accent text-white rounded-sm uppercase text-center tracking-wider hover:bg-primary hover:text-accent transition-all py-4"
                                    >
                                        checkout
                                    </Link>
                                ) : (
                                    <Link 
                                        to='/signin' 
                                        onClick={closeSidebarCart}
                                        className="block bg-accent text-white rounded-sm uppercase text-center tracking-wider hover:bg-primary hover:text-accent transition-all py-4"
                                    >
                                        log in to make a purchase
                                    </Link>
                                )}

                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Cart empty */}
                        <div className="text-right">
                            <button
                                onClick={closeSidebarCart}
                                aria-label="close sidebar"
                            >
                                <IoMdClose className="w-7 h-7 text-red-500" />
                            </button>
                        </div>
                        
                        <div className="h-full flex flex-col justify-center">
                            
                            <div className='flex flex-col items-center justify-center gap-y-8 pb-10'>
                                <div className='text-center'>
                                    <h2 className='font-secondary font-medium text-3xl md:text-4xl'>
                                        Your cart is empty
                                    </h2>
                                    <div className="mt-6">
                                        <Link 
                                            to='/shop'
                                            onClick={closeSidebarCart}
                                            className="block mx-auto bg-accent max-w-max uppercase tracking-widest text-[15px] text-white py-4 px-6 rounded-sm hover:bg-primary hover:text-accent shadow-lg transition-all md:text-base"
                                        >
                                            continue shopping
                                        </Link>
                                    </div>
                                </div>

                                <div className='text-center'>
                                    <h3 className='text-xl font-secondary'>Have an account?</h3>
                                    <div className="flex gap-x-2">
                                        <Link 
                                            to='/signin'
                                            onClick={closeSidebarCart}
                                            className='block text-primary underline underline-offset-2 transition-all hover:text-accent'
                                        >
                                            Log in
                                        </Link>
                                        <span>to check out faster.</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </>
                )}
                
            </div>
        </div>
    )
}

export default CartSidebar;

<div className="h-full">

<div className="flex items-center justify-between border-b pb-3">
    <h5 className="text-accent text-2xl">Your cart</h5>
    <button aria-label="close sidebar">
        <IoMdClose className="w-7 h-7 text-red-500" />
    </button>
</div>

{/* <div className={`${testItem.length > 3 ? 'overflow-y-scroll' : 'overflow-auto'} min-h-[65%] bg-red-200 horizontalCard`}> */}
<div>
    <CartSidebarItem />
    <CartSidebarItem />
    <CartSidebarItem />
    <CartSidebarItem />
    <CartSidebarItem />
</div>

<div className="border-t">
    <div className="flex justify-between py-4">
        <span>Subtotal</span>
        <h4 className="text-lg">{formatPrice(54.51)}</h4>
    </div>
    
    <div className="space-y-2">
        <Link 
            to='#' 
            className="block bg-accent text-white rounded-sm uppercase text-center tracking-wider hover:bg-primary hover:text-accent transition-all py-4"
        >
            view cart
        </Link>
        <Link 
            to='#' 
            className="block bg-accent text-white rounded-sm uppercase text-center tracking-wider hover:bg-primary hover:text-accent transition-all py-4"
        >
            checkout
        </Link> 
    </div>
</div>

</div>