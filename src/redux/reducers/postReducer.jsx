import { GET_POSTS } from "../types";

const initialState = {
  postsByUserId: {} // Structure: { 1: [posts...], 2: [posts...] }
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        postsByUserId: {
          ...state.postsByUserId,
          [action.payload.userId]: action.payload.posts
        }
      };
    default:
      return state;
  }
};

export default postReducer;