import React, { useState } from 'react';
import LeftNav from '../LeftNav';
import { useDispatch, useSelector } from 'react-redux';
import Uploadimg from './Uploadimg';
import { updateBio } from '../../actions/user.actions';
import { dateParser } from '../Utils';
import FollowHandler from './FollowHandler';

const UpdateProfil = () => {
    const userData = useSelector((state) => state.userReducer);
    const usersData = useSelector((state) => state.usersReducer);
    const error = useSelector((state) => state.errorReducer.userError)
    const [bio, setBio]= useState(''); 
    const [updateForm, setUpdateForm]= useState(false); 
    const dispatch= useDispatch();
    const [followingPopUp, setFollowingPopUp] = useState(false);
    const [followersPopUp, setFollowersPopUp] = useState(false);

    const handleUpdate = () => {
        dispatch(updateBio(userData._id, bio));
        setUpdateForm(false);
    };

    return (
      <div className="profil-container">
        <LeftNav />
        <h1>Voilà ton profil enfoiré de {userData.pseudo}</h1>
        <div className="update-container">
          <div className="left-part">
            <h3>Ta Ganache</h3>
            <img src={userData.picture} alt="photo_profil" />
            <Uploadimg />
            <p>{error.maxSize}</p>
            <p>{error.format}</p>
          </div>
          <div className="right-part">
            <div className="bio-update">
              <h3>Raconte ta vie mais fais court stp</h3>
              {updateForm === false && (
                <>
                  <p onClick={() => setUpdateForm(!updateForm)}>
                    {userData.bio}
                  </p>
                  <button onClick={() => setUpdateForm(!updateForm)}>
                    Change-nous ça et vite
                  </button>
                </>
              )}
              {updateForm && (
                <>
                  <textarea
                    type="text"
                    defaultValue={userData.bio}
                    onChange={(e) => setBio(e.target.value)}
                  ></textarea>
                  <button onClick={handleUpdate}>Azy poste ta modif</button>
                </>
              )}
            </div>
            <h4>
              Pilote dans notre écurie depuis le{" "}
              {dateParser(userData.createdAt)}
            </h4>
            <h5 onClick={(e) => setFollowingPopUp(true)}>
              Abo :{" "}
              {userData.following ? userData.following.length : ""}
            </h5>
            <h5 onClick={(e) => setFollowersPopUp(true)}>
              Followers : {userData.followers ? userData.followers.length : ""}
            </h5>
          </div>
        </div>
        {followingPopUp && (
          <div className="popup-profil-container">
            <div className="modal">
              <h3>Ceux que tu suces</h3>
              <span className="cross" onClick={(e) => setFollowingPopUp(false)}>
                &#10005;
              </span>
              <ul>
                {usersData.map((user) => {
                  for (let i = 0; i < userData.following.length; i++) {
                    if (user._id === userData.following[i]) {
                      return (
                        <li key={user._id}>
                          <img src={user.picture} alt="user-pic" />
                          <h4>{user.pseudo}</h4>
                          <div className="follow-handler">
                            <FollowHandler
                              idToFollow={user._id}
                              type={"suggestion"}
                            />
                          </div>
                        </li>
                      );
                    }
                  } return null
                })}
              </ul>
            </div>
          </div>
        )}
        {followersPopUp && (
          <div className="popup-profil-container">
            <div className="modal">
              <h3>Tes suceurs</h3>
              <span className="cross" onClick={(e) => setFollowersPopUp(false)}>
                &#10005;
              </span>
              <ul>
                {usersData.map((user) => {
                  for (let i = 0; i < userData.followers.length; i++) {
                    if (user._id === userData.followers[i]) {
                      return (
                        <li key={user._id}>
                          <img src={user.picture} alt="user-pic" />
                          <h4>{user.pseudo}</h4>
                          <div className="follow-handler">
                            <FollowHandler 
                              idToFollow={user._id} 
                              type={"suggestion"} />
                          </div>
                        </li>
                      );
                    } 
                  } return null;
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
};

export default UpdateProfil;