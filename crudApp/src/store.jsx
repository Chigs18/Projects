import { createStore,applyMiddleware } from "redux";
import rootReducer from './reducres/index'
import thunk from "redux-thunk";

// npm i redux
// npm i react-redux
// npm i redux-thunk
const store = createStore(rootReducer,applyMiddleware(thunk))
export default store;