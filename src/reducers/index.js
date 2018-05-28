import { combineReducers } from "redux";

import Forum from "./Forum";

const allReducers = combineReducers({
    Forum: Forum
});

export default allReducers;