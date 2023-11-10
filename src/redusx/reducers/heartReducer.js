import { ADD_TO_PERF, PLAY_MUSIC, REMOVE_FROM_PREF } from "../action";

const initialState = {
  content: []
};

const heartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PERF:
      return {
        content:[...state.content,(action.payload)],
      };
    case REMOVE_FROM_PREF:
      return {...state,
        
        content: state.content.filter((elem)=>{return elem!==action.payload})
      };
    default:
      return state;
  }
};

export default heartReducer;
