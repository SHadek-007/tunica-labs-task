import React from 'react';

const SignUp = () => {
    return (
        <div className='py-20 bg-red-900 px-5 md:px-20 flex justify-center items-center'>
            <div className='w-96 bg-white p-5 rounded-xl'>
                <h2 className='text-2xl font-semibold text-red-800 text-center mb-5'>Sign Up Now</h2>
                <form className=''>
                    <input className='border block w-full py-2 rounded-full px-5 outline-red-400' type="email" name="email" placeholder='Email' required/>
                    <input className='border block w-full py-2 rounded-full px-5 my-8 outline-red-400' type="password" name="password" placeholder='Password' required/>
                    <input className='border block w-full py-2 rounded-full px-5 outline-red-400' type="password" name="confirmPassword" placeholder='Confirm Password' required/>
                    <div className='flex items-center gap-4 mt-4'>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">I agree to the Terms Of Services</label>
                    </div>
                    <input className='border block w-full py-2 rounded-full px-5 bg-red-800 text-xl text-white mt-6 cursor-pointer' type="submit" value="Sign Up" />
                    <p className='mt-4 text-center'>Already have an account? <span className='text-red-800'>Sign in</span></p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;