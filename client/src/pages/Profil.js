import React, {useContext} from 'react';
import Log from '../components/Log';
import { UidContext } from "../components/AppContext";
import UpdateProfil from '../components/Profil/UpdateProfil';
import HeadStains from '../components/Stains/HeadStains';
import FootStains from '../components/Stains/FootStains';

const Profil = () => {
    const uid = useContext(UidContext);
    return (
      <div className="profil-complete">
        <HeadStains/>
        <div className="profil-page">
          {uid ? (
            <UpdateProfil />
          ) : (
            <div className="log-container">
              <Log signin={false} signup={true} />
            </div>
          )}
        </div>

        <FootStains />
      </div>
    );
};

export default Profil;