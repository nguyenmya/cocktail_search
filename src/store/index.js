import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import cockTailReducer from "../container/CockTaik/modules/reducers"


// import QuanLyPhimReducer from "components/HomeMovie/module/reducer"
const rootReducer = combineReducers({

cockTailReducer,
  
});

const store = createStore(
  rootReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  composeWithDevTools(applyMiddleware(thunk))
  // applyMiddleware(thunk)
);

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default store;

// lấy danh sách người dùng
//
