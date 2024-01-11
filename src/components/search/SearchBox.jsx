import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { closeSearchBox, selectorToggle } from "../../features/toggle/toggleSlice";

import { LiaTimesSolid } from "react-icons/lia";
import { IoSearchOutline } from "react-icons/io5";

const SearchBox = () => {
    const dispatch = useDispatch();
    const { isSearchBox } = useSelector(selectorToggle);

    const [keywords, setKeywords] = useState("");
    const navigate = useNavigate();

    const searchKeywords = (e) => {
        e.preventDefault()

        if(!keywords) {
            navigate('/')
            setKeywords("")
        }
        else {
            navigate(`/search?q=${keywords}`)
            setKeywords("")
        }
    }

    return (
        <div className={`${isSearchBox ? 'h-28 translate-y-0 visible' : '-translate-y-full -h-full invisible'}
        bg-primary fixed top-0 left-0 w-full z-40 flex justify-center items-center gap-x-4 ease-in-out transition-all`}>
            <div className='w-[300px] md:w-[400px] lg:w-[500px]'>
                <form 
                    onSubmit={searchKeywords}
                    className='h-12 flex'
                >
                    <input 
                        type="text" 
                        name="search" 
                        id="search" 
                        autoComplete="off"
                        className="w-full h-full focus:outline-none px-4 text-[15px] rounded-tl-sm rounded-bl-sm rounded-tr-none rounded-br-none"
                        placeholder='Search product'
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                    />
                    <button
                        aria-label="search"
                        onClick={() => dispatch(closeSearchBox())}
                        className='block h-full px-4 bg-accent-primary text-white text-xl hover:bg-accent transition-all rounded-tr-sm rounded-br-sm'
                    >
                        <IoSearchOutline />
                    </button>
                </form>
            </div>

            <div>
                <button
                    type='button'
                    aria-label='close search box'
                    onClick={() => dispatch(closeSearchBox())}
                    className='block text-2xl'
                >
                    <LiaTimesSolid />
                </button>
            </div>
        </div>
    )
}

export default SearchBox;