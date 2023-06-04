import React, { useEffect, useState } from "react";
import { deleteAlbum, getAlbums } from "../../../_services/album.service";
import { Link } from "react-router-dom";

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    try {
      const res = await getAlbums();
      setAlbums(res.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des photos", error);
    }
  };

  return (
    <div>
      <div className="row justify-content-center mx-4 my-4 mt-5">
        <div className="col-md-10">
          <div className="card">
            <div className="card-header">
              <h3>List Of Albums</h3>
            </div>
            <div className="card-body">
              <table class="table">
                <thead class="table-light">
                  <tr>
                    <th>User Id</th>
                    <th>Title</th>
                  </tr>
                </thead>
                <tbody>
                  {albums &&
                    albums.map((album) => (
                      <tr key={album.id}>
                        <td>{album.userId}</td>
                        <td>{album.title}</td>
                        <td>
                          <Link to={`/admin/albums/edit/${album.id}`}>
                            <i className="fa-regular fa-pen-to-square my-3"></i>
                          </Link>
                        </td>
                        <td>
                          <span onClick={() => deleteAlbum(album.id)}>
                            <i className="fa-regular fa-trash-can my-3"></i>
                          </span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Albums;
