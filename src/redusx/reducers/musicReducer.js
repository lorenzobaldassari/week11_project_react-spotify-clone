import { PLAY_MUSIC } from "../action";

const initialState = {
  content: {
    title:``,
    artist:``,
    id:``
    
  },
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_MUSIC:
      return {...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default musicReducer;
