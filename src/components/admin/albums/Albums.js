import React, { useEffect, useState } from "react";
import { deleteAlbum, getListAlbums } from "../../../_services/album.service";
import { Link } from "react-router-dom";

const Albums = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchAlbums(currentPage);
  }, [currentPage]);

  const fetchAlbums = async (page) => {
    try {
      const res = await getListAlbums(page);
      setAlbums(res.data);
      const totalCount = res.headers["x-total-count"];
      setTotalPages(Math.ceil(totalCount / 10));
    } catch (error) {
      console.error("Erreur lors de la récupération des photos", error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  console.log("AVANT : " + albums.length);
  const deleteCurrentAlbum = (id) => {
    console.log(id);
    // deleteAlbum(id);
    // fetchAlbums(currentPage);
    const albumsFilter = albums.filter((album) => album.id != id);
    setAlbums(albumsFilter);
    console.log("APRES : " + albumsFilter.length);
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
                          <button
                            onClick={() => deleteCurrentAlbum(album.id)}
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

export default Albums;
