import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ModalAddPhoto = () => {

    const [albums, setAlbums]=useState([])
    const [dataForm, setDataForm]=useState({
        albumId:'',
        title:'',
        url:'',
        thumbnailurl:''
    })

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/albums").then((res) => {
        console.log(res);
        setAlbums(res?.data);
        console.log(res.albums);
        });
    }, []);

//     const alb = albums.map((album) =>
//     <option value={album.id} key={album.id}>
//       {album.title}
//     </option>
//   );

  const handleChange=(e)=>{
     setDataForm(...dataForm,{
        [e.target.name]:e.target.value
     })
  }

  const submitForm = (e) => {
    e.preventDefault();

    axios
      .post(`https://jsonplaceholder.typicode.com/albums`, { dataForm })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });

      setDataForm('')
  };


  return (
    <div>
        <div className="container p-3 d-flex ms-0">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add Photo
            </button>
        
            <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-success text-center" id="exampleModalLabel">Add Photo</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={submitForm}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Album Id</label>
                                    <select name="albumId" value={dataForm.albumId}  className="form-control" onChange={handleChange}>
                                        <option defaultValue>Select </option>
                                        {albums.map((album) =>{
                                            return (
                                                <option value={album.id} key={album.id}>
                                                    {album.title}
                                                </option>
                                            )
                                        }
                                        )}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                                    <input type="text" name="title" className="form-control" onChange={handleChange}  />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="url" className="form-label">URL</label>
                                    <input type="url" name="url" className="form-control" onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="thumbnailurl" className="form-label">Thumbnail Url</label>
                                    <input type="url" name="thumbnailurl" className="form-control" onChange={handleChange} />
                                </div>
                                <button type="submit" className="btn btn-primary">Add</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
   </div>
  )
}

export default ModalAddPhoto