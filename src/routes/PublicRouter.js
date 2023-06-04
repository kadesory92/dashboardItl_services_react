import { Routes, Route } from "react-router-dom";
import Layout from "../components/public/layouts/Layout";
import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Post from "../pages/public/Post";

const PublicRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<Post />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
};
export default PublicRouter;
