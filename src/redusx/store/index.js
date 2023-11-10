import { combineReducers, configureStore } from "@reduxjs/toolkit";
import musicReducer from "../reducers/musicReducer";
import heartReducer from "../reducers/heartReducer";



const chiefReducer = combineReducers({
    stateMusic: musicReducer,
    songId:heartReducer
   
  });


const store = configureStore({
    reducer: chiefReducer,
  });

  export default store;
