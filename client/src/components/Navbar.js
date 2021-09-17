import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { UidContext } from "./AppContext";
import Login from './Log/Login';
import LogOut from './Log/LogOut';
import stain from "../styles/assets/img/logo_les_artistes.png";


const Navbar = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer)

    return (
      <nav>
        <div className="nav-container">
          <div className="logo">
            <NavLink exact to="/">
              <div className="logo">
                <img src={stain} alt="icone" />
                <h3>LES ARTISTES</h3>
              </div>
            </NavLink>
          </div>
          {uid ? (
            <ul>
              <li></li>
              <li className="welcome">
                <h6>Bienvenue</h6>
                <NavLink exact to="/profil">
                  <h5>{userData.pseudo}</h5>
                </NavLink>
              </li>
              <LogOut />
            </ul>
          ) : (
            <ul>
              <li></li>
              <li className="welcome">
                <NavLink exact to="/profil">
                  <Login />
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </nav>
    );
};

export default Navbar;