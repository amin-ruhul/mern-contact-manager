import React, { useContext } from "react";
import ContactContext from "../../context/contact/ContactContext";
import ContactForm from "./ContactForm";
import ContactItem from "./ContactItem";
import styles from "../../assets/css/Contact.module.css";

function Contacts() {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;
  console.log(contacts);
  return (
    <div className={styles.contact}>
      <div>
        <ContactForm />
      </div>
      <div>
        {contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
}

export default Contacts;
