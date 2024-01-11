import Marquee from "react-fast-marquee";
import { brandsData } from '../../data';

const Brands = () => {
    return (
        <section className='bg-secondary py-[75px]'>
            <div className="container">
                <div className="relative">
                    <Marquee
                        speed={60}
                        pauseOnHover={true}
                        direction="left"
                    >
                        <div className="flex items-center text-sm lg:text-[15px] [&>*:last-child]:pr-14 gap-x-14 md:[&>*:last-child]:pr-20 md:gap-x-20 lg:[&>*:last-child]:pr-28 lg:gap-x-28">
                            {brandsData.map((brand) => {
                                return (
                                    <div key={brand.id}>
                                        <img 
                                            src={brand.image} 
                                            alt="brand" 
                                            className="max-w-[100px] md:max-w-[125px] lg:max-w-[175px]"
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </Marquee>
                </div>
            </div>
        </section>
    )
}

export default Brands