import {
  CREATE_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  FILTER_CLEAR,
  FILTER_CONTACT,
  REMOVE_ALERT,
  SET_ALERT,
  SET_CURRENT,
} from "./action";

// eslint-disable-next-line
export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, payload],
      };
    default:
      return state;
  }
};
