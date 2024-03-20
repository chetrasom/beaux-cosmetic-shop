import { useState } from "react";
import PropTypes from 'prop-types';
import Stars from "../Stars";
import AddToCart from "./AddToCart";
import { formatPrice } from "../../utils/helpers";


const weightData = [
    { id: 1, weight: 200 },
    { id: 2, weight: 150 },
    { id: 3, weight: 180 },
    { id: 4, weight: 250 },
];

const IngredientData = [
    { id: 1, name: 'Saffron' },
    { id: 2, name: 'Green Tea' },
    { id: 3, name: 'Rose' },
    { id: 4, name: 'Almond' },
];
const skinData = [
    { id: 1, name: 'Dry' },
    { id: 2, name: 'Normal' },
    { id: 3, name: 'Combination' },
    { id: 4, name: 'Oily' },
];

const Content = ({ name, stars, reviews, price, discountPrice, saving, stock, description, single_product }) => {
    const [activeWeight, setActiveWeight] = useState(0);
    const [activeIngredient, setActiveIngredient] = useState(0);
    const [activeSkin, setActiveSkin] = useState(0);

    const handleWeight = (index) => {
        setActiveWeight(index)
    }
    const handleIngredient = (index) => {
        setActiveIngredient(index)
    }
    const handleSkin = (index) => {
        setActiveSkin(index)
    }
    
    return (
        <div>
            <h2 className="text-3xl pb-2 lg:text-4xl">{name}</h2>

            <div>
                <Stars stars={stars} rating={reviews} />
            </div>

            <div className="pt-4">
                <div>
                    {discountPrice > 0 ? (
                        <div className='flex items-end gap-x-3'>
                            <h4 className='text-3xl font-secondary font-bold tracking-wider'>
                                {formatPrice(discountPrice)}
                            </h4>
                            <h5 className='line-through text-lg text-gray-400'>
                                {formatPrice(price)}
                            </h5>
                        </div>
                    ) : (
                        <h4 className='text-3xl font-secondary font-bold tracking-wider'>{formatPrice(price)}</h4>
                    )}
                </div>

                <div className="mt-4 md:mt-5">
                    {saving > 0 && (
                        <div className="max-w-max">
                            <div className='font-secondary bg-[#FFD700] rounded-sm text-xs px-2.5 py-2 md:text-sm'>
                                {`Save ${saving} %`}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <p className="leading-relaxed text-gray-600 py-6">{description}</p>

            <div className="space-y-4 pb-8">
                {/* Weight */}
                <div>
                    <div className="pb-3">Weight</div>
                    <div className="flex flex-wrap gap-2 text-[15px]">
                        {weightData.map((item, index) => {
                            return (
                                <button 
                                    key={index}  
                                    className={`${activeWeight === index ? 'border-primary text-primary' : ''} 
                                    max-w-max border p-1.5 px-4 rounded-sm transition-all`}
                                    onClick={() => handleWeight(index)}
                                >
                                    {item.weight} g m
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Ingredient */}
                <div>
                    <div className="pb-3">Ingredient</div>
                    <div className="flex flex-wrap gap-2 text-[15px]">
                        {IngredientData.map((item, index) => {
                            return (
                                <button 
                                    key={index}  
                                    className={`${activeIngredient === index ? 'border-primary text-primary' : ''} 
                                    max-w-max border p-1.5 px-4 rounded-sm transition-all`}
                                    onClick={() => handleIngredient(index)}
                                >
                                    {item.name}
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Skin */}
                <div>
                    <div className="pb-3">Ingredient</div>
                    <div className="flex flex-wrap gap-2 text-[15px]">
                        {skinData.map((item, index) => {
                            return (
                                <button 
                                    key={index}  
                                    className={`${activeSkin === index ? 'border-primary text-primary' : ''} 
                                    max-w-max border p-1.5 px-4 rounded-sm transition-all`}
                                    onClick={() => handleSkin(index)}
                                >
                                    {item.name}
                                </button>
                            )
                        })}
                    </div>
                </div>

            </div>

            <div>
                <div className="flex items-center gap-x-4">
                    <div>Availability:</div>
                    <div className="space-x-2">
                        {stock > 0 ? (
                            <span className="text-green-400">In stock</span>
                        ) : (
                            <span className="text-red-400">Out of stock</span>
                        )}
                    </div>
                </div>
            </div>

            {/* Add to cart */}
            <div className="mt-5">
                <AddToCart 
                    stock={stock}
                    activeWeight={activeWeight}
                    activeIngredient={activeIngredient}
                    activeSkin={activeSkin}
                    single_product={single_product}
                />
            </div>

        </div>
    )
}

export default Content;

Content.propTypes = {
    name: PropTypes.string, 
    stars: PropTypes.number, 
    reviews: PropTypes.number, 
    price: PropTypes.number, 
    discountPrice: PropTypes.number, 
    saving: PropTypes.number,
    stock: PropTypes.number,
    description: PropTypes.any,
    single_product: PropTypes.any
}