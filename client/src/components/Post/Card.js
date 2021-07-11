import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePost } from '../../actions/post.actions';
import FollowHandler from '../Profil/FollowHandler';
import { isEmpty, dateParser } from '../Utils';
import CardComments from './CardComments';
import DeleteCard from './DeleteCard';
import LikeButton from './LikeButton';

const Card = ({post}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isUpdated, setIsUpdated] = useState(false);
    const [textUpdate, setTextUpdate] = useState(null);
    const [showComments, setShowComments] = useState(false);
    const [imgComment, setImgComment] = useState('./img/icons/comments.png');
    const [imgBalance, setImgBalance] = useState('./img/icons/balance_btn.png');
    const [imgBrushText, setImgBrushText] = useState('./img/brush_textarea_user.png');
    const userData = useSelector((state) => state.userReducer);
    const usersData = useSelector((state) => state.usersReducer);
    const dispatch = useDispatch();
    const cardFooter = document.getElementsByClassName('card-footer');

    const upDateItem = () => {
      if (textUpdate) {
        dispatch(updatePost(post._id, textUpdate))
      }
      setIsUpdated(false)
    }

    useEffect(() => {
        !isEmpty(usersData[0]) && setIsLoading(false);
    }, [usersData]);

    return (
      <div className="card-complete">
        <li className="card-container" key={post._id}>
          {isLoading ? (
            <i className="fas fa-spinner fa-spin"></i>
          ) : (
            <>
              <div className="card-left">
                <img
                  src={
                    !isEmpty(usersData[0]) &&
                    usersData
                      .map((user) => {
                        if (user._id === post.posterId) return user.picture;
                        else return null;
                      })
                      .join("")
                  }
                  alt="poster-pic"
                  className="poster_pic"
                />
                <img
                  src="./img/cadre_brush.png"
                  alt="cadre"
                  className="cadre"
                />

                {userData._id === post.posterId && (
                  <div className="button-container">
                    <div onClick={() => setIsUpdated(!isUpdated)}>
                      <img
                        src="./img/icons/marker.png"
                        alt="edit"
                        id="marker"
                      />
                    </div>
                    <DeleteCard id={post._id} />
                  </div>
                )}
              </div>
              <div className="card-right">
                <div className="card-header">
                  <div className="pseudo">
                    <h3>
                      {!isEmpty(usersData[0]) &&
                        usersData
                          .map((user) => {
                            if (user._id === post.posterId) return user.pseudo;
                            else return null;
                          })
                          .join("")}
                    </h3>
                    {post.posterId !== userData._id && (
                      <FollowHandler idToFollow={post.posterId} type={"card"} />
                    )}
                  </div>
                  <span>{dateParser(post.createdAt)}</span>
                </div>
                {isUpdated === false && (
                  <div className="message-complete">
                    <img
                      src="./img/stain_text.png"
                      alt="stain-text"
                      id="stain_text"
                    />
                    <div className="message">
                      <p>{post.message}</p>
                    </div>
                  </div>
                )}
                {isUpdated && (
                  <div className="update-post">
                    <img src={imgBrushText} alt="brush-text" id="brush-text"/>
                    <textarea
                      defaultValue={post.message}
                      onChange={(e) => setTextUpdate(e.target.value)}
                      onFocus={(e) => setImgBrushText('./img/brush_textarea.png')}
                    />
                    <div className="button-container">
                      <div className="btn" onClick={upDateItem}>
                        Modifie nous ça !!!
                      </div>
                    </div>
                  </div>
                )}

                {(isUpdated && post.picture || isUpdated && !post.picture) ? (
                  <>
                    <div className="update-post-picture">
                      <img
                        src={post.picture}
                        alt="card-pic"
                        className="card-pic"
                      />
                    </div>
                    <img
                      src="./img/cadre_brush.png"
                      alt="cadre"
                      className="update-cadre"
                    />
                  </>
                ) : post.picture ? (
                  <>
                    <div className="post-picture">
                      <img
                        src={post.picture}
                        alt="card-pic"
                        className="card-pic"
                      />
                    </div>
                    <img
                      src="./img/cadre_brush_orange.png"
                      alt="cadre"
                      className="cadre"
                    />
                  </>
                ) : (
                  <>
                    <div className="post-picture"></div>
                    <img
                      src="./img/cadre_brush_blanc.png"
                      alt="cadre"
                      className="cadre"
                    />
                  </>
                )}

                {post.video && (
                  <div className="post-video">
                    <iframe
                      width="500"
                      height="300"
                      src={post.video}
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={post._id}
                    ></iframe>
                    <img
                      src="./img/cadre_brush_orange.png"
                      alt="cadre"
                      className="cadre"
                    />
                  </div>
                )}

                <div className="card-footer" style={{ marginBottom: "120" }}>
                  <div
                    className="comment-icon"
                    onMouseEnter={() =>
                      setImgComment("./img/icons/comments_hover.png")
                    }
                    onMouseLeave={() =>
                      setImgComment("./img/icons/comments.png")
                    }
                  >
                    <img
                      onClick={() => setShowComments(!showComments)}
                      src={imgComment}
                      alt="comment"
                    />
                    <span>{post.comments.length}</span>
                  </div>
                  <LikeButton post={post} />
                  <img src="./img/icons/share.svg" alt="share" />
                </div>
                {showComments && <CardComments post={post} />}
              </div>
            </>
          )}
        </li>
      </div>
    );
};

export default Card;