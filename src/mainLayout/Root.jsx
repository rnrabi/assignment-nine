import {Outlet} from "react-router-dom"
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const Root = () => {
    return (
        <div>
            <h2>This is main layout</h2>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;