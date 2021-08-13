import React, { useRef, useContext } from "react";
import ContactContext from "../../context/contact/ContactContext";

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
    <form>
      <input ref={term} type="text" onChange={handelChange} />
    </form>
  );
}

export default SearchContact;
