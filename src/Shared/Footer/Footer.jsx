import { Link } from "react-router-dom";
import logoImg from "../../assets/logo/ss logo.png"
import { FaDribbble, FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className=" bg-gradient-to-b from-sky-800 via-red-200 to-teal-200">
                <div className="mx-auto  px-4 py-16 sm:px-6 lg:px-8">
                    <div className="lg:flex lg:items-start lg:gap-8">
                        <div>
                            <img className="rounded-full h-24 w-28" src={logoImg} alt="" />
                        </div>

                        <div
                            className="mt-8 grid grid-cols-2 gap-16 lg:mt-0 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-y-5"
                        >
                            <div className="col-span-2">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        BROADWAY DANCE CENTER
                                    </h2>

                                    <p className="mt-4 text-gray-500">
                                        BDC offers more than 350 drop-in classes a week!
                                        Walk-ins welcome. All levels and styles.
                                        DANCE TODAY!
                                    </p>
                                </div>
                            </div>

                            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end md:items-center">
                                <form className="w-full">
                                    <label className="sr-only"> Email </label>

                                    <div
                                        className="border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4"
                                    >
                                        <input type="email" id="UserEmail" placeholder="devlopersolaiman@gmail.com" className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm"
                                        />

                                        <Link to="/signup"
                                            className="mt-1 w-full bg-teal-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0"
                                        >
                                            Sign Up
                                        </Link>
                                    </div>
                                </form>
                            </div>

                            <div className="col-span-2 sm:col-span-1">
                                <p className="font-medium text-gray-900">LINKS</p>

                                <ul className="mt-6 space-y-4 text-sm">
                                    <li> <a href="#" className="text-gray-700 transition hover:opacity-75">EVENTS  </a></li>
                                    <li> <a href="#" className="text-gray-700 transition hover:opacity-75"> REFUND POLICY </a> </li>
                                    <li><a href="#" className="text-gray-700 transition hover:opacity-75"> PRIVACY POLICY </a>  </li>
                                    <li><a href="#" className="text-gray-700 transition hover:opacity-75"> JOBS AT BDC </a></li>
                                    <li><a href="#" className="text-gray-700 transition hover:opacity-75"> ACCESSIBILITY </a></li>
                                </ul>
                            </div>


                            <div className="col-span-2 sm:col-span-1">
                                <p className="font-medium text-gray-900">CONTACT INFO</p>

                                <ul className="mt-6 space-y-4 text-sm">
                                    <li> <a href="#" className="text-gray-700 transition hover:opacity-75"><p>Broadway Dance Center</p> <p>322 W 45th St • NYC, NY 10036</p> </a></li>
                                    <li><a href="#" className="text-gray-700 transition hover:opacity-75"> <p className="text-red-600">devlopersolaiman@gmail.com</p><p>212-582-9304 (phone) </p> </a>  </li>
                                    <li><a href="#" className="text-gray-700 transition hover:opacity-75"> <p>Children & Teens • Lincoln Center</p><p>37 W65th St • NYC, NY 10023 </p> <p className="text-red-600">W65info@bwydance.com</p><p> 212-457-0035 (phone) </p>  </a>  </li>
                                    <li><a href="#" className="text-gray-700 transition hover:opacity-75"></a>  </li>

                                </ul>
                            </div>

                            <div className="col-span-2 sm:col-span-1">
                                <p className="font-medium text-gray-900">ONLINE ACCOUNTS</p>

                                <ul className="mt-6 space-y-4 text-sm">
                                    <li> <a href="#" className="text-red-500 transition hover:opacity-75">BDC ONLINE ACCOUNT  </a></li>
                                    <li> <a href="#" className="text-red-500 transition hover:opacity-75">CHILDREN & TEENS (Annual)</a></li>
                                    <li> <a href="#" className="text-red-500 transition hover:opacity-75">CHILDREN & TEENS  (Semester)</a></li>
                                    <li> <a href="#" className="text-red-500 transition hover:opacity-75">SHOP BDC</a></li>
                            
                                </ul>
                            </div>

                            <ul
                                className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end"
                            >
                                <li>
                                    <Link to="/" className="text-gray-700 transition hover:opacity-50 text-3xl">
                                         <FaFacebook></FaFacebook>
                                    </Link>
                                </li>

                                <li>
                                <Link to="/" className="text-gray-700 transition hover:opacity-50 text-3xl">
                                         <FaInstagram></FaInstagram>
                                    </Link>
                                </li>

                                <li>
                                <Link to="/" className="text-gray-700 transition hover:opacity-50 text-3xl">
                                         <FaTwitter></FaTwitter>
                                    </Link>
                                </li>

                                <li>
                                <Link to="/" className="text-gray-700 transition hover:opacity-50 text-3xl">
                                         <FaGithub></FaGithub>
                                    </Link>
                                </li>

                                <li>
                                <Link to="/" className="text-gray-700 transition hover:opacity-50 text-3xl">
                                         <FaDribbble></FaDribbble>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                    <div className="p-3 bg-gray-700 text-gray-400 text-center ">
                            <p className="text-xs "> &copy; 2023. BDC. All rights reserved. &copy; powerd by P Hero student solaiman </p>
                       </div>
            </footer>
        </div>
    );
};

export default Footer;