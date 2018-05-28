export default function(
    state = {
      accessToken: ""
    },
    action
  ) {
    switch (action.type) {
      case "SetAccessToken":
        return Object.assign({}, state, { accessToken : action.payload.id });
      default:
        break;
    }
    return state;
  }