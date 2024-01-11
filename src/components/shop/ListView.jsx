import PropTypes from 'prop-types';
import ListCard from './ListCard';

const ListView = ({ data }) => {
    return (
        <div className='grid grid-cols-1 gap-5'>
            {/* grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 */}
            {data.map((product) => {
                return <ListCard key={product.id} product={product} />
            })}
        </div>
    )
}

export default ListView;

ListView.propTypes = {
    data: PropTypes.array
}