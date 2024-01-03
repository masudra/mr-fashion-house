import Navbar from "../Pages/Sheard/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Sheard/Footer/Footer";

const Main = () => {
    return (
        <div>
            <div className=" sticky top-0 z-10">
                <Navbar></Navbar>

            </div>
            
                <Outlet></Outlet>
                <Footer></Footer>
    
        </div>
    );
};

export default Main;