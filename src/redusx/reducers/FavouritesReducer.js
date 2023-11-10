import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from "../action";

const initialState = {
  content: [],
};

const FavouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        content: state.content.filter((elem) => elem.obj.id !== action.payload),
      };
    default:
      return state;
  }
};

export default FavouriteReducer;
