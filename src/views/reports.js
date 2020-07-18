import React, { useCallback, useContext } from "react";
import { Context } from "../store/appContext";

const Reports = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container-report">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Reports Information</h1>
          <p className="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </div>
      </div>
      <div className="container-card">
        <div className="list-group">
          {!!store.users ? (
            store.users.map((user,i) => {
              return (
                <a
                  href="#"
                  className="list-group-item list-group-item-action flex-column align-items-start"
                  key={i}
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Report: #{user.id}</h5>
                    <small>3 days ago</small>
                  </div>
                  <p className="mb-1">
                    Donec id elit non mi porta gravida at eget metus. Maecenas
                    sed diam eget risus varius blandit.
                  </p>
                  <small>Donec id elit non mi porta.</small>
                </a>
              );
            })
          ) : (
            <a
            href="#"
            className="list-group-item list-group-item-action flex-column align-items-start"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">...Cargando</h5>
              <small className="text-muted">..cargando</small>
            </div>
            <p className="mb-1">
              ...Cargando
            </p>
            <small className="text-muted">...Cargando</small>
          </a>
          )}
        </div>
      </div>
    </div>
  );
};
export default Reports;
