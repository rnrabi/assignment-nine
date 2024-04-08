import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../contextApi/AuthProvider";


const Navbar = () => {
    const { user, logoutUser } = useContext(authContext);
    const handleLogout = () => {
        logoutUser()
            .then()
            .catch()
    }

    const menu = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-green-600 underline font-bold' : ''}>Home</NavLink></li>

        <li><NavLink to='/register' className={({ isActive }) => isActive ? 'text-green-600 underline font-bold' : ''}>Register</NavLink></li>

       { user && <li><NavLink to='/updateprofile' className={({ isActive }) => isActive ? 'text-green-600 underline font-bold' : ''} >Update profile</NavLink></li>}

        <li><NavLink to='/contact' className={({ isActive }) => isActive ? 'text-green-600 underline font-bold' : ''}>Contact</NavLink></li>

        
    </>


    return (
        <div>
            <div className="navbar bg-base-100">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2">
                            {menu}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Residential</a>
                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-3 px-1">
                        {menu}
                    </ul>
                </div>


                <div className="navbar-end">

                    {
                        user ? <Link><button onClick={handleLogout} className="btn">Logout</button></Link> : <Link to='/login'><button className="btn">Login</button></Link>
                    }


                    <div className="w-10 relative" title={user && user?.displayName}>
                        {user ? (
                            <img className="rounded-full" alt="User Profile" src={user?.photoURL} />
                        ) : (
                            <img className="rounded-full" alt="Default Profile" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        )}
                        <span className="absolute right-0">{user?.email}</span>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Navbar;