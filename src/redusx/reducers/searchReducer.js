import { ADD_TO_SEARCH } from "../action";

const initialState = {
  content: {
    search:""
    
  },
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_SEARCH:
      return {
        content: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
