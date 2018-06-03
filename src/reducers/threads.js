var LoginResponse = JSON.parse(localStorage.getItem("LoginResponse"));
var UserDetails = JSON.parse(localStorage.getItem("UserDetails"));
const initialState = {
  threads:[] 
}
export default function (
  state = {
    threads:[]
  },
  action
) {
  switch (action.type) {
    case "ReceivedAllThreads":
      return Object.assign({}, state, {
        threads: action.payload
      });
      case "ClearToInitialState": {
        return (state = JSON.parse(JSON.stringify(initialState)));
      }
    default:
      break;
  }
  return state;
}