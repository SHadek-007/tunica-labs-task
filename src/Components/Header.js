import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const signout = () => {
        signOut(auth);
        
      };
  return (
    <div>
      <nav className="bg-red-700 py-6 text-white">
        <ul className="flex gap-x-10 items-center px-5 md:px-20">
          <li className="font-semibold text-lg">TUNICALABS MEDIA</li>
          
            <li>
                <img
                className="rounded-full w-12 ring-2"
                src={
                !user?.reloadUserInfo?.photoUrl
                ? "https://i.ibb.co/DGFwPp9/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg"
                : user?.photoURL
                }/>
            </li>
            <li>
                {user?.displayName}
            </li>
            <li className='text-balck hover:text-secondary hover:font-bold hover:border border-secondary rounded-lg'>
            {user ? <button onClick={signout} className="btn btn-ghost">Sign Out</button> : <Link to={"/"}>Sign In</Link>}
            </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
