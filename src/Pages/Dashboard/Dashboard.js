import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import controlBar from '../../assets/control.png';
import { BsPeople } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";
import student from '../../assets/User.png';

const Dashboard = () => {
    const [open, setOpen] = useState(true);

    return (
        <div className="flex">
      <div
        className={`${
          open ? " w-56" : "w-16"
        } h-screen p-5 pt-8 duration-300 border-r-2 relative`}
      >
        <img
          src={controlBar}
          alt="Control Bar"
          className={`absolute cursor-pointer -right-3 rounded-full top-9 w-7 border-2 border-dark-purple ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-5 items-center">
          <img
            src={student}
            alt="Lgo"
            className={`cursor-pointer duration-700 ${open && "hidden duration-300"}`}
          />
          <h1
            className={`text-xl font-medium origin-left duration-300 ${
                !open && "scale-0"
              }`}
          >
            Student
          </h1>
        </div>
        <ul className="pt-6">
            <li className='flex items-center gap-4'>
                <Link to={'/dashboard'}><BsPeople className='text-xl'/></Link>
                <Link className={`${!open && "duration-300 scale-0"}`} to={'/dashboard'}>View Student</Link>
            </li>
            <li className='flex items-center gap-4 mt-5 border-b-2'>
                <Link to={'/dashboard/addStudent'}><AiOutlineUserAdd className='text-xl'/></Link>
                <Link className={`${!open && "duration-300 scale-0"}`} to={'/dashboard/addStudent'}>Add Student</Link>
            </li>
        </ul>
      </div>
      <div className="p-7 flex-1 h-screen">
        <Outlet/>
      </div>
    </div>
    );
};

export default Dashboard;