import { useSelector, useDispatch } from 'react-redux';
import { selectorToggle } from '../../features/toggle/toggleSlice';
import { closeSidebar } from '../../features/toggle/toggleSlice';
import { LiaTimesSolid } from "react-icons/lia";
import { Logo, Navbar } from '../../components';

const MobileNavbar = () => {
    const { isSidebar } = useSelector(selectorToggle);
    const dispatch = useDispatch();

    const closeMobileNavbar = () => {
        dispatch(closeSidebar())
    };

    return (
        <div className={`${isSidebar ? 'bg-black/50 pointer-events-auto' : 'bg-transparent pointer-events-none'} fixed inset-0 z-40 ease-linear transition-all duration-200`}>
            
            <div className={`${isSidebar ? 'translate-x-0 visible' : '-translate-x-full invisible'} bg-white absolute top-0 left-0 z-50 max-w-[350px] w-full h-full ease-in transition-all duration-300 py-5 px-8`}>
                
                <div className="flex items-center justify-between mb-14">
                    <div onClick={closeMobileNavbar}>
                        <Logo />
                    </div>

                    <button 
                        onClick={closeMobileNavbar}
                        aria-label="close mobile navbar" 
                        className="hover:text-primary transition-all"
                    >
                        <LiaTimesSolid className="w-7 h-7" />
                    </button>
                </div>

                <div className="">
                    <Navbar 
                        variant={'flex flex-col gap-y-6 text-lg'}
                        closeMobileNavbar={closeMobileNavbar}
                    />
                </div>

            </div>
        </div>
    )
}

export default MobileNavbar;