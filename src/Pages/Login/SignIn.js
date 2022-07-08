import React, { useEffect, useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import auth from '../../firebase.init';


const SignIn = () => {
    const [user] = useAuthState(auth);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [agree, setAgree] = useState(false);
    
    useEffect(() => {
      if (user) {
        navigate("/dashboard");
      }
    });
    const [signInWithEmailAndPassword, , loading, error] =
    useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    if (loading) {
        return (
          <div className="flex items-center justify-center ">
            <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
          </div>
        );
    };
    
    let errorElement;
    if (error) {
        errorElement = (
          <div>
            <p className="text-danger">Error: {error?.message} </p>
          </div>
        );
    };
    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
      };
    const handlePasswordBlur = (e) => {
        setPassword(e.target.value);
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    };

    return (
        <div className='py-24 bg-red-900 px-5 md:px-20 flex justify-center items-center'>
            <div className='w-96 bg-white p-5 rounded-xl'>
                <h2 className='text-2xl font-semibold text-red-800 text-center mb-5'>Sign In Now</h2>
                <form onSubmit={handleFormSubmit}>
                    <input onBlur={handleEmailBlur} className='border block w-full py-2 rounded-full px-5 outline-red-400' type="email" name="email" placeholder='Email' required/>
                    <input onBlur={handlePasswordBlur} className='border block w-full py-2 rounded-full px-5 my-8 outline-red-400' type="password" name="password" placeholder='Password' required/>
                    <div
            className={agree ? "text-black" : "text-gray-500"}
            onClick={() => setAgree(!agree)}
          >
            <div className="flex items-center mt-3 gap-3">
              <input type="checkbox" className="cursor-pointer" />
              <label htmlFor="">I agree to the Terms Of Services</label>
            </div>
          </div>
          <input
            disabled={!agree}
            className=" border block w-full py-2 rounded-full px-5 bg-red-800 text-xl text-white mt-6 cursor-pointer"
            type="submit"
            value="Sign In"
          />
                    <p className='mt-4 text-center'>Don’t have an account? <span className='text-red-800'><Link to={'/signup'}>Sign Up</Link></span></p>
                </form>
            </div>
        </div>
    );
};

export default SignIn;