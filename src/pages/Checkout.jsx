import { useSelector } from "react-redux"
import { selectorCart } from "../features/cart/cartSlice"

import { BreadCrumb } from "../components"
import { formatPrice } from "../utils/helpers"

const Checkout = () => {
    const { cart ,total_amount, shipping_fee } = useSelector(selectorCart);

    return (
        <>
            <BreadCrumb 
                heading='checkout'
                title={'checkout'}
            />

            <section className='pt-0 pb-20'>

                <div className="text-red-400 text-center pt-6">
                    <h2 className="font-secondary text-2xl font-medium text-center text-red-400 mb-4">
                        Payment Under Developing...
                    </h2>
                </div>

                <div className="container">
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

                        <div>
                            <h2 className="font-secondary text-2xl font-semibold text-center mb-4">
                                Customer Information
                            </h2>

                            <div className="space-y-2">
                                {/* Name */}
                                <div className="space-y-1">
                                    <label htmlFor="name">Name</label>
                                    <input 
                                        type="text" 
                                        name="" 
                                        id="" 
                                        className="w-full border rounded-sm focus:outline-none py-2 px-4"
                                    />
                                </div>

                                {/* Phone number */}
                                <div className="space-y-1">
                                    <label htmlFor="phone number">Phone number</label>
                                    <input 
                                        type="text" 
                                        name="" 
                                        id="" 
                                        className="w-full border rounded-sm focus:outline-none py-2 px-4"
                                    />
                                </div>

                                {/* Address */}
                                <div className="space-y-1">
                                    <label htmlFor="address">Address</label>
                                    <input 
                                        type="text" 
                                        name="" 
                                        id="" 
                                        className="w-full border rounded-sm focus:outline-none py-2 px-4"
                                    />
                                </div>

                                {/* Province / City */}
                                <div className="space-y-1">
                                    <label htmlFor="city">Province / City</label>
                                    <input 
                                        type="text" 
                                        name="" 
                                        id="" 
                                        className="w-full border rounded-sm focus:outline-none py-2 px-4"
                                    />
                                </div>

                                {/* Description */}
                                <div className="space-y-1">
                                    <label htmlFor="">More information</label>
                                    <textarea 
                                        name="" 
                                        id="" 
                                        cols="30" 
                                        rows="6"
                                        className="w-full border focus:outline-none rounded-sm py-2 px-4"
                                    ></textarea>
                                </div>

                            </div>

                            <div className="mt-4">
                                <button
                                    aria-label="payment"
                                    className="bg-accent-primary text-white rounded-sm w-full h-14 capitalize hover:bg-primary hover:text-accent-primary transition-all"
                                >
                                    Pay now
                                </button>
                            </div>
                        </div>

                        <div>
                            <h2 className="font-secondary text-3xl font-semibold text-center mb-10">Payment</h2>

                            {/* Product cart */}
                            <div>
                                <div className="space-y-4">
                                    {cart.map((cartItem, index) => {
                                        return (
                                            <div key={index} className="px-5 flex items-center justify-between">

                                                <div className="flex items-center gap-5">
                                                    {/* Image */}
                                                    <div className='relative max-w-[60px] border border-gray-100 rounded-sm'>
                                                        <img
                                                            src={cartItem?.image}
                                                            alt={cartItem?.name}
                                                        />

                                                        <div className="absolute -top-2 -right-2 z-20 bg-accent-primary text-white w-5 h-5 rounded-sm flex items-center justify-center text-sm">
                                                            {cartItem?.amount}
                                                        </div>
                                                    </div>

                                                    {/* Name */}
                                                    <div>
                                                        <h5>{cartItem?.name}</h5>
                                                    </div>
                                                </div>

                                                {/* Price */}
                                                <div>
                                                    <h5>{formatPrice(cartItem?.price)}</h5>
                                                </div>
                                            </div>
                                        )
                                        
                                    })}
                                </div>
                            </div>

                            {/* Total */}
                            <div className="space-y-4 px-4 mt-6">
                                <div className='flex items-center justify-between'>
                                    <span>Subtotal</span>
                                    <span>{formatPrice(total_amount)}</span>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <span>Shipping fee</span>
                                    <span>{formatPrice(shipping_fee)}</span>
                                </div>
                                <div className='flex items-center justify-between border-t pt-4'>
                                    <span>Total</span>
                                    <span>{formatPrice(total_amount + shipping_fee)}</span>
                                </div>
                            </div>

                            {/* Payment */}
                            <div className="space-y-4 px-4 mt-8">
                                <div className="flex items-center gap-x-3">
                                    <input type="checkbox" name="" id="" className="w-4 h-4" />
                                    <p>Direct Bank Transfer ( ABA Payment )</p>
                                </div>

                                <div className="flex items-start gap-x-3">
                                    <div className="pt-1">
                                        <input type="checkbox" name="" id="" className="w-4 h-4 pt-5" />
                                    </div>
                                    <p>Cash on Delivery ( Pay in cash upon delivery )</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Checkout