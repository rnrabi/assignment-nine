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
        <div>
            <h2>This is home</h2>
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