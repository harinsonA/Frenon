import React, { useCallback, useContext } from "react";
import { Context } from "../store/appContext";

const Calendar = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container-calendar">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Calendar Information</h1>
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
                <div className="card-header">Fecha: {user.id} Abril</div>
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    See More...
                  </a>
                </div>
              </div>
            );
          })
        ) : (
          <div className="card">
            <div className="card-header">Fecha: ...Cargando</div>
            <div className="card-body">
              <h5 className="card-title">...Cargando</h5>
              <p className="card-text">...Cargando</p>
              <a href="#" className="btn btn-primary">
                See More...
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar;
