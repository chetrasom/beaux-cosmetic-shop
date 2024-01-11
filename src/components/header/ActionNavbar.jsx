import { useDispatch, useSelector } from "react-redux";
import { openCartSidebar, openSearchBox } from "../../features/toggle/toggleSlice";
import { selectorCart } from "../../features/cart/cartSlice";
import { selectorAuth, signOutLocalStorage } from "../../features/auth/authSlice";

import { FiUserPlus, FiUserMinus } from "react-icons/fi";
import { IoBagHandleOutline, IoSearchOutline } from "react-icons/io5";

import { Link } from 'react-router-dom';

const ActionNavbar = () => {
    const dispatch = useDispatch();
    const { total_items } = useSelector(selectorCart);
    const { myUser } = useSelector(selectorAuth);

    return (
        <ul className="flex items-center gap-x-3 md:gap-x-6">
            <li>
                <div className="relative">
                    <button 
                        aria-label="open view cart" 
                        className="block"
                        onClick={() => dispatch(openCartSidebar())}
                    >
                        <IoBagHandleOutline className="w-7 h-7" />
                    </button>
                    <div className="absolute -top-2 -right-2.5 bg-primary w-5 h-5 rounded-full flex items-center justify-center">
                        <span className="block font-bold text-xs">{total_items}</span>
                    </div>
                </div>
            </li>

            <li>
                <div>
                    <button
                        type="button"
                        aria-label="search"
                        onClick={() => dispatch(openSearchBox())}
                        className="block"
                    >
                        <IoSearchOutline className="w-7 h-7" />
                    </button>
                </div>
            </li>

            {myUser === true ? (
                <li>
                    <div>
                        <button
                            type="button"
                            aria-label="sign out"
                            onClick={() => dispatch(signOutLocalStorage())}
                            className="block"
                        >
                            <div className="flex items-end gap-x-1">
                                <FiUserMinus className="w-7 h-7" />
                                <div className="hidden lg:inline-flex">Logout</div>
                            </div>
                        </button>
                    </div>
                </li>
            ) : (
                <li>
                    <Link to='/signin'>
                        <div className="flex items-end gap-x-1">
                            <FiUserPlus className="w-7 h-7" />
                            <div className="hidden lg:inline-flex">Login</div>  
                        </div>
                    </Link>
                </li>
            )}

        </ul>
    )
}

export default ActionNavbar