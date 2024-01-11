

const Newsletter = () => {
    return (
        <section className="section bg-secondary">
            <div className="container">
                <div className="flex flex-col items-center justify-center text-center">
                    <h3 className="uppercase text-2xl pb-4 md:text-2xl lg:text-3xl lg:pb-4">
                        SIGN-UP THE BEAUTY FAN CLUB TODAY
                    </h3>
                    <p className="text-stone-600 pb-8 lg:pb-6">
                        Subscribe to our mailing list to be notified about news, collections and special offers
                    </p>
                    <div className="w-full md:max-w-lg">
                        {/* Submit email using Formspree */}
                        <form 
                            action="https://formspree.io/f/mjvnbqoa"
                            method="POST"
                        >
                            <div className="flex items-start h-12 rounded-sm overflow-hidden lg:h-14">
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email"
                                    placeholder="Your email address"
                                    autoComplete="off"
                                    className="w-full h-full focus:outline-none font-secondary text-[15px] px-4"
                                />
                            
                                <button 
                                    type="submit"
                                    className="h-full bg-accent text-white uppercase text-[15px] px-4 hover:bg-primary transition-all tracking-wider lg:px-6">
                                    submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter