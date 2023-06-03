import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Photos = () => {
    const [photos, setPhotos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        fetchPhotos(currentPage);
    }, [currentPage]);

    const fetchPhotos = async (page) => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/albums?_page=${page}&_limit=8`);
      setPhotos(response.data);
      const totalCount = response.headers['x-total-count'];
      setTotalPages(Math.ceil(totalCount / 10));
    } catch (error) {
      console.error('Erreur lors de la récupération des albums:', error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
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
                                        <th>Title</th>
                                        <th>URL</th>
                                        <th>ThumbnailUrl</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {photos && photos.map(photo=>
                                    <tr key={photo.id}>
                                        <td>{photo.title}</td>
                                        <td><img src={photo.url} class="img-fluid rounded-start h-100 w-100 " alt="..."/></td>
                                        <td><img src={photo.thumbnailUrl} class="img-fluid rounded-start h-50 " alt="..."/></td>
                                        <td><Link><i className="fa-regular fa-pen-to-square my-3"></i></Link></td>
                                        <td><Link><i className="fa-regular fa-trash-can my-3"></i></Link></td>
                                    </tr>
                                    )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        

            <nav className='mt-3 mx-4'>
                <ul className="pagination">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                    <li
                    key={page}
                    className={`page-item ${page === currentPage ? 'active' : ''}`}
                    onClick={() => handlePageChange(page)}
                    >
                    <button className="page-link">{page}</button>
                    </li>
                ))}
                </ul>
            </nav>
        </div>
    </div>
  );
}

export default Photos