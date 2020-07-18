import React from "react";

const Config = () => {
  return (
    <div className="container-config">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">
            <ion-icon name="settings-outline"></ion-icon> App Configuration{" "}
          </h1>
        </div>
      </div>
      <div className="container-card">
        <ul className="list-group">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Morbi leo risus</li>
          <li className="list-group-item">Porta ac consectetur ac</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
    </div>
  );
};
export default Config;
