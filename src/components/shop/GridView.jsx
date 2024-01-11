import PropTypes from 'prop-types';
import GridCard from "./GridCard";

const GridView = ({ data }) => {
    return (
        <div className='grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4'>
            {data.map((product) => {
                return <GridCard key={product?.id} product={product} />
            })}
        </div>
    )
}

export default GridView;

GridView.propTypes = {
    data: PropTypes.array
}