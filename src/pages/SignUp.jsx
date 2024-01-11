import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { BreadCrumb } from "../components"
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { InfinitySpin } from 'react-loader-spinner'
import { toast } from 'react-toastify';
import googleImg from '../assets/images/search.png';

// firebase
// import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebase';

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showLoader, setShowLoader] = useState(false);

    const [formFields, setFormFields] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const onChangeField = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormFields(() => ({
            ...formFields,
            [name]: value,
        }))
    };

    const signUp = () => {
        setShowLoader(true);

        createUserWithEmailAndPassword(auth, formFields.email, formFields.password)
        .then((userCredential) => {
            // Signed up 
            // eslint-disable-next-line no-unused-vars
            const user = userCredential.user;
            setShowLoader(false);
            setFormFields({
                email:'',
                password:'',
                confirmPassword:''
            })
            toast.success('Signup successfully!');
            // ...
        })
        .catch((error) => {
            // eslint-disable-next-line no-unused-vars
            const errorCode = error.code;
            // eslint-disable-next-line no-unused-vars
            const errorMessage = error.message;
            // ..

            setShowLoader(false);
            <Navigate to="/signup" />
            toast.warning(errorMessage)
        });
    };

    return (
        <>
            <BreadCrumb 
                heading={'Sign up'}
                title={'sign up'}
            />

            <section className="pt-8 pb-10">
                <div className='container'>
                    <div className="flex justify-center">

                        <div className="relative w-full md:w-[400px] lg:w-[500px] bg-[#f1f2f5] p-6">
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

                                <div className="space-y-2">
                                    <label htmlFor="confirm-password">Confirm Password</label>
                                    <div className="relative">
                                        <input 
                                            type={showConfirmPassword === false ? 'password' : 'text'}
                                            name="confirmPassword" 
                                            id="confirmPassword"
                                            placeholder="Confirm Password"
                                            autoComplete="off"
                                            className="w-full h-12 focus:outline-none rounded-sm text-[15px] px-4"
                                            value={formFields.confirmPassword}
                                            onChange={onChangeField}
                                        />
                                        <div className="absolute top-0 right-0 h-full flex items-center">
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword((prev) => !prev)}
                                                aria-label="hide show password"
                                                className="h-full px-3"
                                            >
                                            {showConfirmPassword === false ? (
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
                                        onClick={signUp}
                                        aria-label="Sign up with firebase"
                                        className="bg-primary rounded-sm w-full h-12 hover:bg-red-300 transition-all"
                                    >
                                        Sign Up
                                    </button>
                                </div>

                                <div>
                                    <button
                                        className="bg-accent-primary text-white rounded-sm w-full h-12 hover:bg-red-300 transition-all flex items-center justify-center gap-2"
                                    >
                                        <img 
                                            src={googleImg} 
                                            alt="sing in with google" 
                                            className="w-5"
                                        />
                                        <span>Sign Up With Google</span>
                                    </button>
                                </div>

                                <div className="text-center">
                                    <p>Already have an account ? <Link to='/signin' className="text-blue-500">Sign In</Link></p>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp;