import { Link } from "react-router-dom"
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import '../../styles.css'

import special1 from '../../assets/images/category-1.jpg';
import { formatPrice } from "../../utils/helpers";

const SpecialOffer = () => {
    return (
        <section className='section'>
            <div className="container">
                <div className="grid grid-cols-1 gap-y-10 place-content-center place-items-center md:grid-cols-2 md:gap-8 lg:gap-x-16">

                    <div className="bg-white z-20 shadow-light">
                        <figure className="relative rounded-sm overflow-hidden p-6">
                            <img 
                                src={special1} 
                                alt="special" 
                                className="w-full h-full object-cover" 
                            />
                            <div className="absolute top-0 left-0 -z-10 w-10 h-10 border-t-4 border-l-4 border-primary lg:w-16 lg:h-16"></div>
                            <div className="absolute bottom-0 right-0 -z-10 w-10 h-10 border-b-4 border-r-4 border-primary lg:w-16 lg:h-16"></div>
                        </figure>
                    </div>

                    <div>
                        <div className="flex items-center gap-x-4 text-[15px]">
                            <span>SPECIAL OFFER</span>
                            <div className="bg-primary rounded-sm px-2 text-center">-20%</div>
                        </div>

                        <h2 className="text-4xl pt-2 pb-3 lg:text-5xl lg:pt-4 lg:pb-6">Save on Sets</h2>

                        <p className="text-neutral-600 pb-6">
                            Made using clean, non-toxic ingredients, our products are designed for everyone.
                        </p>

                        {/* <div className="flex items-center gap-x-4 font-bold pb-6 text-3xl md:pb-8 lg:text-5xl lg:pb-10">
                            <div><h5>01</h5></div>
                            <div><h5>:</h5></div>
                            <div><h5>20</h5></div>
                            <div><h5>:</h5></div>
                            <div><h5>50</h5></div>
                            <div><h5>:</h5></div>
                            <div><h5>60</h5></div>
                        </div> */}

                        <div className="py-4">
                            <FlipClockCountdown
                                to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
                                className="flip-clock"
                                labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
                                duration={0.5}
                            >
                            </FlipClockCountdown>
                        </div>

                        <div>
                            <Link 
                                to='/shop' 
                                className="block max-w-max bg-accent text-white rounded-sm p-4 hover:bg-primary transition-all"
                            >
                                Get Only {formatPrice(9.99)}
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SpecialOffer