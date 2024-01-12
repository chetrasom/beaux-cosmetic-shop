
const Credit = () => {
    const getYear = new Date().getFullYear();

    return (
        <div className="bg-orange-0 mt-8 md:mt-12 lg:mt-20">
            <h4 className='flex flex-wrap justify-start items-center gap-1 font-secondary text-white md:justify-center'>
                <span>Created By</span>
                <span className='font-semibold text-primary tracking-wider'>CHETRA SOM</span> | All Rights Reserved {getYear}
            </h4>
        </div>
        // <div className='w-full text-center text-white mt-10 pb-1'>
        //     <h4 className='flex flex-wrap justify-center items-center gap-1'>
        //         <span className='text-white text-base'>Created By</span>
        //         <span className='text-secondary text-base font-bold'>CHETRA SOM</span> | All Rights Reserved {getYear}
        //     </h4>
        // </div>
    )
}

export default Credit;