export const PLAY_MUSIC = "PLAY_MUSIC";
export const ADD_TO_PERF = "ADD_TO_PERF";
export const REMOVE_FROM_PREF = "REMOVE_FROM_PREF";
export const ADD_TO_SEARCH = "ADD_TO_SEARCH";

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
