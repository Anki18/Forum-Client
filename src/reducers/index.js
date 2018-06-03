import { combineReducers } from "redux";

import User from "./user";
import Threads from "./threads";

const allReducers = combineReducers({
    User: User,
    Threads: Threads
});

export default allReducers;