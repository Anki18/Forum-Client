import axios from "axios";

export const setAccessToken = data => {
    return {
        type: "SetAccessToken",
        payload: data
    };
};

export const setUserDetails = details => {
    return {
        type: "SetUserDetails",
        payload: details
    };
}
export const login = cred => {
    return dispatch => {
        axios.request({
            method: 'post',
            url: 'http://localhost:3000/api/users/login',
            data: cred
        }).then(response => {
            localStorage.setItem("LoginResponse", JSON.stringify(response.data));
            dispatch(setAccessToken(response.data));
        }).catch(err =>
            console.log(err)
        );
    }
}

export const getUserDetails = (userId, accessToken) => {
    return dispatch => {
        axios.request({
            method: 'get',
            url: `http://localhost:3000/api/users/${userId}?access_token=${accessToken}`
        }).then(response => {
            localStorage.setItem("UserDetails", JSON.stringify(response.data));
            dispatch(setUserDetails(response.data));
        }).catch(err =>
            console.log(err)
        );
    }
}