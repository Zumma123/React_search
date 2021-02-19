import DATASET from "../data.json";


const SET_USERS = "SET_USERS";
const initialState = {
 users: DATASET
};

export const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.users };
    default:
      return state;
  }
};
