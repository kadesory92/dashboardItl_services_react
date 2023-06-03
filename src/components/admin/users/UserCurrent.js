import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
// import { userService } from "../../../_services/user.services";

const UserCurrent = () => {
    
    const [user, setUser]=useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users/1").then((res) => {
        //   console.log(res);
        setUser(res?.data);
        });
    }, []);

    return(
        <div className="row mt-3 border mx-3 mb-5 mx-2">
            <div className="col-6">
                <div className="card mb-3 w-50 mt-3 border border-0">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-person p-1" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                            </svg>
                            {/* <img src="..." className="img-fluid rounded-start" alt="..."/> */}
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title text-primary">{user?.name}<i className="fa-solid fa-person"> </i></h5>
                                <Link><i className="fa-solid fa-print mx-2"></i></Link>
                                <Link><i className="fa-regular fa-pen-to-square mx-2"></i></Link>
                                <Link><i className="fa-regular fa-trash-can mx-2"></i></Link> <Link><span className="mx-2">aaaaaa</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-6 ml-5 mt-3">
                <div className="row md-4">
                    <div className="col">
                        <div className="row mt-5">
                            <em>Username</em>
                            <span>{user?.username}</span>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row  mb-2">
                            <em>Phone</em>
                            <span>{user?.phone}</span>
                        </div>
                        <div className="row">
                            <em>Phone Fix</em>
                            <span>{user?.phone}</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row mb-2">
                            <em>Email</em>
                            <span>{user?.email}</span>
                        </div>
                        <div className="row">
                            <em>Website</em>
                            <span>{user?.website}</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <Link><i className="fa-regular fa-pen-to-square my-3"></i></Link>
                        </div>
                        <div className="row">
                            <Link><i className="fa-regular fa-trash-can my-3"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
 }


 export default UserCurrent;