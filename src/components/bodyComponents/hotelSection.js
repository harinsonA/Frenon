import React, { useCallback, useContext } from "react";
import { Context } from "../../store/appContext";

const HotelSection = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="hotel-section">
      <div className="title">
        <h2>Hoteles Disponibles</h2>
      </div>
      <div className="main-reserva">
        <div className="row">
          {!!store.hotels ? (
            store.hotels.map((hotel,i) => {
              return (
                <div className="col-4" key={i}>
                  <div className="card bg-dark text-white">
                    <img
                      className="card-img"
                      src={hotel.img}
                      alt="Card image"
                    />
                    <div className="card-img-overlay">
                      <h5 className="card-title">{hotel.name}</h5>
                      <a href="#" className="btn ">
                      Reserva
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h1>...Cargando</h1>
          )}
        </div>
      </div>
    </div>
  );
};
export default HotelSection;
