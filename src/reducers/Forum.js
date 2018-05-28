var LoginResponse = JSON.parse(localStorage.getItem("LoginResponse"));
var UserDetails = JSON.parse(localStorage.getItem("UserDetails"));

export default function (
  state = {
    accessToken: LoginResponse ? LoginResponse.id : "",
    userId: LoginResponse ? LoginResponse.userId : "",
    username: UserDetails ? UserDetails.username : "",
    email: UserDetails ? UserDetails.email : ""
  },
  action
) {
  switch (action.type) {
    case "SetAccessToken":
      return Object.assign({}, state, {
        accessToken: action.payload.id,
        userId: action.payload.userId
      });
    case "SetUserDetails":
      return Object.assign({}, state, {
        username: action.payload.username,
        email: action.payload.email
      });
    default:
      break;
  }
  return state;
}