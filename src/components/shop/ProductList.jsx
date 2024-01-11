import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectorToggle } from '../../features/toggle/toggleSlice';
import { GridView, ListView } from '../../components';

const ProductList = ({ data }) => {
    const { grid_view } = useSelector(selectorToggle);

    if (data?.length < 1) {
        return (
            <p>Sorry, no products matched your search...</p>
        )
    }

    if (grid_view === false) {
        return <ListView data={data} />
    }

    return (
        <GridView data={data} />
    )
}

export default ProductList;

ProductList.propTypes = {
    data: PropTypes.array
}