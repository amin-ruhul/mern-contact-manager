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
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // add contact

  const addContact = (contact) => {
    contact.id = uuid();
    dispatch({ type: CREATE_CONTACT, payload: contact });
  };

  return (
    <ContactContext.Provider value={{ contacts: state.contacts, addContact }}>
      {props.children}
    </ContactContext.Provider>
  );
}

export default ContactState;
