import { configureStore } from "@reduxjs/toolkit";
import authorization from "./Authorization";
import profile from "./Profile";
import teachers from "./Teachers";
import darkness from "./darkness";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import Teacher from "./Teacher";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const RootReducers = combineReducers({
  auth: authorization,
  darkness: darkness,
  profile:profile,
  teachers:teachers,
  teacher:Teacher,

});

const persistedReducer = persistReducer(persistConfig, RootReducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
