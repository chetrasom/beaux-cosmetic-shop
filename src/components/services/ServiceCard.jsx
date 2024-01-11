import PropTypes from 'prop-types';

const ServiceCard = ({ icon ,title, detail }) => {
    return (
        <div className='py-5'>
            <div className='bg-secondary w-16 h-16 rounded-sm flex items-center justify-center mx-auto mb-5'>
                <span className='text-4xl'>{icon}</span>
            </div>
            <div className='text-center'>
                <h3 className='text-[24px] pb-2'>{title}</h3>
                <p className='text-stone-500'>{detail}</p>
            </div>
        </div>
    )
}

export default ServiceCard;

ServiceCard.propTypes = {
    icon: PropTypes.any,
    title: PropTypes.string,
    detail: PropTypes.string
}