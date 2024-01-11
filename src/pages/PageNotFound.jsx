import { useRouteError, Link } from "react-router-dom"
import { Header, Footer, ScrollTop } from '../components';

const PageNotFound = () => {
    const error = useRouteError();

    if (error.status === 404) {
        return (
            <>
                <Header />
                <div className="h-[100vh] flex flex-col items-center justify-center text-center">
                    <h2 className="font-secondary font-semibold text-3xl">Page Not Found</h2>
                    <h1 className="font-secondary font-bold text-8xl py-3 md:py-4 lg:text-9xl lg:py-8">404</h1>
                    <h2 className="font-secondary font-semibold text-3xl">Oops! That page can&apos;t be found.</h2>
                    <p className="text-stone-500 p-4 md:max-w-md lg:py-8 lg:max-w-max">
                        Sorry, but the page you are looking for is not found. Please, make sure you have typed the current URL.
                    </p>
                    <Link to='/' className="block bg-accent text-white rounded-sm py-4 px-6 hover:bg-primary transition-all">
                        Go to Home Page
                    </Link>
                </div>
                <Footer />
                <ScrollTop />
            </>
        )
    }
    
    return (
        <>
            <Header />
            <div className="h-[100vh] flex flex-col items-center justify-center text-center">
                <h2 className="font-secondary font-semibold text-3xl">Something went wrong.</h2>
            </div>
            <Footer />
            <ScrollTop />
        </>
    )
}

export default PageNotFound