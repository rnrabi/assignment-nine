import { useContext } from "react";
import { authContext } from "../../components/contextApi/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast } from 'react-toastify';
import { Helmet } from "react-helmet-async";


const UpdateProfile = () => {
    const {user} =useContext(authContext);

    const handleSaveChange = (event)=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const picLink = form.photo?.value;
        console.log(name , picLink)

        updateProfile(user , {
            displayName : name , photoURL:picLink
        })
        .then(()=>{
            toast('profile is updated success fully')
        })
        .catch(error=>{
            console.log(error.message)
        })
    }


    return (
        <div className="">
            <Helmet>
                <title>Residential | Update profile</title>
            </Helmet>
            <div className="flex flex-col mx-auto max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl text-purple-500 font-bold">Your details</h1>
                    <p className="text-xl font-semibold dark:text-gray-600">Name: {user?.displayName}</p>
                    <p className="my-3 text-xl font-semibold  dark:text-gray-600">Email: {user?.email}</p>
                    <p className="text-xl font-semibold text-ellipsis overflow-hidden dark:text-gray-600">PhotoURL: {user?.photoURL}</p>
                </div>
                <hr className=" border border-gray-600 mb-4" />

                <form onSubmit={handleSaveChange} noValidate="" action="" className="space-y-12">
                    
                    <div className="space-y-4">
                    <h2 className="text-purple-400"><i>Eadit your name and photoURL</i></h2>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm">Your new name</label>
                            <input type="text" name="name" id="name" placeholder="Your edited name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="photo" className="text-sm">PhotoURL</label>
                            </div>
                            <input type="text" name="photo" id="photo" placeholder="Your edited photo url" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button  className="btn w-full px-8 py-3 text-xl font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Save Change</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;