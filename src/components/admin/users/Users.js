import { useEffect, useState } from "react";
import { getListUsers } from "../../../_services/user.services";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  const fetchUsers = async (page) => {
    try {
      const res = await getListUsers(page);
      setUsers(res.data);
      const totalCount = res.headers["x-total-count"];
      setTotalPages(Math.ceil(totalCount / 10));
    } catch (error) {
      console.error("Erreur lors de la récupération des photos", error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const deleteUserCurrent = (id) => {
    console.log(id);
    // deleteUser(id);
    // fetchUsers(currentPage);
    const usersFilter = users.filter((user) => user.id !== id);
    setUsers(usersFilter);
    console.log("APRES : " + usersFilter.length);
  };

  return (
    <div>
      <div className="row justify-content-center mx-4 my-4 mt-5">
        <div className="col-md-10">
          <div className="card">
            <div className="card-header">
              <h3>List Of users</h3>
            </div>
            <div className="card-body">
              <table class="table">
                <thead class="table-light">
                  <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {users &&
                    users.map((user) => (
                      <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>
                          <Link to={`/admin/users/edit/${user.id}`}>
                            <i className="fa-regular fa-pen-to-square my-3"></i>
                          </Link>
                        </td>
                        <td>
                          <button
                            onClick={() => deleteUserCurrent(user.id)}
                            className="border-0">
                            <i className="fa-regular fa-trash-can my-3"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <nav className="mt-3 mx-4">
          <ul className="pagination">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <li
                  key={page}
                  className={`page-item ${
                    page === currentPage ? "active" : ""
                  }`}
                  onClick={() => handlePageChange(page)}>
                  <button className="page-link">{page}</button>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Users;
