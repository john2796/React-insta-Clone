import axios from "axios";
import {
  ADD_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  GET_COMMENT,
  COMMENT_ERRORS
} from "./types";

const URL = "http://localhost:5000/api/insta/";
export const getInstaComments = () => dispatch => {
  axios
    .get(URL)
    .then(({ data: { comments } }) =>
      dispatch({
        type: GET_COMMENT,
        comments
      })
    )
    .catch(err => dispatch({ type: COMMENT_ERRORS, err }));
};

export const addInstaComments = (id, newData) => {
  axios.post(`${URL}${id}`);
  return {
    type: ADD_COMMENT,
    newData
  };
};

export const getErrors = () => {
  return {
    type: COMMENT_ERRORS
  };
};
