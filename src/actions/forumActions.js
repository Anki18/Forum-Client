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
const receivedAllThreads = data =>{
    return{
        type: "ReceivedAllThreads",
        payload: data
    }
}
export const clearToInitialState = () =>{
    return {
        type:"ClearToInitialState"
    }
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
            dispatch(getUserDetails(response.data.userId, response.data.id));
        }).catch(err =>
            console.log(err)
        );
    }
}
export const postQuestion = (accessToken,request) => {
    return dispatch => {
        axios.request({
            method: 'post',
            url: `http://localhost:3000/api/threads?access_token=${accessToken}`,
            data: request
        }).then(response => {

        }).catch(err =>
            console.log(err)
        );
    }
}

export const logout =() =>{
    return dispatch =>{
        localStorage.removeItem("LoginResponse");
        localStorage.removeItem("UserDetails");
        dispatch(clearToInitialState());
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

export const fetchAllThreads = (accessToken) => {
    return dispatch => {
        axios.request({
            method: 'get',
            url: `http://localhost:3000/api/threads?access_token=${accessToken}`
        }).then(response => {
            localStorage.setItem("UserDetails", JSON.stringify(response.data));
            dispatch(receivedAllThreads(response.data));
        }).catch(err =>
            console.log(err)
        );
    }
}