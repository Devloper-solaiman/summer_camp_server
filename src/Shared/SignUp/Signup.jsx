import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';


const Signup = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const formAnimation = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };


    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('http://localhost:5000/user', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    };


    return (
        <div>
            <Helmet>
                <title>Dance Camp || Sign Up</title>
            </Helmet>
            <div className="min-h-screen bg-cover bg-center flex items-center justify-center">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={formAnimation}
                    className="bg-white p-4 rounded-lg shadow-md w-full max-w-md"
                >
                    <h2 className="text-3xl text-center font-semibold mb-2">SignUp</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label htmlFor="name" className="block label text-gray-700 text-sm font-medium mb-2">
                                Name
                            </label>
                            <input type="text"  {...register("name", { required: true })} name="name"
                                placeholder="your name" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring focus:ring-indigo-400 focus:ring-opacity-50 focus:outline-none"
                            />
                            {errors.name && <span className="text-red-600">name is required</span>}
                        </div>

                        <div className="form-control">
                            <label htmlFor="text" className="block label text-gray-700 text-sm font-medium mb-2">
                                Photo URL
                            </label>
                            <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring focus:ring-indigo-400 focus:ring-opacity-50 focus:outline-none" />
                            {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                        </div>

                        <div className="form-control">
                            <label htmlFor="email" className="block label text-gray-700 text-sm font-medium mb-2">
                                Email
                            </label>
                            <input type="email"  {...register("email", { required: true })} name="email"
                                placeholder="email" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring focus:ring-indigo-400 focus:ring-opacity-50 focus:outline-none"
                            />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>


                        <div className=" form-control">
                            <label htmlFor="password" className="block label text-gray-700 text-sm font-medium mb-2">
                                Password
                            </label>
                            <input type="password"  {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} placeholder="password" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring focus:ring-indigo-400 focus:ring-opacity-50 focus:outline-none" />
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="text-right">
                            <Link to="/login" className="text-sm text-indigo-600 hover:underline">
                                Alredy Register Heare? <span className='font-bold text-green-500'>Please Login</span>
                            </Link>
                        </div>

                        <div className="form-control mt-6">
                            <input className="btn text-black w-full py-2 px-4 bg-gradient-to-r from-indigo-500 via-white to-green-400 hover:bg-emerald-900
                                  rounded-md focus:outline-none" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                    {/* Add your login form components here */}
                </motion.div>
            </div>
        </div>
    );
};
export default Signup;
