import { useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';
import { openCartSidebar } from '../../features/toggle/toggleSlice';

const AddToCart = ({ stock, activeWeight, activeIngredient, activeSkin, single_product }) => {
    const [amount, setAmount] = useState(1);
    const dispatch = useDispatch();

    const id = single_product?.slug;

    const increment = () => {
        setAmount((oldAmount) => {
            let tempAmount = oldAmount + 1;
            if (tempAmount > stock) {
                tempAmount = stock
            }
            return tempAmount;
        });
    };

    const decrement = () => {
        setAmount((oldAmount) => {
            let tempAmount = oldAmount - 1;
            if (tempAmount < 1) {
                tempAmount = 1
            }
            return tempAmount;
        })
    };

    const canSave = activeWeight || activeIngredient || activeSkin !== 0;

    // Add to cart
    const addToCartHandler = (id, amount, product) => {
        dispatch(addToCart({ id, amount, product }));
        dispatch(openCartSidebar())
    };

    return (
        <section>
            <div className='border-2 border-accent-primary rounded-sm max-w-[150px] h-12 flex items-center justify-between px-4'>
                <button 
                    onClick={decrement}
                    className='h-full hover:text-primary transition-all'
                >
                    <AiOutlineMinus />
                </button>

                <button className='text-[20px]'>
                    {amount}
                </button>
                
                <button 
                    onClick={increment}
                    className='h-full hover:text-primary transition-all'
                >
                    <AiOutlinePlus />
                </button>
            </div>

            <div className='pt-5 flex items-center gap-x-6'>
                <button
                    type='button'
                    aria-label='add to cart' 
                    className={`${canSave ? 'cursor-not-allowed opacity-50' : ''} block max-w-max bg-accent border-2 border-accent text-white uppercase py-3 px-4 rounded-sm hover:bg-white hover:text-accent transition-all`}
                    disabled={canSave}
                    onClick={() => addToCartHandler(id, amount, single_product)}
                >
                    {canSave ? 'unavailable' : 'add to cart'}
                </button>

                {/* <Link 
                    to='#'
                    className='block max-w-max border-2 border-accent text-accent uppercase py-3 px-4 rounded-sm hover:bg-accent hover:text-white transition-all'
                >
                    buy now
                </Link> */}
            </div>
        </section>
    )
}

export default AddToCart;

AddToCart.propTypes = {
    stock: PropTypes.number,
    activeWeight: PropTypes.any ,
    activeIngredient: PropTypes.any,
    activeSkin: PropTypes.any,
    single_product: PropTypes.any
}