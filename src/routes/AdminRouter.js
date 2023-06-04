import { Route, Routes } from "react-router-dom";
import ALayout from "../components/admin/layouts/ALayout";
import Dashboard from "../components/admin/Dashboard";
// import UserCurrent from "../components/admin/users/UserCurrent";
import Users from "../components/admin/users/Users";
import EditU from "../components/admin/users/EditU";
import AddU from "../components/admin/users/AddU";
import Posts from "../components/admin/posts/Posts";
import EditPost from "../components/admin/posts/EditPost";
import AddPost from "../components/admin/posts/AddPost";
import Albums from "../components/admin/albums/Albums";
import AddPhoto from "../components/admin/photos/AddPhoto";
import EditPhoto from "../components/admin/photos/EditPhoto";
import Photos from "../components/admin/photos/Photos";
import AddAlbum from "../components/admin/albums/AddAlbum";
import EditAlbum from "../components/admin/albums/EditAlbum";
import Error from "../components/admin/Error";

const AdminRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<ALayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users">
            <Route index element={<Users />} />
            <Route path="edit/:uid" element={<EditU />} />
            <Route path="add" element={<AddU />} />
          </Route>
          <Route path="posts">
            <Route path="index" element={<Posts />} />
            <Route path="edit/:pid" element={<EditPost />} />
            <Route path="add" element={<AddPost />} />
          </Route>
          <Route path="albums">
            <Route index element={<Albums />} />
            <Route path="edit/:aid" element={<EditAlbum />} />
            <Route path="add" element={<AddAlbum />} />
          </Route>
          <Route path="photos">
            <Route index element={<Photos />} />
            <Route path="edit/:id" element={<EditPhoto />} />
            <Route path="add" element={<AddPhoto />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};
export default AdminRouter;
