import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getListPhotos } from "../../../_services/photo.service";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchPhotos(currentPage);
  }, [currentPage]);

  const fetchPhotos = async (page) => {
    try {
      const res = await getListPhotos(page);
      console.log(res.data);
      const pictures = res.data.slice(0, 99);
      console.log(pictures);
      setPhotos(pictures);
      const totalCountElement = res.headers["x-total-count"];
      const totalCount = totalCountElement / 50;
      setTotalPages(Math.ceil(totalCount / 10));
    } catch (error) {
      console.error("Erreur lors de la récupération des albums:", error);
    }
  };

  const deletePhotoCurrent = (id) => {
    console.log(id);
    // deleteUser(id);
    // fetchphotos(currentPage);
    const photosFilter = photos.filter((user) => user.id != id);
    setPhotos(photosFilter);
    console.log("AFTER : " + photosFilter.length);
  };
  //
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="row justify-content-center mx-4 my-4 mt-5">
        <div className="col-md-10">
          <div className="card">
            <div className="card-header">
              <h3>List Of Photos</h3>
            </div>
            <div className="card-body">
              <table class="table">
                <thead class="table-light">
                  <tr>
                    <th>Title</th>
                    <th>URL</th>
                  </tr>
                </thead>
                <tbody>
                  {photos &&
                    photos.map((photo) => (
                      <tr key={photo.id}>
                        <td className="text-center my-5">{photo.title}</td>
                        <td className="h-auto">
                          <img
                            src={photo.url}
                            class="img-fluid rounded-start me-5 my-5 w-25"
                            alt="..."
                          />
                        </td>
                        <td>
                          <Link to={`/admin/photos/edit/${photo.id}`}>
                            <i className="fa-regular fa-pen-to-square my-3"></i>
                          </Link>
                        </td>
                        <td>
                          <button
                            onClick={() => deletePhotoCurrent(photo.id)}
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

        <nav className="col-md-10 mt-3 mx-4 ">
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

export default Photos;
