import React, { useCallback, useContext } from "react";
import { Context } from "../store/appContext";
import Image from "../resources/graph.png";

const Graphics = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container-calendar">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Graphics Information</h1>
          <p className="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </div>
      </div>
      <div className="container-card">
              <div className="card mb-3">
                <img
                  className="card-img-top"
                  src={Image}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <table className="table">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Date</th>
                        <th scope="col">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {!!store.posts ? (
                        store.posts.map((post,i) => {
                          return (
                            <tr key={i}>
                              <th scope="row">{post.id}</th>
                              <td>{post.name}</td>
                              <td>{post.year}</td>
                              <td>{post.pantone_value}</td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr>
                          <th scope="row">..Cargando</th>
                          <td>...Cargando</td>
                          <td>...Cargando</td>
                          <td>...Cargando</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            );
      </div>
    </div>
  );
};
export default Graphics;
