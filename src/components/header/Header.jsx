import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { openSidebar } from "../../features/toggle/toggleSlice";
import { CgMenuLeft } from "react-icons/cg";
import { Logo, Navbar, ActionNavbar } from '../../components';

const Header = () => {
    const [isStatic, setIsStatic] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const handleStatic = () => {
            window.scrollY > 80 ? setIsStatic(true) : setIsStatic(false);
        }

        window.addEventListener('scroll', handleStatic);

        return () => {
            window.removeEventListener('scroll', handleStatic);
        }
    }, []);

    return (
        <header className={`${isStatic ? 'bg-secondary py-5 drop-shadow-md' : 'bg-white py-4 drop-shadow-sm'} fixed top-0 left-0 w-full z-30 transition-all`}>
            <div className="container">
                <div className="flex items-center justify-between">

                    <button
                        onClick={() => dispatch(openSidebar())} 
                        aria-label="open sidebar" 
                        className="lg:hidden text-accent"
                    >
                        <CgMenuLeft className="w-7 h-7" />
                    </button>

                    <div className="pl-14 md:pl-16 lg:pl-0">
                        <Logo />
                    </div>

                    <div className="hidden lg:flex">
                        <Navbar variant={'flex items-center gap-x-10'} />
                    </div>

                    <div>
                        <ActionNavbar />
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header;