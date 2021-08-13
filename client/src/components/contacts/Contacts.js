import React, { useContext } from "react";
import ContactContext from "../../context/contact/ContactContext";
import ContactForm from "./ContactForm";
import ContactItem from "./ContactItem";
import styles from "../../assets/css/Contact.module.css";
import SearchContact from "./SearchContact";

function Contacts() {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;
  console.log(contacts);
  return (
    <div className={styles.contact}>
      <div>
        <ContactForm />
      </div>
      <div>
        <SearchContact />
        {contacts && filtered !== null
          ? filtered.map((contact) => (
              <ContactItem key={contact.id} contact={contact} />
            ))
          : contacts.map((contact) => (
              <ContactItem key={contact.id} contact={contact} />
            ))}
        {contacts.length === 0 && <h3>No contact Available</h3>}
      </div>
    </div>
  );
}

export default Contacts;
