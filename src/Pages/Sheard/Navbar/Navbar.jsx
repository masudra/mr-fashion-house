import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";


const Navbar = () => {

    const navitame = <>
        <div className="mt-auto">
            <Link to='/' className="ml-4 text-xl">Home</Link>
            <Link className="ml-4 text-xl">Shop</Link>
            <Link className="ml-4 text-xl">Blog</Link>
            <Link className="ml-4 text-xl">Contact</Link>
            <input type="text" placeholder="Type here" className="input input-bordered ml-5   " />
            <button className="btn p-2 h-[20px]"><FaSearch className="text-xl"></FaSearch></button>
        </div>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navitame}
                        </ul>
                    </div>
                    <Link className="text-2xl ml-5" to='/'>MR Fashion House</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navitame}
                    </ul>
                </div>
                <div className="navbar-end">
                    <h1 className="text-xl ml-5 ">cart</h1>
                    <h1 className="text-xl ml-5 mr-5 ">img</h1>
                    <button className="btn mr-5">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;