import React from "react";
import { useCallback, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Aside = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="notification-aside">
      <div className="title">
        <h2>Notificaciones</h2>
      </div>

      {!!store.users ? (
        store.users.map((user, i) => {
          return (            
            <div className="card" key={i}>
              <Link className="link" to={"/messages/"+user.last_name}>
              <div className="card-body">
                <div className=" header d-flex justify-content-between">
                  <ion-icon name="mail-open-outline"></ion-icon>
                  <h4>02 abril</h4>
                </div>
                <h4>
                  {user.last_name} {user.first_name}
                </h4>
                <p>It is a long established fact that a reader will</p>
              </div>
              </Link>             
            </div>
          );
        })
      ) : (
        <div className="card">
          <div className="card-body">
            <div className=" header d-flex justify-content-between">
              <ion-icon name="mail-open-outline"></ion-icon>
              <h4>...Cargando</h4>
            </div>
            <h4>...Cargando</h4>
            <p>...Cargando</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Aside;
