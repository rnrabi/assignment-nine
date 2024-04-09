// import { useState } from "react";
import {
    useLoaderData
  } from "react-router-dom";
import Card from "../../components/card/Card";

const Home = () => {
    // const [data ,setData] =useState([]);
    const residentialData = useLoaderData()
    
console.log(residentialData)

    return (
        <>
        <h2 className="text-center text-3xl font-bold py-4 my-4 text-green-400">Featured Properties</h2>
        <div className="md:grid grid-cols-3 gap-8">
            {
                residentialData.map(residential =><Card 
                key={residential.id}
                residential={residential}
                ></Card>)
            }
        </div>
        </>
    );
};

export default Home;