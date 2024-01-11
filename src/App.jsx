import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SharedLayout, Home, About, Shop, SingleDetail, Contact, Cart, PageNotFound, Search,
    SignIn, SignUp, Checkout, PrivateRoute
} from './pages';

const router = createBrowserRouter([
    {
        path: "/",
        element: <SharedLayout />,
        errorElement: <PageNotFound />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'shop',
                element: <Shop />
            },
            {
                path: 'shop/:id',
                element: <SingleDetail />
            },
            {
                path: 'contact',
                element: <Contact />,
            },
            // {
            //     path: 'checkout',
            //     element: <PrivateRoute><Checkout /></PrivateRoute>,
            // },
            {
                path: 'checkout',
                element: <PrivateRoute><Checkout /></PrivateRoute>
            },
            {
                path: 'cart',
                element: <Cart />,
            },
            {
                path: 'search',
                element: <Search />,
            },
            {
                path: 'signup',
                element: <SignUp />,
            },
            {
                path: 'signin',
                element: <SignIn />,
            },

        ],
    },
]);

const App = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default App