import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { toggleAmount, removeItem } from "../../features/cart/cartSlice";
// import { IoMdClose } from "react-icons/io";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { formatPrice } from "../../utils/helpers";

const CartSidebarItem = ({ cartItem }) => {
    const dispatch = useDispatch();

    const id = cartItem?.id;

    const increaseAmount = () => {
        dispatch(toggleAmount({ id: id, type: 'INC' }))
    }

    const decreaseAmount = () => {
        dispatch(toggleAmount({ id: id, type: 'DEC' }))
    }

    return (
        <div className="flex border-b border-gray-200">
            <div className="w-full min-h-[150px] flex items-center gap-x-4">
                {/* image */}
                <Link 
                    to={`/shop/${cartItem?.id}`}
                >
                    <img 
                        src={cartItem?.image}
                        alt={cartItem?.name}
                        className="max-w-[80px]"
                    />
                </Link>

                {/* Items */}
                <div className="w-full">
                    {/* title */}
                    <div className="flex items-start justify-between gap-x-4 px-2">
                        <div>
                            <p className='uppercase text-xs text-accent-primary tracking-wider'>
                                {cartItem?.newCategory}
                            </p>
                            <Link 
                                to={`/shop/${cartItem?.id}`} 
                                className='block font-primary max-w-[225px] underline-offset-2 py-1 hover:underline hover:text-primary transition-all'
                            >
                                {cartItem?.name}
                            </Link>
                        </div>

                        {/* <button aria-label="remove icon">
                            <IoMdClose className="w-5 h-5" />
                        </button> */}
                    </div>

                    {/* Add to cart */}
                    <div className="pb-2">
                        <div className='flex items-start gap-x-3'>
                            <div className='max-w-max h-9 border border-accent rounded-sm'>
                                <button 
                                    type="button"
                                    aria-label="decrease amount"
                                    onClick={decreaseAmount}
                                    className='h-full px-2 hover:text-primary transition-all'
                                >
                                    <AiOutlineMinus />
                                </button>

                                <span className='h-full px-2 text-base'>{cartItem?.amount}</span>
                                
                                <button 
                                    type="button"
                                    aria-label="increase amount"
                                    onClick={increaseAmount}
                                    className='h-full px-2 hover:text-primary transition-all'
                                >
                                    <AiOutlinePlus />
                                </button>
                            </div>

                            <button 
                                aria-label="delete item"
                                onClick={() => dispatch(removeItem(id))}
                                className="h-9 text-red-500 hover:text-accent transition-all"
                            >
                                <MdDeleteForever className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* price and subtotal */}
                    <div className="flex justify-between px-2">
                        <span className="text-sm">{formatPrice(cartItem?.price)}</span>
                        <h4>{formatPrice(cartItem?.price * cartItem?.amount)}</h4>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CartSidebarItem;

CartSidebarItem.propTypes = {
    cartItem: PropTypes.object
}