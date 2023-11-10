import { combineReducers, configureStore } from "@reduxjs/toolkit";
import musicReducer from "../reducers/musicReducer";
import heartReducer from "../reducers/heartReducer";
import searchReducer from "../reducers/searchReducer";
import FavouriteReducer from "../reducers/FavouritesReducer";

const chiefReducer = combineReducers({
  stateMusic: musicReducer,
  songId: heartReducer,
  search: searchReducer,
  favourite: FavouriteReducer,
});

const store = configureStore({
  reducer: chiefReducer,
});

export default store;
