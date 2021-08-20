import React, { useContext, useEffect } from "react";
import ContactContext from "../../context/contact/ContactContext";
import ContactForm from "./ContactForm";
import ContactItem from "./ContactItem";
import styles from "../../assets/css/Contact.module.css";
import SearchContact from "./SearchContact";

function Contacts() {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered, loadContact, loading } = contactContext;

  useEffect(() => {
    loadContact();
    // eslint-disable-next-line
  }, []);
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
              <ContactItem key={contact._id} contact={contact} />
            ))
          : contacts &&
            contacts.map((contact) => (
              <ContactItem key={contact._id} contact={contact} />
            ))}
        {contacts !== null && contacts.length && !loading === 0 && (
          <h3>No contact Available</h3>
        )}
        {loading && <h5>Loading...</h5>}
      </div>
    </div>
  );
}

export default Contacts;
