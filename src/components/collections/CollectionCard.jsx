import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CollectionCard = ({ image, title, url }) => {
    return (
        <div className='relative rounded-sm overflow-hidden group'>
            <img src={image} alt="collection 1" />
            <div className='bg-primary/40 absolute inset-0 z-10 flex items-center justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible ease-in transition-all duration-200'>
                <div className='bg-white w-[200px] h-[200px] rounded-full flex flex-col items-center justify-center gap-y-2 shadow-light'>
                    <h3 className='uppercase text-2xl pointer-events-none tracking-wide'>
                        {title}
                    </h3>
                    <Link 
                        to={url}
                        className='underline underline-offset-8 hover:text-primary transition-all'
                    >
                        View More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard;

CollectionCard.propTypes = {
    image: PropTypes.any,
    title: PropTypes.string,
    url: PropTypes.string,
}