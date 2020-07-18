import React, { useCallback, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Messages = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container-message">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Messages Information</h1>
          <p className="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </div>
      </div>
      <div className="container-card">
        {!!store.users ? (
          store.users.map((user,i) => {
            return (
                <div className="card" key={i}>
                <h5 className="card-header">{user.email}</h5>
                <div className="card-body">
                  <h5 className="card-title">{user.last_name} {user.first_name}</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <Link to={"/messages/"+user.last_name} className="btn btn-primary">view message...</Link>
                </div>
              </div>
            );
          })
        ) : (
          <h1>No Messages...</h1>
        )}
      </div>
    </div>
  );
};

export default Messages;
