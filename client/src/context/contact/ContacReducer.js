import {
  CREATE_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  FILTER_CLEAR,
  FILTER_CONTACT,
  REMOVE_ALERT,
  SET_ALERT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FAIL_TO_CREATE,
  LOAD_CONTACT,
  CLEAR_CONTACT,
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
    case LOAD_CONTACT:
      return {
        ...state,
        contacts: payload,
        loading: false,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact._id !== payload._id ? contact : payload
        ),
      };
    case CLEAR_CONTACT:
      return {
        contacts: null,
        current: null,
        filtered: null,
        error: null,
        loading: false,
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact._id !== payload),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: payload,
      };
    case FILTER_CONTACT:
      return {
        ...state,
        filtered: state.contacts.filter((contact) => {
          const regex = new RegExp(`${payload}`, `gi`);
          return contact.name.match(regex) || contact.email.match(regex);
        }),
      };
    case FILTER_CLEAR:
      return {
        ...state,
        filtered: payload,
      };
    case FAIL_TO_CREATE:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
