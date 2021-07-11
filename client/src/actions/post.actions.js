import axios from "axios";

//posts
export const GET_POSTS = "GET_POSTS";
export const GET_ALL_POSTS = "GET_ALL_POSTS";
export const ADD_POST = "ADD_POST";
export const LIKE_POST = "LIKE_POST";
export const UNLIKE_POST = "UNLIKE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";

//comments
export const ADD_COMMENT = "ADD_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

//errors
export const GET_POST_ERRORS = "GET_POST_ERRORS";

//trends
export const GET_TRENDS = "GET_TRENDS";


export const getPosts = (num) => {
    return (dispatch) => {
        return axios
        .get(`http://localhost:5000/api/post`)
        .then((res) => {
            const array = res.data.slice(0, num)
            dispatch({ type: GET_POSTS, payload: array})
            dispatch({ type: GET_ALL_POSTS, payload: res.data})
        })
        .catch((err) => console.log('Oulala tous les posts dans ton ' + err));
    };
};

export const addPost = (data) => {
    return (dispatch) => {
        return axios
          .post(`http://localhost:5000/api/post/`, data)
          .then((res) => {
              if (res.data.errors) {
                  dispatch({ type: GET_POST_ERRORS, payload: res.data.errors})
              } else {
                  dispatch({ type: GET_POST_ERRORS, payload: ''})
              }
          })
    };
};

export const likePost = (postId, userId) => {
    return (dispatch) => {
        return axios({
            method: "patch",
            url: `http://localhost:5000/api/post/like-post/` + postId,
            data: {id: userId}
        })            
        .then((res) => {
            dispatch({ type: LIKE_POST, payload: {postId, userId}})
        })
        .catch((err) => console.log('Cœur plein de merde ' + err))
    };
};

export const unlikePost = (postId, userId) => {
    return (dispatch) => {
        return axios({
            method: "patch",
            url: `http://localhost:5000/api/post/unlike-post/` + postId,
            data: {id: userId}
        })
        .then((res) => {
            dispatch({ type: UNLIKE_POST, payload: { postId, userId } });
        })
        .catch((err) => console.log('Cœur vide de merde ' + err))
    };
};

export const updatePost = (postId, message) => {
    return (dispatch) => {
        return axios({
            method: "put",
            url: `http://localhost:5000/api/post/` + postId,
            data: { message },
        })
        .then((res) => {
            dispatch({ type: UPDATE_POST, payload: { message, postId } });
        })
        .catch((err) => console.log('Ta modif tu peux te la fourrer ' + err));
    };
};

export const deletePost = (postId) => {
    return (dispatch) => {
        return axios({
          method: "delete",
          url: `http://localhost:5000/api/post/` + postId,
        })
        .then((res) => {
            dispatch({ type: DELETE_POST, payload: {postId}});
        })
        .catch((err) => console.log('Elle est profonde la suppression ' + err));

    };
};

export const addComment = (postId, commenterId, text, commenterPseudo) => {
    return (dispatch) => {
      return axios({
        method: "patch",
        url: `http://localhost:5000/api/post/comment-post/` + postId,
        data: { text, commenterId, commenterPseudo },
      })
        .then((res) => {
          dispatch({
            type: ADD_COMMENT,
            payload: { postId },
          });
        })
        .catch((err) => console.log("Ton new com tu peux l'enfouir dans " + err));
    };
}

export const editComment = (postId, commentId, text) => {
    return (dispatch) => {
      return axios({
        method: "patch",
        url: `http://localhost:5000/api/post/edit-comment-post/` + postId,
        data: { text, commentId },
      })
        .then((res) => {
          dispatch({
            type: EDIT_COMMENT,
            payload: { postId, commentId, text },
          });
        })
        .catch((err) => console.log("Ta modif, où veux-tu qu'on te l'introduise? " + err));
    };
};

export const deleteComment = (postId, commentId) => {
    return (dispatch) => {
      return axios({
        method: "patch",
        url: `http://localhost:5000/api/post/delete-comment-post/` + postId,
        data: { commentId },
      })
        .then((res) => {
          dispatch({
            type: DELETE_COMMENT,
            payload: { postId, commentId },
          });
        })
        .catch((err) => console.log("Ta suppression je pense que tu sais où tu te la mets à force " + err));
    };
};

export const getTrends = (sortedArray) => {
  return (dispatch) => {
    dispatch({ type: GET_TRENDS, payload: sortedArray})
  }
}