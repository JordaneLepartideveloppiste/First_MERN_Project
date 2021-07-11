import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { UidContext } from "./AppContext";
import Login from './Log/Login';
import LogOut from './Log/LogOut';


const Navbar = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer)

    return (
      <nav>
        <div className="nav-container">
          <div className="logo">
            <NavLink exact to="/">
              <div className="logo">
                <img src="./img/balance_orange.png" alt="icone" />
                <h3>BALANCE</h3>
              </div>
            </NavLink>
          </div>
          {uid ? (
            <ul>
              <li></li>
              <li className="welcome">
                <h6>Bienvenue mon poto</h6>
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