import React, { useEffect, useState } from "react";
import { getListPosts } from "../../../_services/post.service";
import { Link } from "react-router-dom";

const Posts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  const fetchPosts = async (page) => {
    try {
      const res = await getListPosts(page);
      console.log(res.data);
      setPosts(res.data);
      const totalCount = res.headers["x-total-count"];
      setTotalPages(Math.ceil(totalCount / 10));
    } catch (error) {
      console.error("Erreur lors de la récupération des posts", error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  console.log("AVANT : " + posts.length);
  const deleteCurrentpost = (id) => {
    console.log(id);
    // deletepost(id);
    // fetchposts(currentPage);
    const postsFilter = posts.filter((post) => post.id != id);
    setPosts(postsFilter);
    console.log("APRES : " + postsFilter.length);
  };
  return (
    <div>
      <div className="row justify-content-center mx-4 my-4 mt-5">
        <div className="col-md-10">
          <div className="card">
            <div className="card-header">
              <h3>List Of posts</h3>
            </div>
            <div className="card-body">
              <table class="table">
                <thead class="table-light">
                  <tr>
                    <th className="w-25">User Id</th>
                    <th>Title</th>
                    <th>body</th>
                  </tr>
                </thead>
                <tbody>
                  {posts &&
                    posts.map((post) => (
                      <tr key={post.id}>
                        <td>{post.userId}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                        <td>
                          <Link to={`/admin/posts/edit/${post.id}`}>
                            <i className="fa-regular fa-pen-to-square my-3"></i>
                          </Link>
                        </td>
                        <td>
                          <button
                            onClick={() => deleteCurrentpost(post.id)}
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

export default Posts;
