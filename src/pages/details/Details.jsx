import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const allData = useLoaderData()
    const { id1 } = useParams()
    // console.log(allData , id)
    const singleData = allData.find(data => data.id == id1)
    console.log(singleData)
    const {id ,image , location , price , segment_name , status , title, area , description , facilities} = singleData;
    return (
        <div>
            <h2 className="text-center text-3xl font-bold py-4 my-6 mt-8 text-green-400">See details about your like </h2>
            <div className="">
                <div className="md:grid md:grid-cols-5 gap-5">
                    <div className="col-span-3">
                        <img src={image} className="w-full rounded-lg shadow-2xl" />
                    </div>

                    <div className="col-span-2">
                        <h1 className="text-3xl">{title}</h1>
                        <p className="py-6">{description}</p>
                        {/* কিছু কাজ বাকি আছে , উলিপুর থেকে এসে করবো। */}
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;