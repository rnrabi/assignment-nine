import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";


const Register = () => {
    const [showPassword, setShowPassword] = useState(true);
    console.log(showPassword)
    return (
        <div>
            {/* register page not finished set up */}
            <div className="flex flex-col mx-auto shadow-2xl max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Please Register</h1>
                </div>

                <form noValidate="" action="" className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Name</label>
                            <input type="text" name="name" id="name" placeholder="your name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Photo URL</label>
                            <input type="text" name="photo" id="photo" placeholder="Photo URL" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div className="relative">
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                            </div>
                            <input type={showPassword ? 'password' : 'text'} name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />

                            <div onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 right-2"> {showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>}
                            </div>

                        </div>
                    </div>

                    <div className="space-y-2">
                        <div>
                            <button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Register</button>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-600">Have an account yet?
                            <Link to='/login' rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-600  text-blue-500 font-semibold ml-2">Login</Link>.
                        </p>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Register;