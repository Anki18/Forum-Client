import { combineReducers } from "redux";

import User from "./User";

const allReducers = combineReducers({
    User: User
});

export default allReducers;