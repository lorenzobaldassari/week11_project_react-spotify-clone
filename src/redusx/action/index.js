export const PLAY_MUSIC = "PLAY_MUSIC";
export const ADD_TO_PERF = "ADD_TO_PERF";
export const REMOVE_FROM_PREF = "REMOVE_FROM_PREF";
export const ADD_TO_SEARCH = "ADD_TO_SEARCH";
export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";

export const setPlayMusicAction = (par) => {
  return {
    type: PLAY_MUSIC,
    payload: par,
  };
};
export const addToPrefAction = (par) => {
  return {
    type: ADD_TO_PERF,
    payload: par,
  };
};
export const removeFromPrefAction = (par) => {
  return {
    type: REMOVE_FROM_PREF,
    payload: par,
  };
};
export const addToSearchAction = (par) => {
  return {
    type: ADD_TO_SEARCH,
    payload: par,
  };
};
export const addToFavouritesAction = (par) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: par,
  };
};
export const removeFromFavouritesAction = (par) => {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload: par,
  };
};
