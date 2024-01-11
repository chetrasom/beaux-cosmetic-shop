import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { selectorFilters, changePage } from "../../features/filters/filtersSlice";

// const maxResult = 3;

const ProductsPagination = () => {
    const { page, pageCount } = useSelector(selectorFilters);

    const dispatch = useDispatch();

    const pages = Array.from({ length: pageCount }, (_, index) => {
        return index + 1;
    });

    const nextPage = () => { 
        let newPage = page + 1;
        if (newPage > pageCount) {
            newPage = 1;
        }
        dispatch(changePage(newPage));
    }

    const prevPage = () => { 
        let newPage = page - 1;
        if (newPage < 1) {
            newPage = pageCount
        }
        dispatch(changePage(newPage))
    }

    return (
        <div className="flex items-center justify-center gap-2 mt-10">
            <button 
                type="button"
                aria-label="previous page"
                onClick={prevPage}
                className="w-10 h-10 bg-accent text-white text-2xl rounded-sm flex items-center justify-center"
            >
                <MdKeyboardArrowLeft />
            </button>

            {/* Start pages */}
            {pages.map((pageNumber) => {
                return (
                    <button 
                        key={pageNumber}
                        type="button"
                        aria-label="pageNumber"
                        className={`${pageNumber === page ? 'bg-primary text-accent' : 'bg-accent text-white'} w-10 h-10  rounded-sm flex items-center justify-center`}
                        onClick={() => dispatch(changePage(pageNumber))}
                    >
                        {pageNumber}
                    </button>
                )
            })}
            {/* End pages */}

            <button 
                type="button"
                aria-label="next page"
                onClick={nextPage}
                className="w-10 h-10 bg-accent text-white text-2xl rounded-sm flex items-center justify-center"
            >
                <MdKeyboardArrowRight />
            </button>
        </div>
    )
}

export default ProductsPagination