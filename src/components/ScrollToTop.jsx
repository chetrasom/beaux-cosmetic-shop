import { useState, useEffect } from "react"
import { BsArrowBarUp } from 'react-icons/bs';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
    
        window.addEventListener("scroll", toggleVisibility);
    
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className='fixed bottom-10 right-7 z-30 md:bottom-14 md:right-14'>
            {isVisible && (
                <button 
                    type='button' 
                    aria-label='scroll-to-top'
                    onClick={scrollToTop}
                    className='bg-primary text-white rounded-sm p-1 md:p-2'
                >
                    <BsArrowBarUp className='text-2xl md:text-3xl' />
                </button>
                
            )}
        </div>
    )
}

export default ScrollToTop