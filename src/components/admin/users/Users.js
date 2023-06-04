import { useEffect, useState } from "react";
import { deleteUser, getUsers } from "../../../_services/user.services";
import { Link } from "react-router-dom";

const Users = () => {
    
    const [users, setUsers] = useState([]);


    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
        const response = await getUsers();
        setUsers(response.data);
        } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
        }
    }
//

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
                                {users && users.map(user=>
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td><Link to={`/admin/users/edit/${user.id}`}><i className="fa-regular fa-pen-to-square my-3"></i></Link></td>
                                    <td><span onClick={() => deleteUser(user.id)}><i className="fa-regular fa-trash-can my-3"></i></span></td>
                                </tr>
                                )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>     
    </div>
)
 }

 export default Users;