import React from 'react';
import { NavLink } from 'react-router-dom';

const LeftNav = () => {
    return (
      <div className="left-nav-container">
        <div className="icons">
          <div className="icons-bis">
            <NavLink to="/" exact activeClassName="active-left-nav">
              <img
                src="./img/home.png"
                alt="home"
                id="left-nav-home"
                style={{ width: 40 }}
              />
            </NavLink>
            <br />
            <NavLink to="/trending" exact activeClassName="active-left-nav">
              <img
                src="./img/topFive.png"
                alt="top-five"
                id="left-nav-star"
                style={{ width: 44, right:10}}
              />
            </NavLink>
            <br />
            <NavLink to="/profil" exact activeClassName="active-left-nav">
              <img
                src="./img/profil.png"
                alt="profil"
                id="left-nav-profil"
                style={{ width: 32 }}
              />
            </NavLink>
          </div>
        </div>
      </div>
    );
};

export default LeftNav;