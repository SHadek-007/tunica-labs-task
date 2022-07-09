import React from 'react';

const AddStudent = () => {
    return (
        <div>
            <h2 className='text-red-500'>Add Student</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <div className='col-span-2'>
                    <form>
                        <div className='flex flex-wrap lg:flex-nowrap items-center gap-x-16'>
                            <label>Full Name</label>
                            <input className='border w-96 py-3 rounded outline-0 px-5 bg-gray-200' type="text" name="name" placeholder='Name'/>
                        </div>
                        <div className='flex flex-wrap lg:flex-nowrap items-center gap-x-10 mt-5'>
                            <label>Date Of Birth</label>
                            <input className='border w-96 py-3 rounded outline-0 px-5 bg-gray-200' type="date" name="date" placeholder='Name'/>
                        </div>
                        <div className='flex flex-wrap lg:flex-nowrap items-center gap-x-[92px] mt-5'>
                            <label>School</label>
                            <select  className='border w-96 py-3 rounded outline-0 px-5 bg-gray-200' name="school">
                                <option value="select">Select</option>
                            </select>
                        </div>
                        <div className='flex flex-wrap lg:flex-nowrap items-center gap-x-[105px] mt-5'>
                            <label>Class</label>
                            <select  className='border w-96 py-3 rounded outline-0 px-5 bg-gray-200' name="school">
                                <option value="select">Select</option>
                            </select>
                        </div>
                        <div className='flex flex-wrap lg:flex-nowrap items-center gap-x-[88px] mt-5'>
                            <label>Divison</label>
                            <select  className='border w-96 py-3 rounded outline-0 px-5 bg-gray-200' name="school">
                                <option value="select">Select</option>
                            </select>
                        </div>
                        <div className='flex flex-wrap lg:flex-nowrap items-center gap-x-[88px] mt-5'>
                            <label>Status</label>
                            <div className='flex gap-x-5'>
                                <input type="radio" name="status" value='Active' />
                                <label htmlFor="status">Active</label>
                            </div>
                            <div className='flex gap-x-5'>
                                <input type="radio" name="status" value='Invoice' />
                                <label htmlFor="status">Invoice</label>
                            </div>
                        </div>
                        <input className='bg-red-800 w-56 px-10 py-2 text-white rounded md:ml-[148px] mt-7 cursor-pointer' type="submit" value="Save" />
                    </form>
                    {/* <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div>
                            <p>Full Name</p>
                            <p>Date Of Birth</p>
                            <p>School</p>
                            <p>Class</p>
                            <p>Divison</p>
                            <p>Status</p>
                            <p></p>
                        </div>
                        <div>Hello</div>
                    </div> */}
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default AddStudent;