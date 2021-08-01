import React, { useContext } from "react";
import ContactContext from "../../context/contact/ContactContext";
import ContactItem from "./ContactItem";

function Contacts() {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;
  console.log(contacts);
  return (
    <div>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}

      <h1>contact</h1>
    </div>
  );
}

export default Contacts;
