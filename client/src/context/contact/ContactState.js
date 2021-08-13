import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import ContactContext from "./ContactContext";
import contactReducer from "./ContacReducer";
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
} from "./action";

function ContactState(props) {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Ruhul",
        email: "ruhul@gmail.com",
        phone: "190902898111",
        tag: "personal",
      },
      {
        id: 2,
        name: "Rasel",
        email: "rasel@gmail.com",
        phone: "190902898111",
        tag: "personal",
      },
      {
        id: 3,
        name: "Rayhan",
        email: "rayhan@gmail.com",
        phone: "190902898111",
        tag: "personal",
      },
    ],
    current: null,
    filtered: null,
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // add contact

  const addContact = (contact) => {
    contact.id = uuid();
    dispatch({ type: CREATE_CONTACT, payload: contact });
  };
  // update contact

  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  // delete contact

  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // setCurrent
  const setCurrent = (current) => {
    dispatch({ type: SET_CURRENT, payload: current });
  };

  // clearCurrent
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT, payload: null });
  };

  // filter contact
  const filterContact = (text) => {
    dispatch({ type: FILTER_CONTACT, payload: text });
  };

  // clear filter
  const clearFilter = () => {
    dispatch({ type: FILTER_CLEAR, payload: null });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContact,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
}

export default ContactState;
