import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { clearCart, selectorCart } from '../features/cart/cartSlice';
import { selectorAuth } from '../features/auth/authSlice';

// import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { IoArrowUndoOutline } from "react-icons/io5";

import { formatPrice } from '../utils/helpers';
// components
import { BreadCrumb } from '../components';
import ProductItem from '../components/cart/ProductItem';

const Cart = () => {
    const dispatch = useDispatch();
    const { cart, total_amount, shipping_fee } = useSelector(selectorCart);
    const { myUser } = useSelector(selectorAuth);
    
    return (
        <>
            <BreadCrumb 
                heading={'your shopping cart'}
                title={'cart'}
            />

            <div className='container pt-8 pb-10'>

                {/* Cart empty */}
                {cart.length < 1 ? (
                    <div className='flex flex-col items-center justify-center gap-y-8 pb-10'>
                        <div className='text-center space-y-4'>
                            <h2 className='text-3xl md:text-4xl'>Your cart is empty</h2>
                            <div>
                                <Link 
                                    to='/shop'
                                    className="block mx-auto bg-accent max-w-max uppercase tracking-widest text-[15px] text-white py-4 px-6 rounded-sm hover:bg-primary hover:text-accent shadow-lg transition-all md:text-base"
                                >
                                    continue shopping
                                </Link>
                            </div>
                        </div>

                        <div className='text-center space-y-4'>
                            <h3 className='h3'>Have an account?</h3>
                            <p>
                                <Link to='#' className='text-primary underline underline-offset-2 transition-all hover:text-accent'>
                                Log in</Link> to check out faster.
                            </p>
                        </div>
                    </div>
                    
                ) : (
                    
                    <div>
                        {/* Heading */}
                        <div className='text-center space-y-2 mb-8'>
                            <h2 className='h2'>Your cart</h2>
                            <div>
                                <Link 
                                    to='/shop'
                                    className='text-primary underline underline-offset-8 transition-all hover:text-accent'>
                                    Continue Shopping
                                </Link>
                            </div>
                        </div>

                        {/* Start table */}
                        <div>
                            <div className='font-secondary text-lg flex items-center justify-between border-b pb-2'>
                                <div className='flex-1 text-left md:text-center'>Product</div>
                                <div className='hidden md:flex flex-1 text-center justify-center'>Price</div>
                                <div className='hidden md:flex flex-1 text-center justify-start lg:justify-center'>Quantity</div>
                                <div className='flex-1 text-right md:text-center'>Subtotal</div>
                            </div>

                            <div className='mt-6 space-y-3'>
                                {cart.map((cartItem, index) => {
                                    return <ProductItem key={index} cartItem={cartItem} />
                                })}
                            </div>

                            <div className='mt-6 flex flex-col gap-y-3 md:flex-row md:justify-between'>
                                <Link 
                                    to='/shop'
                                    className='capitalize bg-primary text-accent text-center rounded-sm p-4 flex items-center justify-center gap-2 hover:bg-red-500 hover:text-white transition-all'
                                >
                                    <IoArrowUndoOutline className='w-5 h-5' /> Continue Shopping
                                </Link>

                                {/* Clear cart */}
                                <button 
                                    aria-label='clear all items' 
                                    className='flex items-center justify-center gap-2 capitalize bg-accent text-white rounded-sm p-4 hover:bg-red-500 transition-all'
                                    onClick={() => dispatch(clearCart())}
                                >
                                    <MdDeleteForever className='w-6 h-6' /> Clear Shopping Cart
                                </button>
                            </div>

                            <div className='mt-6 w-full bg-white rounded-sm drop-shadow-md p-5 divide-y md:max-w-sm md:ml-auto'>
                                <div className='py-4'>
                                    <h5 className='text-2xl'>Cart totals</h5>
                                </div>
                                <div className='flex items-center justify-between py-4'>
                                    <span>Subtotal</span>
                                    <span>{formatPrice(total_amount)}</span>
                                </div>
                                <div className='flex items-center justify-between py-4'>
                                    <span>Shipping fee</span>
                                    <span>{formatPrice(shipping_fee)}</span>
                                </div>
                                <div className='flex items-center justify-between py-4 mb-5'>
                                    <span>Total</span>
                                    <span>{formatPrice(total_amount + shipping_fee)}</span>
                                </div>

                                {myUser === true ? (
                                    <Link 
                                        to='/checkout' 
                                        className='block capitalize bg-accent text-white text-center rounded-sm p-4 hover:bg-primary transition-all'
                                    >
                                        proceed to checkout
                                    </Link>
                                ) : (
                                    <Link 
                                        to='/signin' 
                                        className='block capitalize bg-accent text-white text-center rounded-sm p-4 hover:bg-primary transition-all'
                                    >
                                        log in to make a purchase
                                    </Link>
                                )}
                                
                            </div>
                        </div>
                        {/* Close table */}

                    </div>
                )}

            </div>
        </>
    )
}

export default Cart;