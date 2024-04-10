import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form"


const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)


    return (
        <div>
            <Helmet>
                <title>Residential | Contact</title>
            </Helmet>

            {/* contact form */}

            <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                    <div className="py-6 md:py-0 md:px-6">
                        <h1 className="text-4xl font-bold">Get in touch</h1>
                        <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Ulipur kurigram ,  Rangpur</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <span>123456789</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span>rnrabi914@gmail.com</span>
                            </p>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>

                    <label className="text-xl" htmlFor="name">Your full name</label>
                    <input className="border p-2 mb-4 w-full" placeholder="your name" {...register("name")} />
                    <br />

                    <label className="text-xl" htmlFor="name">Your phone</label> <br />
                    <input className="border p-2 mb-4 w-full" type="number" name="" id="" placeholder="your phone" {...register("number")} />

                    <br />

                    <label className="text-xl" htmlFor="name">Your email</label> <br />
                    <input className="border p-2 mb-4 w-full" placeholder="your email" {...register("email", { required: true })} />

                    <br />
                    <label htmlFor="name">About you</label> <br />
                    <textarea placeholder="about your details" name="textarea" id="" cols="50" rows="10" {...register("aboutYou")}></textarea>

                    <br />

                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className="btn btn-outline text-xl" type="submit" value="message" />

                </form>
                </div>
            </section>

        </div>
    );
};

export default Contact;