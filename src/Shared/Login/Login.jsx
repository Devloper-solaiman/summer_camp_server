import { motion } from 'framer-motion';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Login = () => {
    const formAnimation = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };

    return (
        <div>
            <div className="min-h-screen bg-cover bg-center flex items-center justify-center">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={formAnimation}
                    className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
                >
                    <h2 className="text-2xl font-semibold mb-4">Login</h2>
                    <form>
                        <div className="mb-4 form-control">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="email"
                                // value={email} onChange={handleEmailChange}
                                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring focus:ring-indigo-400 focus:ring-opacity-50 focus:outline-none"
                                required
                            />
                        </div>
                        <div className="mb-4 form-control">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="password"
                                // value={password}  onChange={handlePasswordChange}
                                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring focus:ring-indigo-400 focus:ring-opacity-50 focus:outline-none"
                                required />
                        </div>
                        <div className="text-right">
                            <Link to="/signup" className="text-sm text-indigo-600 hover:underline">
                                Are You New Heare? <span className='font-bold text-green-500'>register now</span>
                            </Link>
                        </div>
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md focus:outline-none"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    <div className="mt-6">
                        <button
                            className="relative w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-md focus:outline-none"
                        >
                            <FaGoogle className=' absolute text-2xl left-24 text-yellow-500'></FaGoogle> Login with Google
                        </button>
                    </div>
                    {/* Add your login form components here */}
                </motion.div>
            </div>
        </div>
    );
};

export default Login;