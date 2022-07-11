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
        <ul className="flex justify-between items-center px-5 md:px-20">
          <li className="font-semibold text-lg">TUNICALABS MEDIA</li>

          <div className="flex items-center gap-x-4">
            <li>
              <img
                className="rounded-full w-12 h-12 ring-2"
                src={
                  !user?.reloadUserInfo?.photoUrl
                    ? "https://www.filmibeat.com/img/162x203/popcorn/profile_photos/allu-arjun-20190607155519-4140.jpg"
                    : user?.photoURL
                }
                alt=""
              />
            </li>
            <li>Rajan</li>
            <li>
              {user ? (
                <button onClick={signout} className="btn btn-ghost">
                  Sign Out
                </button>
              ) : (
                <Link to={"/"}>Sign In</Link>
              )}
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
