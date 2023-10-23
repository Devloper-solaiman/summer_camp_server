import { Link } from "react-router-dom";



const navOptions = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/">Our Menu</Link></li>
    <li><Link to="/">Order Food</Link></li>
    <li><Link to="/">Secret</Link></li>
    <li><Link to="">Dashboard</Link></li>
    <li><Link to="/">Login</Link></li>

</>
const NavBar = () => {
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                   <div className=" text-red-600">
                    <p className="text-4xl">SS<span className="text-yellow-500 text-xs">Dance</span></p>
                    <div className="bg-white h-0.5 w-18 ms-1"></div>
                   </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="avatar">
                        <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://www.desiblitz.com/wp-content/uploads/2022/11/Bidya-Sinha-Saha-Mim-looks-to-continue-Blockbuster-Streak-f.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;