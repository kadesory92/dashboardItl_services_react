import React, { useEffect, useState } from "react";
import { getPostById, updatePost } from "../../../_services/post.service";
import { useParams } from "react-router-dom";

const EditPost = () => {
  const { pid } = useParams();

  console.log("post_id : " + pid);

  console.log(pid);
  const [post, setPost] = useState({
    userId: "",
    title: "",
    body: "",
  });

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const res = await getPostById(pid);
      console.log(res.data);
      setPost(res.data);
    } catch (error) {
      console.error("Erreur de chargement de post", error);
    }
  };
  //
  const handleInputChange = (e) => {
    const dataPost = {
      ...post,
      [e.target.name]: e.target.value,
    };
    setPost(dataPost);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePost(pid, post);
      // Réinitialiser le formulaire et récupérer à nouveau les post
      setPost({
        userId: "",
        title: "",
        body: "",
      });
    } catch (error) {
      console.error("Erreur lors de la création de l'utilisateur:", error);
    }
  };
  return (
    <div>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h3>Edit post Form</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group md-3">
                    <label htmlFor="">User Id :</label>
                    <input
                      type="text"
                      name="userId"
                      className="form-control"
                      value={post.userId}
                      disabled
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group md-3">
                    <label htmlFor="">Title :</label>
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      value={post.title}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group md-3">
                    <label htmlFor="">Body :</label>
                    <input
                      type="text"
                      name="body"
                      className="form-control"
                      value={post.body}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group md-3 mt-2">
                    <button type="submit" className="btn btn-primary w-100">
                      Update post
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
