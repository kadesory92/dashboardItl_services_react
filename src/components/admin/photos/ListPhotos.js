import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
// import { photoService } from "../../../_services/photo.service";
import ModalAddPhoto from "./ModalAddPhoto";
import axios from "axios";

const ListPhotos = () => { 

    const [photos, setPhotos]=useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {

        const pictures = res.data.slice(0, 3)

        setPhotos(pictures);
        });
    }, [photos]);



    return (
        <>
        
            <div >
                <div className="row  md-3">
                    <div className="col-2 border border-0">
                        <em className="text-center">Id User</em>
                        <select className="form-control" name="">
                            <option defaultValue>Select </option>
                            <option value=""></option>
                        </select>
                    </div>
                    
                    <div className="col-7">
                        
                    </div>
                    <div className="col mt-0 me-0">
                        <ModalAddPhoto />
                    </div>
                </div>
                
                <div className="row">
                {photos && photos.map(photo=>
                    <div key={photo.id}  className="col-4">
                        <div class="card mb-3 h-60 W-50" >
                            <div class="row g-0">
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{photo.title}</h5>
                                        <p class="card-text">Album {photo.albumId}</p>
                                        <Link><i className="fa-solid fa-print mx-2"></i></Link>
                                        <Link><i className="fa-regular fa-pen-to-square mx-2"></i></Link>
                                        <Link><i className="fa-regular fa-trash-can mx-2"></i></Link> <Link><span className="mx-2">aaaaaa</span></Link>
                                    </div>
                                </div>
                                <div class="col-md-4 me-0">
                                    <img src={photo.url} class="img-fluid rounded-start h-50 ms-0 mx-4 mt-5 my-4" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                }
                </div>
            </div>
          
        </>
        
    )
 }

 export default ListPhotos;