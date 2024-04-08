import {Outlet} from "react-router-dom"
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const Root = () => {
    return (
        <div className="w-11/12 mx-auto">
            <h2>This is main layout</h2>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;