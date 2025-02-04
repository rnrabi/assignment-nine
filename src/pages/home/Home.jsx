// import { useState } from "react";
import {
    useLoaderData
} from "react-router-dom";
import Card from "../../components/card/Card";
import { Helmet } from "react-helmet-async";
import Slider from "../../components/slider/Slider";

const Home = () => {
    // const [data ,setData] =useState([]);
    const residentialData = useLoaderData()

    console.log(residentialData)

    return (
        <>
            <Helmet>
                <title>Residential | Home</title>
            </Helmet>
            <Slider></Slider>
            <div>
                <h2 className="text-center text-3xl font-bold py-4 my-4 mt-10 text-green-400">Featured Properties</h2>
                <div className="md:grid grid-cols-3 gap-8">
                    {
                        residentialData.map(residential => <Card
                            key={residential.id}
                            residential={residential}
                        ></Card>)
                    }
                </div>
            </div>
        </>
    );
};

export default Home;