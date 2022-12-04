import { Storage } from "expo-storage";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userLoginReducer, userRegisterReducer } from "./Reducers/UserReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});
let userInfoFromLocalStorage;
const getUser = async () => {
  const user = await Storage.getItem({ key: "userInfo" });
  if (user != null) {
    return JSON.parse(user);
  } else {
    return null;
  }
};
if (getUser() != null) {
  userInfoFromLocalStorage = getUser();
} else {
  userInfoFromLocalStorage = null;
}

const initialState = {
  userLogin: {
    userInfo: userInfoFromLocalStorage,
  },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
