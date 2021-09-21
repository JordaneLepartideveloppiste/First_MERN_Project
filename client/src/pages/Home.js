import React, { useContext, useEffect, useState } from 'react';
import { UidContext } from '../components/AppContext';
import Log from '../components/Log';
import ModalNewPost from '../components/Modal/ModalNewPost';
import NewPostForm from '../components/Post/NewPostForm';
import FriendsHint from '../components/Profil/FriendsHint';
import FootStains from '../components/Stains/FootStains';
import HeadStains from '../components/Stains/HeadStains';
import Thread from '../components/Thread';
import Trends from '../components/Trends';

const Home = () => {
const uid = useContext(UidContext);
const [actualWidth, setActualWidth] = useState(window.innerWidth);
const [modalNewPost, setModalNewPost] = useState(false);

useEffect(() => {
  const updateActualWidth = () => {
    let w = window;
    let width = w.innerWidth;
    setActualWidth(width);
  };
  window.addEventListener("resize", updateActualWidth);
  updateActualWidth();
  console.log(actualWidth);
}, []);

    return (
      <div className="home-complete">
        <HeadStains />
        <div className="home-page">
          <div className="main">
            <div className="home-header">
              {uid ? (
                actualWidth < 481 ? (
                  <button
                    id="modal-post-480"
                    onClick={() => {
                      setModalNewPost(true);
                    }}
                  >
                    S'exprimer
                  </button>
                ) : (
                  <NewPostForm actualWidth={actualWidth} />
                )
              ) : (
                actualWidth > 480 ? <Log signin={true} signup={false} /> : null
              )}
            </div>
            <Thread />
          </div>
          <div className="right-side">
            <div className="right-side-container">
              <div className="wrapper">
                <Trends />
                {uid && <FriendsHint />}
              </div>
            </div>
          </div>
        </div>
        {modalNewPost && (
          <ModalNewPost
            setModalNewPost={setModalNewPost}
            actualWidth={actualWidth}
          />
        )}
        <FootStains />
      </div>
    );
};

export default Home;