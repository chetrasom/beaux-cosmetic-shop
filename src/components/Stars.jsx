import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import PropTypes from 'prop-types';

const Stars = ({ stars, rating, style }) => {

    const tempStars = Array.from({ length: 5 }, (_, index) => {
        const number = index + 0.5;
        return (
            <span key={index}>
                {stars >= index + 1 ? (
                    <BsStarFill />
                ) : stars >= number ? (
                    <BsStarHalf />
                ) : (
                    <BsStar />   
                )}
            </span>
        )
    });

    return (
        <div className={`${style} text-[15px] flex items-center gap-x-2`}>
            <div className={`flex items-center gap-0.5 text-[#FFD700]`}>
                {tempStars}
            </div>

            {rating && (
                <span className='leading-3 text-gray-400'>{`( ${rating} customer reviews )`}</span>
            )}
        </div>
    )
}

export default Stars;

Stars.propTypes = {
    stars: PropTypes.number,
    style: PropTypes.string,
    rating: PropTypes.number
}