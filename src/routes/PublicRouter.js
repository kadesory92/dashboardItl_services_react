import {Routes, Route} from "react-router-dom";
import Layout from "../components/public/layouts/Layout";
import Home from "../pages/public/Home";
import Films from "../pages/public/Films";
import About from "../pages/public/About";

const PublicRouter=()=>{
    return (
            <>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="films" element={<Films/>} />
                        <Route path="about" element={<About/>} />
                    </Route>
                </Routes>
            </>
    )
}
export default PublicRouter;