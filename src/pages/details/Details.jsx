import { useLoaderData, useParams } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";

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
                        <div className="flex justify-between">
                            <div className="w-1/2">
                                <h2 className="text-xl text-gray-400 font-semibold flex items-center"> <FaCheck className="text-green-400"></FaCheck> {segment_name}</h2>

                                <h2 className="mt-4 flex items-baseline">  <span className="text-xl flex"><FaCheck className="text-green-400"></FaCheck>Location:</span> <span className="text-xl text-gray-400 font-semibold ">{location}</span></h2>

                                <h2 className="mt-4 flex items-center"><FaCheck className="text-green-400"></FaCheck><span className="text-xl">Area:</span> <span className="text-xl text-gray-400 font-semibold ">{area}sq ft</span></h2>
                             
                                <h2 className="mt-4 flex items-center"><FaCheck className="text-green-400"></FaCheck><span className="text-xl">Price:</span> <span className="text-xl text-gray-400 font-semibold ">{price}tk</span></h2>

                                <h2 className="mt-4 flex items-center"><FaCheck className="text-green-400"></FaCheck><span className="text-xl">Status: </span> <span className="text-xl text-gray-400 font-semibold ">{status}</span></h2>

                            </div>
                            <div>
                                <h2 className="text-2xl text-gray-400 font-semibold underline mb-4 w-full">Our facilities</h2>
                                {
                                    facilities.map((facility , index)=><h2
                                    className="text-xl"
                                    key={index}
                                    ><span>{index+1}.</span> {facility}</h2>)
                                }
                            </div>
                        </div>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;