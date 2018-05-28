import axios from "axios";

export const setAccessToken = accessToken => {
    return {
        type: "SetAccessToken",
        payload: accessToken
    };
};

export const login = cred => {
    return dispatch => {
        axios.request({
            method: 'post',
            url: 'http://localhost:3000/api/users/login',
            data: cred
        }).then(response => {
            dispatch(setAccessToken(response.data));
        }).catch(err =>
            console.log(err)
        );
    }
}