import React, { useCallback, useContext } from "react";
import { Context } from "../store/appContext";

const Users = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container-users">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Users Information</h1>
          <p className="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </div>
      </div>
      <div className="container-card">
        <div className="row">
          {!!store.users ? (
            store.users.map((user, i) => {
              return (
                <div className="info" key={i}>
                  <img
                    className="card-img-top"
                    src={user.avatar}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="card-title">
                      {user.last_name} {user.first_name}
                    </h4>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="info">
              <img className="card-img-top" src="" alt="..Cargando" />
              <div className="card-body">
                <h4 className="card-title">...Cargando</h4>
                <p className="card-text">...Cargando</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;
