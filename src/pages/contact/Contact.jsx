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

            <div className="w-1/2 mx-auto">
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

                    <input className="btn btn-outline w-full text-xl" type="submit" value="message" />

                </form>
            </div>

        </div>
    );
};

export default Contact;