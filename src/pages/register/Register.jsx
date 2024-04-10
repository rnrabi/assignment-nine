import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { toast } from 'react-toastify';
import { authContext } from "../../components/contextApi/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";


const Register = () => {
    const [showPassword, setShowPassword] = useState(true);
    const [error, setError] = useState('')
    const { signUpUser } = useContext(authContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        console.log(name, email, photo, password)
        setError('')
        if (password.length < 6) {
            setError('password must be 6 character');
            toast('password must be 6 character')
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setError('Must added an uppercase letter');
            toast('Must added an uppercase letter')
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError('Must added an lowercase letter');
            toast('')
            return;
        }
        // create user / registration
        signUpUser(email, password)
            .then(result => {
                console.log(result.user)

                updateProfile(result.user, {
                    displayName: name, photoURL: photo,
                })
                    .then(() => {
                        // update profile success message
                    })
                    .catch(error => {
                        console.log(error.message)
                    })

                toast('you have successfully registered')
            })
            .catch(error => {
                console.log(error.message)
                toast(error.message.split('/')[1].replace(')', ''))
            })

    }



    return (
        <div>
            <Helmet>
                <title>Residential | Register</title>
            </Helmet>
            <div className="flex flex-col mx-auto shadow-2xl max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Please Register</h1>
                </div>

                <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                            <input type="text" name="name" id="name" placeholder="your name" required className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" required className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="photo" className="block mb-2 text-sm">Photo URL</label>
                            <input type="text" name="photo" id="photo" placeholder="Photo URL" required className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div className="relative">
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                            </div>
                            <input type={showPassword ? 'password' : 'text'} name="password" id="password" placeholder="password" required className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />

                            <div onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 right-2"> {showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>}
                            </div>

                        </div>
                        <p className="text-red-600"><i>{error}</i></p>
                    </div>

                    <div className="space-y-2">
                        <div>
                            <button className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Register</button>
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