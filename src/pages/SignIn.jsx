import { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { signInLocalStorage } from "../features/auth/authSlice";

import { BreadCrumb } from "../components"

import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { InfinitySpin } from 'react-loader-spinner'
import { toast } from 'react-toastify';
import googleImg from '../assets/images/search.png';

// firebase
// import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider , signInWithPopup } from "firebase/auth";
import { app } from '../firebase';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showLoader, setShowLoader] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formFields, setFormFields] = useState({
        email: '',
        password: '',
    });

    const onChangeField = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormFields(() => ({
            ...formFields,
            [name]: value,
        }))
    };

    // Sign in with email
    const signIn = () => {
        setShowLoader(true);

        signInWithEmailAndPassword(auth, formFields.email, formFields.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                setShowLoader(false);
                setFormFields({
                    email: '',
                    password: '',
                });

                dispatch(signInLocalStorage());
                // localStorage.setItem('isLogin', true);
                navigate('/');

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                setShowLoader(false);
                <Navigate to="/signin" />
                toast.warning(errorMessage)
            });

    }

    // Sign in with Google
    const signInWithGoogle = () => {
        setShowLoader(true);

        signInWithPopup(auth, googleProvider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            
            const token = credential.accessToken;
            const user = result.user;

            setShowLoader(false);
            setFormFields({
                email: '',
                password: '',
            });

            dispatch(signInLocalStorage());
            navigate('/');

        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...

            setShowLoader(false);
            <Navigate to="/signin" />
            toast.warning(errorMessage)
        });
    };

    return (
        <>
            <BreadCrumb 
                heading={'Sign in'}
                title={'sign in'}
            />

            <section className="pt-8 pb-10">
                <div className='container'>
                    <div className="flex justify-center">

                        <div className="relative w-full md:w-[400px] lg:w-[500px] bg-[#f1f2f5] p-6 rounded-sm">
                            {/* Back drop loader */}
                                {showLoader && (
                                    <div className="bg-white/40 absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                                        <InfinitySpin
                                            visible={true}
                                            width="200"
                                            color="#4fa94d"
                                            ariaLabel="infinity-spin-loading"
                                        />
                                    </div>
                                )}
                            {/* End backdrop loader */}
                            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email"
                                        placeholder="Email"
                                        autoComplete="off"
                                        className="w-full h-12 focus:outline-none rounded-sm text-[15px] px-4"
                                        value={formFields.email}
                                        onChange={onChangeField}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="password">Password</label>
                                    <div className="relative">
                                        <input 
                                            type={showPassword === false ? 'password' : 'text'}
                                            name="password" 
                                            id="password"
                                            placeholder="Password"
                                            autoComplete="off"
                                            className="w-full h-12 focus:outline-none rounded-sm text-[15px] px-4"
                                            value={formFields.password}
                                            onChange={onChangeField}
                                        />
                                        {/* toggle password */}
                                        <div className="absolute top-0 right-0 h-full flex items-center">
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword((prev) => !prev)}
                                                aria-label="hide show password"
                                                className="h-full px-3"
                                            >
                                            {showPassword === false ? (
                                                <IoEyeOffOutline className="w-4 h-4" />
                                            ) : (
                                                <IoEyeOutline className="w-4 h-4" />
                                            )}
                                            </button>               
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        onClick={signIn}
                                        className="bg-primary rounded-sm w-full h-12 hover:bg-red-300 transition-all"
                                    >
                                        Sign In
                                    </button>
                                </div>

                                <div>
                                    <button
                                        onClick={signInWithGoogle}
                                        className="bg-accent-primary text-white rounded-sm w-full h-12 hover:bg-red-300 transition-all flex items-center justify-center gap-2"
                                    >
                                        <img 
                                            src={googleImg} 
                                            alt="sing in with google" 
                                            className="w-5"
                                        />
                                        <span>Sign In With Google</span>
                                    </button>
                                </div>

                                <div className="text-center">
                                    <p>Not have an account ? <Link to='/signup' className="text-blue-500">Sign up</Link></p>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default SignIn;