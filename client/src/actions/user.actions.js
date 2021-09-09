import axios from 'axios';

export const GET_USER = "GET_USER";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";
export const UPDATE_BIO = "UPDATE_BIO";
export const FOLLOW_USER = "FOLLOW_USER";
export const UNFOLLOW_USER = "UNFOLLOW_USER";

export const GET_USER_ERRORS = "GET_USER_ERRORS";

export const getUser = (uid) => {
    return (dispatch) => {
        return  axios
        .get(`http://localhost:5000/api/user/${uid}`)
        .then((res) => {
            dispatch({ type: GET_USER, payload: res.data});
        })
        .catch((err)=> console.log('Get-user-error' + err));
    };
};

export const uploadPicture = (data, id) => {
    return(dispatch) => {
       return axios
       .post(`http://localhost:5000/api/user/upload`, data)
       .then((res) => {
           if (res.data.errors) {
               dispatch({ type: GET_USER_ERRORS, payload: res.data.errors})
           } else {

             return axios
               .get(`http://localhost:5000/api/user/${id}`)
               .then((res) => {
                 dispatch({ type: UPLOAD_PICTURE, payload: res.data.picture });
               });
           }
       })
       .catch((err) => {console.log("Upload-picture-error " + err)}); 
    };
};

export const updateBio = (id, bio) => {
    return(dispatch) => {
        return axios
            .put(`http://localhost:5000/api/user/${id}`, bio)
            .then((res) => {
                dispatch({ type: UPDATE_BIO, payload: bio });
            })
            .catch((err) => {
            console.log("Update-bio-error " + err);
            });
    };
};

export const followUser = (followerId, idToFollow) => {
    return (dispatch) => {
        return axios({
            method: "patch",
            url: `http://localhost:5000/api/user/follow/`+ followerId,
            data: { idToFollow },
        })
            .then((res) => {
                dispatch({ type: FOLLOW_USER, payload: {idToFollow}});
            })
            .catch((err) => console.log("Follow-user-error" + err));
        
    }
}

export const unfollowUser = (followerId, idToUnFollow) => {
    return (dispatch) => {
      return axios({
        method: "patch",
        url: `http://localhost:5000/api/user/unfollow/` + followerId,
        data: { idToUnFollow },
      })
        .then((res) => {
          dispatch({ type: UNFOLLOW_USER, payload: { idToUnFollow } });
        })
        .catch((err) => console.log("Unfollow-user-error" + err));
        
    };
}