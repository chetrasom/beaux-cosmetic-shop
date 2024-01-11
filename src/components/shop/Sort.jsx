import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { selectorToggle, setGridView, setListView } from "../../features/toggle/toggleSlice";

import { selectorFilters } from "../../features/filters/filtersSlice";
import { updateSort } from "../../features/filters/filtersSlice";
import { openFilterSidebar } from '../../features/toggle/toggleSlice';

import { CiFilter } from "react-icons/ci";
import { TfiLayoutGrid3, TfiViewListAlt } from "react-icons/tfi";

const Sort = ({ data }) => {
    const { grid_view } = useSelector(selectorToggle);
    const { sort } = useSelector(selectorFilters);

    const dispatch = useDispatch();

    const updateControlledSort = (e) => {
        const value = e.target.value;
        dispatch(updateSort(value));
    }

    return (
        <div className="flex flex-col gap-y-5 md:flex-row md:justify-between">

            <div className='flex items-center gap-x-4'>
                {/* Start small-device filter */}

                <button 
                    aria-label='filter'
                    onClick={() => dispatch(openFilterSidebar())}
                    className='flex items-center gap-2 md:border-r-2 md:border-accent-primary md:pr-4 lg:hidden'
                >
                    <CiFilter className="w-6 h-6" /> Filters
                </button>

                {/* End small-device filter */}

                <div className='flex items-center gap-4 ml-auto md:ml-0'>
                    <button 
                        onClick={() => dispatch(setGridView())}
                        type="button"
                        aria-label='grid view'
                        className={`${grid_view ? 'bg-primary p-1 rounded-sm drop-shadow-sm': null}`}
                    >
                        <TfiLayoutGrid3 className="w-6 h-6" />
                    </button>

                    <button 
                        onClick={() => dispatch(setListView())}
                        type="button"
                        aria-label='list view'
                        className={`${!grid_view ? 'bg-primary p-1 rounded-sm drop-shadow-sm': null}`}
                    >
                        <TfiViewListAlt className="w-6 h-6" />
                    </button>

                    <div className="pl-2 hidden md:block">
                        <p>{`Showing 1–${data?.length} of 22 results`}</p>
                    </div>
                </div>
            </div>

            <div>
                <form className='flex items-center gap-x-4'>
                    <label htmlFor="sort">Sort by:</label>
                    <div className='flex-1 justify-between items-center'>
                        <select 
                            name="sort" 
                            id="sort" 
                            value={sort}
                            onChange={updateControlledSort}
                            className='capitalize focus:outline-none rounded-sm w-full'
                        >
                            <option value="price-lowest">price (lowest)</option>
                            <option value="price-highest">price (highest)</option>
                            <option value="name-a">name (a - z)</option>
                            <option value="name-z">name (z - a)</option>
                        </select>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Sort;

Sort.propTypes = {
    data: PropTypes.any
}