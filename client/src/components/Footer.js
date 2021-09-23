import { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UidContext } from "./AppContext";
import stain from "../styles/assets/img/logo_les_artistes.png";
import FootStains from "../components/Stains/FootStains";

const Footer = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);

  return (
    <>
      <FootStains />
      <div id="footer-nav">
        <div className="footer-container">
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
              <li className="see-you">
                <h6>Alors ?</h6>
                <NavLink exact to="/profil">
                  <h5>{userData.pseudo}</h5>
                </NavLink>
                <h6>, qu'en penses-tu ?</h6>
              </li>
            </ul>
          ) : (
            <ul>
              <li></li>
              <li className="see-you"></li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Footer;
