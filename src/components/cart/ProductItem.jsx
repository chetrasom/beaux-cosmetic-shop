import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { toggleAmount, removeItem } from '../../features/cart/cartSlice';

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";

import { formatPrice } from '../../utils/helpers';

const ProductItem = ({ cartItem }) => {
    const dispatch = useDispatch();

    const id = cartItem?.id;

    const increaseAmount = () => {
        dispatch(toggleAmount({ id: id, type: 'INC' }))
    }

    const decreaseAmount = () => {
        dispatch(toggleAmount({ id: id, type: 'DEC' }))
    }
    
    return (
        <>
            {/* Start Small Device */}
            <div className='md:hidden'>
                <div className='flex items-center justify-between gap-4'>
                    <div className='flex items-start gap-3'>
                        <div className='max-w-[100px]'>
                            <img
                                src={cartItem?.image}
                                alt={cartItem?.name}
                            />
                        </div>
                        <div>
                            <p className='uppercase text-xs text-primary tracking-wider'>
                                {cartItem?.category}
                            </p>

                            <div className='pb-1'>
                                <Link 
                                    to={`/shop/${cartItem?.id}`}
                                    className='block py-1'
                                >
                                    {cartItem?.name}
                                </Link>
                            </div>

                            <div className='pb-2'>
                                <p className='md:hidden'>{formatPrice(cartItem?.price)}</p>
                            </div>

                            <div className='flex items-center gap-3'>
                                <div className='w-[120px] h-10 border border-accent rounded-sm flex items-center justify-between px-4'>
                                    <button 
                                        type='button'
                                        aria-label='increase toggle amount'
                                        onClick={decreaseAmount}
                                        className='h-full hover:text-primary transition-all'>
                                        <AiOutlineMinus />
                                    </button>

                                    <button className='h-full text-[20px]'>{cartItem?.amount}</button>
                                        
                                    <button 
                                        type='button'
                                        aria-label='decrease toggle amount'
                                        onClick={increaseAmount}
                                        className='h-full hover:text-primary transition-all'>
                                        <AiOutlinePlus />
                                    </button>
                                </div>

                                <div>
                                    <button 
                                        aria-label='delete item'
                                        onClick={() => dispatch(removeItem(id))}
                                        className='flex items-center gap-x-1 text-red-500 hover:text-primary transition-all'
                                    >
                                        {/* <span>Delete</span>  */}
                                        <MdDeleteForever className='w-7 h-7' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <strong className='text-lg tracking-wider'>
                            {formatPrice(cartItem?.price * cartItem?.amount)}
                        </strong>
                    </div>
                </div>
            </div>
            {/* Close Small Device */}

            {/* Start */}
            <div className='hidden md:flex items-start justify-between gap-6 border-b pb-3 md:items-center'>

                <div className='flex-1'>
                    <div className='flex gap-2 md:items-center'>
                        <figure className='bg-pink-200 flex-1 max-w-[100px] w-full'>
                            <img
                                src={cartItem?.image}
                                alt={cartItem?.name}
                            />
                        </figure>
                        <div className='flex-1'>
                            <Link 
                                to={`/shop/${cartItem?.id}`}
                                className='block py-1'
                            >
                                {cartItem?.name}
                            </Link>
                        </div>
                    </div>
                </div>

                {/* md:basis-1/5 lg:flex-1 */}
                <div className='basis-14 lg:flex-1 text-center'>
                    <p>{formatPrice(cartItem?.price)}</p>
                </div>

                <div className='md:basis-1/5 lg:flex-1 flex items-center justify-center'>
                    <div className='w-[120px] h-10 border border-accent rounded-sm flex items-center justify-between px-4'>
                        <button 
                            type='button'
                            aria-label='increase toggle amount'
                            onClick={decreaseAmount}
                            className='h-full hover:text-primary transition-all'>
                            <AiOutlineMinus />
                        </button>

                        <button className='h-full text-[20px]'>{cartItem?.amount}</button>
                            
                        <button 
                            type='button'
                            aria-label='decrease toggle amount'
                            onClick={increaseAmount}
                            className='h-full hover:text-primary transition-all'>
                            <AiOutlinePlus />
                        </button>
                    </div>
                </div>

                <div className='flex-1 text-center'>
                    <div>
                        <strong className='text-lg tracking-wider md:pl-10 lg:pl-0'>
                            {formatPrice(cartItem?.price * cartItem?.amount)}
                        </strong>
                    </div>
                </div>
            </div>
            
            {/* end */}
        </>
    )
}

export default ProductItem;

ProductItem.propTypes = {
    cartItem: PropTypes.object
}