import React, { useCallback, useContext } from "react";
import { Context } from "../../store/appContext";

const MessageDetails = (props) => {
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
          store.users.map((user, i) => {
            if (props.match.params.name == user.last_name) {
              return (
                <div className="card" key={i}>
                  <div className="card-header">name: {user.last_name} {user.first_name}</div>
                  <div className="card-body">
                    <h5 className="card-title">
                      From: {user.email}
                    </h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent ut iaculis velit, egestas iaculis diam. Fusce id
                      nulla porttitor, aliquam nulla ac, facilisis dui.
                      Pellentesque libero libero, rutrum at dui at, malesuada
                      finibus enim. Vivamus venenatis libero sed mattis dapibus.
                      Vivamus nec molestie lacus, at pretium enim. Nullam non
                      enim magna. Curabitur porttitor elit ut tristique
                      tincidunt. Aliquam aliquam ante quam, sed ultricies sem
                      commodo ut. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Nulla nec bibendum dui. Maecenas molestie
                      euismod maximus. Mauris a sem est. Vestibulum quis urna ac
                      orci consequat ullamcorper. Vivamus vitae pharetra magna,
                      pharetra commodo est. Nulla eleifend blandit ex eget
                      ornare. Praesent pretium metus at interdum laoreet. Nunc
                      magna urna, vulputate vitae pulvinar non, facilisis vitae
                      mauris. Praesent eu volutpat arcu, ac tempus lacus. Nam
                      gravida, libero eget molestie aliquet, nulla urna
                      consectetur est, id fringilla diam turpis in velit.
                      Vivamus vel justo a lectus consectetur vulputate in sed
                      ligula. Nullam pellentesque eget odio quis malesuada.
                      Nulla ac pharetra dolor. Praesent pulvinar congue lacus in
                      vulputate. Integer tempus ligula augue, non ornare sapien
                      accumsan eu. Fusce varius vehicula leo, a laoreet odio
                      luctus et. Ut accumsan ultrices dui, fringilla euismod
                      nibh maximus et. Fusce sollicitudin magna est, et
                      scelerisque tellus elementum a. Nullam congue molestie
                      turpis vitae malesuada. Sed quis molestie odio. Quisque ac
                      ullamcorper diam. Aliquam arcu ex, viverra et eleifend et,
                      tempor sed eros. Sed cursus ante id sapien tristique, sed
                      efficitur nisl bibendum. Sed congue arcu non felis commodo
                      sagittis. In nec aliquam purus, id condimentum lorem.
                      Curabitur hendrerit lorem et dictum elementum. Curabitur
                      varius libero id auctor cursus. Maecenas sed metus tempor,
                      mattis diam sit amet, fermentum est. Integer lobortis odio
                      non massa molestie, quis blandit nunc vestibulum.
                    </p>
                  </div>
                  <div className="card-footer text-center text-muted">
                    2 days ago
                  </div>
                </div>
              );
            }
          })
        ) : (
          <> </>
        )}
      </div>
    </div>
  );
};

export default MessageDetails;
