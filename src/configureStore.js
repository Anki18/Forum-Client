import thunkMiddleware from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { routerMiddleware } from 'react-router-redux';
import{composeWithDevTools} from 'redux-devtools-extension';

import allReducers from './reducers';


export default function configureStore() {
    return createStore(
      allReducers,
      composeWithDevTools(
        applyMiddleware(thunkMiddleware)
      )
    );
  }

// export default function configureStore() {
//   return createStore(
//     allReducers,
//     applyMiddleware(thunkMiddleware)
//   );
// }