import { Link } from 'react-router-dom';
import { BreadCrumb, Heading } from '../components';

import { IoLogoTwitter, IoLogoPinterest, IoLogoInstagram } from "react-icons/io5";
import { ImFacebook2 } from "react-icons/im";

import { aboutData, teamMembers } from '../data';
import AboutImg from '../assets/images/about.jpg';

const About = () => {
    return (
        <>
            <BreadCrumb 
                heading='about'
                title={'about'}
            />

            <section className='pt-10 pb-10'>

                {/* About */}
                <div className='container'>

                    <Heading 
                        subTitle={'Beaux Love'}
                        title={'About BeauX'}
                    />

                    <div className='pt-6 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10'>
                        <figure className='rounded-sm overflow-hidden pb-6 flex justify-center md:pb-8'>
                            <img 
                                src={AboutImg}
                                alt="about image" 
                                className='rounded-sm drop-shadow-md'
                            />
                        </figure>
                        <div>
                            <h2 className='font-secondary font-semibold text-2xl pb-6 md:text-3xl lg:text-[34px] capitalize'>
                                break universal beauty myth with beaux cosmetics
                            </h2>
                            <p className='text-light pb-6 lg:leading-relaxed'>
                                Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin. Made using clean, non-toxic ingredients, our products are designed for everyone…
                            </p>
                            <p className='text-light pb-4 md:pb-6 lg:leading-relaxed'>
                                If I fell in love with a woman for an artistic reason, or from the point of view of my work, I think it would rob her of something. We live in an era of globalization and the era of the woman. Never in the history of the world have women been more in control of their destiny.
                            </p>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 pt-4'>
                                <div>
                                    <h4 className='font-secondary font-semibold tracking-wide text-xl pb-4 md:text-[22px]'>
                                        Message
                                    </h4>
                                    <div className='text-light pb-4'>
                                        <p className='pb-1.5 lg:leading-relaxed lg:pb-2'>
                                            Send us a text & an ambassador <br /> will respond when available.
                                        </p>
                                        <p className='text-[15px] pb-1.5 lg:pb-2'>(+855) 10 888 999</p>
                                        <p className='text-[15px]'>(+855) 77 11 11 22</p>
                                    </div>
                                </div>

                                <div className='text-light'>
                                    <h4 className='font-secondary font-semibold tracking-wide text-xl pb-4 md:text-[22px]'>
                                        Store Hours
                                    </h4>
                                    <p className='text-[15px] pb-1.5 lg:pb-2'>Mon {`-`} Fri: &nbsp;&nbsp; 08:30 {`-`} 20:00</p>
                                    <p className='text-[15px]'>Sat & Sun: &nbsp;&nbsp; 09:30 {`-`} 21:30</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Products */}
                <div className='container py-[40px] lg:py-[60px]'>
                    <Heading 
                        subTitle={'cosmetics'}
                        title={'our products'}
                    />

                    <div className='grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-10 mt-5'>
                        {aboutData.map((item) => {
                            return (
                                <div 
                                    key={item.id}
                                    className='relative border-2 border-primary rounded-sm overflow-hidden p-6 text-center'
                                >
                                    <div className='bg-secondary max-w-max rounded-sm mx-auto p-1 mb-6'>
                                        <img 
                                            src={item.icon} 
                                            alt={item.title}
                                        />
                                    </div>
                                    <h5 className='font-bold text-2xl pb-2'>{item.number}</h5>
                                    <p className='font-medium text-xl pb-3'>{item.title}</p>
                                    <p className='text-light'>{item.detail}</p>
                                </div>
                            )
                        })}

                    </div>
                </div>

                {/* Image gallery */}
                <div className='container py-[40px] lg:py-[60px]'>
                    <div className='pb-4'>
                        <Heading 
                            subTitle={'Branded'}
                            title={'Face Care Creams'}
                        />
                    </div>

                    <div className='grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-6'>
                        <div className='min-h-[310px] rounded-sm overflow-hidden'>
                            <img 
                                src="https://beaux-theme.myshopify.com/cdn/shop/files/abou-new-02.jpg?v=1622111242" 
                                alt="image branded"
                                className='w-full h-full object-cover'
                            />
                        </div>
                        <div className='grid grid-cols-1 gap-y-6'>
                            <div className='h-[310px] rounded-sm overflow-hidden'>
                                <img 
                                    src="https://beaux-theme.myshopify.com/cdn/shop/files/abou-new-04.jpg?v=1622111287&width=1500" 
                                    alt="image branded" 
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <div className='h-[310px] rounded-sm overflow-hidden'>
                                <img 
                                    src="https://beaux-theme.myshopify.com/cdn/shop/files/abou-new-03.jpg?v=1622111307&width=1500" 
                                    alt="image branded" 
                                    className='w-full h-full object-cover'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our team */}
                <div className='container py-[40px] lg:py-[60px]'>
                    <div className='pb-2'>
                        <Heading 
                            subTitle={'Beauty Makers'}
                            title={'Meet Our Team'}
                        />
                    </div>
                    <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
                        {teamMembers.map((item) => {
                            return (
                                <div key={item.id} className='rounded-sm overflow-hidden group'>
                                    <figure className='relative'>
                                        <img 
                                            src={item.image}
                                            alt={item.name}
                                            className='w-full h-full object-cover'
                                        />
                                        
                                        <div className='absolute bottom-0 left-[50%] -translate-x-[50%] z-10 invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:-translate-y-5 ease-in transition-all duration-200'>
                                            <div className='flex gap-x-3'>
                                                <div>
                                                    <Link 
                                                        to='#' 
                                                        className='block bg-accent text-white rounded-sm overflow-hidden p-2 hover:bg-primary hover:text-accent transition-all'
                                                    >
                                                        <IoLogoTwitter className='w-5 h-5' />
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link 
                                                        to='#' 
                                                        className='block bg-accent text-white rounded-sm overflow-hidden p-2 hover:bg-primary hover:text-accent transition-all'
                                                    >
                                                        <ImFacebook2 className='w-5 h-5' />
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link 
                                                        to='#' 
                                                        className='block bg-accent text-white rounded-sm overflow-hidden p-2 hover:bg-primary hover:text-accent transition-all'
                                                    >
                                                        <IoLogoPinterest className='w-5 h-5' />
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link 
                                                        to='#' 
                                                        className='block bg-accent text-white rounded-sm overflow-hidden p-2 hover:bg-primary hover:text-accent transition-all'
                                                    >
                                                        <IoLogoInstagram className='w-5 h-5' />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                    </figure>
                                    <div className='text-center p-5'>
                                        <h5 className='font-primary uppercase font-medium text-xl tracking-wider pb-2'>
                                            {item.name}
                                        </h5>
                                        <span className='text-base text-light tracking-wider'>
                                            {item.position}
                                        </span>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>

            </section>
        </>
    )
}

export default About;