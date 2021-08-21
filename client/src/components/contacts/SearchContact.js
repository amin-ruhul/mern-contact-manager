import React, { useRef, useContext } from "react";
import ContactContext from "../../context/contact/ContactContext";
import Styles from "../../assets/css/Contact.module.css";

function SearchContact() {
  const contactContext = useContext(ContactContext);
  const { filterContact, clearFilter } = contactContext;
  const term = useRef();

  const handelChange = (e) => {
    if (term.current.value) {
      filterContact(term.current.value);
    } else {
      clearFilter();
    }
  };
  return (
    <form className={Styles.search}>
      <input
        ref={term}
        type="text"
        onChange={handelChange}
        placeholder="Enter your search keyword..."
      />
    </form>
  );
}

export default SearchContact;
