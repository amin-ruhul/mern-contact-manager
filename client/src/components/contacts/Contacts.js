import React, { useContext } from "react";
import ContactContext from "../../context/contact/ContactContext";

function Contacts() {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;
  console.log(contacts);
  return (
    <div>
      {contacts.map((contact) => (
        <h1>{contact.name}</h1>
      ))}

      <h1>contact</h1>
    </div>
  );
}

export default Contacts;
