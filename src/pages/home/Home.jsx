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
        <div className="md:grid grid-cols-3 gap-8">
            {
                residentialData.map(residential =><Card 
                key={residential.id}
                residential={residential}
                ></Card>)
            }
        </div>
    );
};

export default Home;