import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Helmet } from 'react-helmet';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const formAnimation = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };
    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }

    return (
        <div>
            <Helmet>
                <title>Dance Camp || login</title>
            </Helmet>
            <div className="min-h-screen bg-cover bg-center flex items-center justify-center">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={formAnimation}
                    className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
                >
                    <h2 className="text-2xl font-semibold mb-4">Login</h2>
                    <form onSubmit={handleLogin}>
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
                                type="password" id="password"
                                name="password" placeholder="password"
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
                            <input className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md focus:outline-none" type="submit" value="Login" />
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                    {/* Add your login form components here */}
                </motion.div>
            </div>
        </div>
    );
};

export default Login;