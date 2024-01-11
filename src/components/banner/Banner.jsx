import { Link } from "react-router-dom"

const Banner = () => {
    return (
        <section className='pb-10 lg:pb-[60px]'>
            <div className="container">
                <div className="flex flex-col gap-5 md:flex-row md:gap-8">

                    <div className="flex-1 lg:basis-3/12">
                        <figure className="relative group h-[350px] lg:h-[400px] rounded-sm overflow-hidden">
                            <img 
                                src="https://codewithsadee.github.io/glowing/assets/images/banner-1.jpg" 
                                alt="banner-1"
                                className="w-full h-full object-cover md:object-center group-hover:scale-110 ease-in transition-all duration-300"
                            />
                            <div className="absolute top-8 left-5 z-10 lg:left-8 lg:top-10">
                                <div className="bg-primary max-w-max py-2 px-3 text-xs font-medium tracking-widest rounded-sm">
                                    NEW COLLECTION
                                </div>
                                <h2 className="h2 pt-4">
                                    Discover {" "}
                                    <span className="text-white drop-shadow-md">Our</span>
                                    <br /> Barbi Moisturizer</h2>
                                <div className="pt-6">
                                    <Link 
                                        to='/shop'
                                        className="block bg-white text-accent max-w-max capitalize py-4 px-6 rounded-sm shadow-lg transition-all hover:bg-primary"
                                    >
                                        explore more
                                    </Link>
                                </div>
                            </div>
                        </figure>
                    </div>

                    <div className="flex-1">
                        <figure className="relative group h-[350px] lg:h-[400px] rounded-sm overflow-hidden">
                            <img 
                                src="https://beaux-theme.myshopify.com/cdn/shop/files/insta-8.jpg?v=1614297213"
                                alt="banner-1"
                                className="w-full h-full object-cover group-hover:scale-110 ease-in transition-all duration-300"
                            />
                          
                            <div className="absolute top-8 left-5 z-10 lg:left-8 lg:top-10">
                                <h2 className="h2 text-white drop-shadow-sm pb-2">
                                    30% off on creams
                                </h2>
                                <p className="text-white drop-shadow-md md:max-w-[250px] lg:max-w-[340px]">
                                    Nourish your skin with toxin-free cosmetics products. With the offers that you can&apos;t refuse.
                                </p>
                                <div className="pt-5 lg:pt-6">
                                    <Link 
                                        to='/shop'
                                        className="block bg-white text-accent max-w-max capitalize py-4 px-6 rounded-sm shadow-lg transition-all hover:bg-primary"
                                    >
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                        </figure>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Banner