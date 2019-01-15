import { TOGGLE_LIKES, ADD_COMMENT } from "./types";

export const onToggleLikesHandler = (id, data) => {
  let newData = [...data];
  newData = newData.map(item => {
    if (item.id === id) {
      item.isLiked = !item.isLiked;
    }
    return item;
  });
  return {
    type: TOGGLE_LIKES,
    newData
  };
};

export const onAddHandler = (id, newText, userName) => {
  return {
    type: ADD_COMMENT,
    id,
    newText,
    userName
  };
};
