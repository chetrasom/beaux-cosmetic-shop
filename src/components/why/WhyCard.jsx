import PropTypes from 'prop-types';

const WhyCard = ({ image, title, description }) => {
    return (
        <div className="flex flex-col items-center justify-center text-center pt-5 cursor-default group">
            <figure className='w-[100px] pb-6'>
                <img 
                    src={image} 
                    alt={title} 
                    className='w-full h-full object-cover group-hover:scale-110 ease-in transition-all duration-200'
                />
            </figure>
            <h3 className='h3 pb-4 group-hover:text-primary ease-in transition-all duration-200'>
                {title}
            </h3>
            <p className='text-neutral-500 group-hover:text-black ease-in transition-all duration-200'>
                {description}
            </p>
        </div>
    )
}

export default WhyCard;

WhyCard.propTypes = {
    image: PropTypes.any,
    title: PropTypes.string,
    description: PropTypes.string
}