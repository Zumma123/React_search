import firebase from "firebase";

const SET_DATA_USERS = "SET_DATA_USERS";
const initialState = {
  dataUsers: [],
};

export const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_USERS:
      return { ...state, dataUsers: action.dataUsers };
    default:
      return state;
  }
};

const SetUsers = (dataUsers) => ({ type: SET_DATA_USERS, dataUsers });

export const SetUserTC = () => {
  return (dispatch) => {
    const db = firebase.database();
    const users = db.ref("users");
    users.on("value", (elem) => {
      dispatch(SetUsers(elem.val()));
    });
  };
};
