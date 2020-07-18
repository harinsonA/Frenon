import React,{useCallback,useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext"
import Select from 'react-select';

const NavbarTop = () => {
  const [state,setState] = useState([])
  const { store, actions } = useContext(Context);

  useEffect(()=>{    
  if (store.hotels) {
    const values = store.hotels.map((hotel)=> {return {value:hotel.id , label: hotel.name}})
  setState(values)
  }
  },[store.hotels])

  


  return (
    <>
      <nav className="navbar">
        <div className="navbar-nav mr-auto">
          <div className="nav-item active">
            <a className="nav-link" href="#">
              Dashboard
              <span className="sr-only"></span>
            </a>
          </div>
        </div>
        <form className=" form-inline">
          <Select
          className="basic-single mr-4"
          isSearchable={true}
          options={state}
          
        />
          <div
            type="submit"
          >
            <ion-icon name="search-outline"></ion-icon>
          </div>
          <div className="nav-item">
            <Link className="nav-link" to="/messages">              
              <ion-icon name="mail-unread-outline"></ion-icon>
            </Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link" to="/setting">
            <ion-icon name="settings-outline"></ion-icon>
            </Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link" to="/graphics">
            <ion-icon name="bar-chart-outline"></ion-icon>
            </Link>
          </div>
        </form>
      </nav>
    </>
  );
};

export default NavbarTop;
