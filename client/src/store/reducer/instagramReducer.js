import data from "../../dummyData";
import { TOGGLE_LIKES, ADD_COMMENT } from "../action/types";
import uuid from "uuid";
const initialState = {
  data
};

export default function instagramReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LIKES:
      return {
        ...state,
        data: action.newData
      };
    case ADD_COMMENT:
      const newComment = state.data.map(post => {
        if (post.id === action.id) {
          post.comments.push({
            text: action.newText,
            username: post.username
          });
        }
        return post;
      });
      return {
        ...state,
        data: newComment
      };
    default:
      return state;
  }
}
