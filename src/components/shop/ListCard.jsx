import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { IoBagHandleOutline, IoHeartOutline } from "react-icons/io5";
import { formatPrice } from '../../utils/helpers';
import { Stars } from '../../components';

const ListCard = ({ product: { attributes: p } }) => {

    const coverImage = p?.images?.data[0]?.attributes?.url;
    const behindImage = p?.images?.data[1]?.attributes?.url;

    return (
        <div className='border-l-2 border-primary/60 rounded-sm overflow-hidden shadow-sm'>
            <div className='flex flex-col md:flex-row md:items-center'>

                <div className='h-full md:max-h-[325px] md:basis-2/5 overflow-hidden'>
                    <figure className='w-full h-full relative group rounded-sm overflow-hidden'>
                        <img 
                            src={coverImage} 
                            alt={p?.name} 
                            className='group-hover:opacity-0 group-hover:invisible group-hover:ease-in group-hover:transition-all group-hover:duration-300 w-full h-full object-cover md:max-w-[90%] lg:max-w-[72%]' 
                        />

                        <img 
                            src={behindImage} 
                            alt={p?.name} 
                            className='absolute top-0 left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:scale-105 ease-in transition-all duration-200 w-full h-full object-cover md:max-w-[90%] lg:max-w-[72%]'
                        />

                        {/* Add to cart icon */}
                        {/* <div className='absolute top-5 left-5 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:ease-in group-hover:transition-all group-hover:duration-300 md:top-3 md:left-3'>
                            <div className='flex items-start gap-x-2'>
                                <button 
                                    aria-label='add to cart'
                                    className='bg-white rounded-sm w-9 h-9 shadow-light flex items-center justify-center hover:bg-primary hover:text-accent transition-all'
                                >
                                    <IoBagHandleOutline className='w-5 h-5' />
                                </button>
                                <button 
                                    aria-label='add to wishlist'
                                    className='bg-white rounded-sm w-9 h-9 shadow-light flex items-center justify-center hover:bg-primary hover:text-accent transition-all'
                                >
                                    <IoHeartOutline />
                                </button>
                            </div>
                        </div> */}

                    </figure>
                </div>

                <div className='h-full md:flex-1 lg:relative lg:-left-12'>
                    <div className='p-4 flex flex-col items-start gap-y-2 text-left'>
                        <Link 
                            to={`/shop/${p?.slug}`}
                            className='text-xl font-secondary font-medium hover:text-primary hover:underline hover:underline-offset-4 transition-all md:text-2xl md:pb-1 lg:text-3xl'
                        >
                            {p?.name}
                        </Link>
                        <div>
                            <Stars stars={p?.stars} />
                        </div>

                        {p?.discountPrice > 0 ? (
                            <div className='flex items-center gap-x-3'>
                                <h4 className='font-secondary'>{formatPrice(p?.discountPrice)}</h4>
                                <h5 className='line-through text-sm text-gray-400'>{formatPrice(p?.price)}</h5>
                            </div>
                        ) : (
                            <h4 className='font-secondary'>{formatPrice(p?.price)}</h4>
                        )}

                        <p className='text-[15px] text-stone-500 leading-relaxed'>{p?.description}</p>
                    </div>
                </div>

            </div>
        </div>
                

    )
}

export default ListCard;

ListCard.propTypes = {
    product: PropTypes.object
}