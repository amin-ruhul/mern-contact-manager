import React, { useReducer } from "react";
import axios from "axios";
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
  FAIL_TO_CREATE,
  LOAD_CONTACT,
  CLEAR_CONTACT,
} from "./action";

function ContactState(props) {
  const initialState = {
    contacts: null,
    current: null,
    filtered: null,
    error: null,
    loading: true,
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // add contact

  const addContact = async (contact) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/contacts", contact, config);
      dispatch({ type: CREATE_CONTACT, payload: res.data });
    } catch (error) {
      dispatch({ type: FAIL_TO_CREATE, payload: error.response.data.error });
    }
  };

  // LOAD CONTACT
  const loadContact = async () => {
    try {
      const res = await axios.get("/api/contacts");
      dispatch({ type: LOAD_CONTACT, payload: res.data });
    } catch (error) {
      dispatch({ type: FAIL_TO_CREATE, payload: error.response.data.error });
    }
  };

  // clear contact

  const clearContact = () => {
    dispatch({ type: CLEAR_CONTACT });
  };

  // update contact

  const updateContact = async (contact) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(
        `/api/contacts/${contact._id}`,
        contact,
        config
      );
      dispatch({ type: UPDATE_CONTACT, payload: res.data });
      console.log("contact:", contact);
      //dispatch({ type: UPDATE_CONTACT, payload: contact });
    } catch (error) {
      dispatch({ type: FAIL_TO_CREATE, payload: error.response.data.error });
    }
  };
  // delete contact

  const deleteContact = async (id) => {
    try {
      await axios.delete(`/api/contacts/${id}`);
      dispatch({ type: DELETE_CONTACT, payload: id });
    } catch (error) {
      dispatch({ type: FAIL_TO_CREATE, payload: error.response.data.error });
    }
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
        error: state.error,
        loading: state.loading,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContact,
        clearFilter,
        loadContact,
        clearContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
}

export default ContactState;
