import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import { AiOutlineHome } from "react-icons/ai";

const BreadCrumb = ({ heading ,title, product }) => {
    return (
        <div
            // style={{ backgroundImage: `url('https://beaux-theme.myshopify.com/cdn/shop/files/breadcrumb-01.jpg?v=1622281953&width=1920')` }}
            className='bg-secondary relative customBreadcrumb bg-no-repeat bg-cover flex justify-center items-center pt-24 pb-8 lg:pt-28 lg:pb-10'
        >
            <div className="max-w-max text-center z-20">
                <h5 className="uppercase font-semibold tracking-wider text-2xl pb-3">
                    {heading}
                </h5>

                <div className="flex flex-wrap justify-center gap-3">
                    <Link to='/' className="flex gap-x-1 group">
                        <AiOutlineHome className="w-5 h-5 group-hover:text-primary" />
                        <span className="group-hover:text-primary">Home</span>
                        
                    </Link>
                    <span>/</span>
                    {product && (
                        <Link to='/shop' className="flex gap-x-2 group">
                            <span className="group-hover:text-primary">Shop</span>
                            <span>/</span>
                        </Link>
                    )}

                    <span className="text-gray-500 capitalize">{title}</span>
                </div>
            </div>
        </div>
    )
}

export default BreadCrumb;

BreadCrumb.propTypes = {
    heading: PropTypes.string,
    title: PropTypes.string,
    product: PropTypes.bool
}