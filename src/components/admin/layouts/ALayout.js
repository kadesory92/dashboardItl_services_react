import { Outlet } from "react-router-dom";
import Footer from "./inc/Footer";
import Navbar from "./inc/Navbar";
import Sidebar from "./inc/Sidebar";
import '../../../assets/admin/css/styles.css';
import '../../../assets/admin/js/scripts';

const ALayout=()=>{
    return(
         <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">
                <Sidebar />
                <div id="layoutSidenav_content">
                    <main>
                        <Outlet />
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default ALayout;