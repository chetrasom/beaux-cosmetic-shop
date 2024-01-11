import { BreadCrumb, Heading } from '../components';

import { IoLocationOutline, IoMailOutline, IoPhonePortraitOutline } from "react-icons/io5";

const Contact = () => {
    return (
        <>
            <BreadCrumb 
                heading='contact'
                title='contact'
            />

            <section className='container pt-10 pb-10'>

                <div className='pb-4'>
                    <Heading 
                        subTitle={'get in touch'}
                        title={'Keep In Touch with Us'}
                    />
                </div>

                <div className='space-y-10 md:space-y-14 lg:space-y-16'>
                    <div className='h-[400px] rounded-sm overflow-hidden drop-shadow-md'>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31275.97936440662!2d104.90471247540306!3d11.516132122560773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109512ead29fd23%3A0xc59039af9a79d1d9!2sAEON%20Mall%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1702801934404!5m2!1sen!2skh" 
                            width="100%" 
                            height="100%" 
                            style={{ border: "0" }}
                            allowFullScreen=""
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <div className='bg-red-0 flex flex-col gap-10 md:flex-row'>
                        <div className='md:flex-1'>
                            <h2 className='text-2xl pb-4'>Send a Message</h2>

                            <form className='space-y-6' onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <input 
                                        type="text"
                                        name="name" 
                                        id="name" 
                                        placeholder='Name*' 
                                        autoComplete='off'
                                        className='h-12 w-full bg-[#f5f5f5] focus:outline-primary focus:bg-white px-4 rounded-sm transition-all'
                                    />
                                </div>
                                <div>
                                    <input 
                                        type="email"
                                        name="email" 
                                        id="email" 
                                        placeholder='Email*' 
                                        autoComplete='off'
                                        className='h-12 w-full bg-[#f5f5f5] focus:outline-primary focus:bg-white px-4 rounded-sm transition-all'
                                    />
                                </div>
                                <div>
                                    <textarea 
                                        name="message" 
                                        id="message" 
                                        cols="30" 
                                        rows="8"
                                        placeholder='Message'
                                        className='w-full bg-[#f5f5f5] focus:outline-primary focus:bg-white p-4 rounded-sm transition-all'
                                    ></textarea>
                                </div>

                                <div>
                                    <button 
                                        aria-label='submit'
                                        className='bg-accent text-white rounded-sm py-4 px-8 hover:bg-primary transition-all'
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className='bg-green-00 md:basis-1/3'>
                            <ul className='space-y-6 md:space-y-7 lg:space-y-7'>
                                <li>
                                    <div className='space-y-2'>
                                        <h5 className='font-primary text-xl flex items-center gap-x-2'> 
                                            <IoLocationOutline className='w-6 h-6' /> 
                                            <span>Address</span>
                                        </h5>
                                        <p>
                                            No: 132 A, Samdach Sothearos Blvd Street, <br />
                                            Phnom Penh, Cambodia
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className='space-y-2'>
                                        <h5 className='font-primary text-xl flex items-center gap-x-2'>
                                            <IoMailOutline className='w-6 h-6' />Email
                                        </h5>
                                        <p>Beaux_store@gmail.com</p>
                                        <p>Beaux_support@gmail.com</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='space-y-2'>
                                        <h5 className='font-primary text-xl flex items-center gap-x-2'>
                                            <IoPhonePortraitOutline className='w-6 h-6' /> Contact phone
                                        </h5>
                                        <p>(+855) 10 888 999</p>
                                        <p>(+855) 77 11 11 22</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;