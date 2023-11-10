import { combineReducers, configureStore } from "@reduxjs/toolkit";
import musicReducer from "../reducers/musicReducer";
import heartReducer from "../reducers/heartReducer";
import searchReducer from "../reducers/searchReducer";



const chiefReducer = combineReducers({
    stateMusic: musicReducer,
    songId:heartReducer,
    search: searchReducer
   
  });


const store = configureStore({
    reducer: chiefReducer,
  });

  export default store;
