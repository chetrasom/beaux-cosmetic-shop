import Stars from "../Stars";

const Review = () => {
    return (
        <>
            <div className="text-center border-b pb-4 mb-4">
                <h5 className="text-2xl pb-2">Customer Reviews</h5>
                <div className="flex items-center justify-center gap-x-2 pb-1">
                    <Stars stars={4} />
                    <span>Based on 2 reviews</span>
                </div>
                <p>Write a review</p>
            </div>

            {/* Form */}
            <div className="border-b pb-4 mb-4">
                <p className="pb-4 font-medium text-lg">Write a review</p>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                        <div className="space-y-2">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                id="name"
                                placeholder="Enter your name"
                                autoComplete="off"
                                className="w-full focus:outline-primary border border-accent-primary rounded-sm h-12 px-4"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email"
                                placeholder="John.rambo@gmail.com"
                                autoComplete="off"
                                className="w-full focus:outline-primary border border-accent-primary rounded-sm h-12 px-4"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="rating">Rating</label>
                            <Stars stars={0} />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="review">Review Title</label>
                            <input 
                                type="text" 
                                name="review" 
                                id="review"
                                placeholder="Give your review a title"
                                autoComplete="off"
                                className="w-full focus:outline-primary border border-accent-primary rounded-sm h-12 px-4"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="description">Body of Review (1500)</label>
                            <textarea 
                                name="description" 
                                id="description"
                                cols="30"
                                rows="5"
                                placeholder="Write your comment here"
                                className="p-4 w-full border border-accent-primary rounded-sm"
                            ></textarea>
                        </div>

                        <div className="flex justify-end">
                            <button className="bg-accent-primary text-white uppercase text-[15px] p-4 rounded-sm hover:bg-primary transition-all">
                                submit review
                            </button>
                        </div>

                    </div>
                </form>
            </div>

            {/* Review */}
            <div className="space-y-8">
                {/* Review profile */}
                <div className="border-b pb-4">
                    <div className="border-b pb-4 mb-2">
                        <div className="flex gap-x-2">
                            <figure className="bg-red-400 w-12 h-12 rounded-sm overflow-hidden">
                                <img 
                                    src="https://dt-embel.myshopify.com/cdn/shop/files/team-1.jpg?v=1690892792&width=1500" 
                                    alt="review profile"
                                    className="w-full h-full object-cover"
                                />
                            </figure>
                            <div className="space-y-1">
                                <h5 className="font-semibold">John rambo - 01/Jan/2024</h5>
                                <Stars stars={4} />
                            </div>
                        </div>
                        <div className="hidden">
                            <Stars stars={4} />
                        </div>
                    </div>
                    <p className="text-gray-500">
                        Aliquam sem et tortor consequat id porta nibh venenatis. Viverra adipiscing at in tellus integer feugiat scelerisque. A iaculis at erat pellentesque adipiscing commodo elit at.
                    </p>
                </div>

                {/* Review profile */}
                <div className="border-b pb-4">
                    <div className="border-b pb-4 mb-2">
                        <div className="flex gap-x-2">
                            <figure className="bg-red-400 w-12 h-12 rounded-sm overflow-hidden">
                                <img 
                                    src="https://dt-embel.myshopify.com/cdn/shop/files/team-1.jpg?v=1690892792&width=1500" 
                                    alt="review profile"
                                    className="w-full h-full object-cover"
                                />
                            </figure>
                            <div className="space-y-1">
                                <h5 className="font-semibold">John rambo - 01/Jan/2024</h5>
                                <Stars stars={4} />
                            </div>
                        </div>
                        <div className="hidden">
                            <Stars stars={4} />
                        </div>
                    </div>
                    <p className="text-gray-500">
                        Aliquam sem et tortor consequat id porta nibh venenatis. Viverra adipiscing at in tellus integer feugiat scelerisque. A iaculis at erat pellentesque adipiscing commodo elit at.
                    </p>
                </div>
            </div>

        </>
    )
}

export default Review;