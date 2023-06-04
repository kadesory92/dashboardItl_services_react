import ListPhotos from "./photos/ListPhotos";
import UserCurrent from "./users/UserCurrent";

const Dashboard = () => {
  return (
    <>
      <div className="container mx-3 mt-5 bg-body-secondary">
        <UserCurrent />
        <ListPhotos />
      </div>
    </>
  );
};

export default Dashboard;
