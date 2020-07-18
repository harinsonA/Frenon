import React from "react";

const Navigation = () => {
  return (
    <>
      <div className="nav justify-content-between">
        <div className="nav-item d-flex">
          <div className="icon">
            <ion-icon name="mail-open-outline"></ion-icon>
          </div>
          <div className="text">
            <h4>Notificaciones</h4>
            <h4>is simply dum</h4>
          </div>
        </div>
        <div className="nav-item d-flex">
          <div className="icon">
            <ion-icon name="bed-outline"></ion-icon>
          </div>
          <div className="text">
            <h4>Hoteles</h4>
            <h4>is simply dum</h4>
          </div>
        </div>
        <div className="nav-item d-flex">
          <div className="icon">
            <ion-icon name="card-outline"></ion-icon>
          </div>
          <div className="text">
            <h4>Pagos Recibidos</h4>
            <h4>is simply dum</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
