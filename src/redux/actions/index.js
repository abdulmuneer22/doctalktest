import api from "../api";
import { RECEIVED_USER_SUGGESTIONS, GET_USER_SUGGESTIONS_FAILED } from "./type";

export const SearchUsers = username => {
  return dispatch => {
    api
      .search(username)
      .then(response => {
        dispatch({
          type: RECEIVED_USER_SUGGESTIONS,
          payload: response.data
        });
      })
      .catch(e => {
        dispatch({
          type: GET_USER_SUGGESTIONS_FAILED,
          payload: e
        });

        alert(e)
      });
  };
};
