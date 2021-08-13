import React, { useContext } from "react";
import styles from "../../assets/css/ContactItem.module.css";
import ContactContext from "../../context/contact/ContactContext";

function ContactItem({ contact }) {
  const { id, name, email, phone, tag } = contact;
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;
  const onDelete = () => {
    deleteContact(id);
    clearCurrent();
  };
  return (
    <div className={styles.card}>
      <p>
        <span className={styles.title}>Name:</span>
        {name}
      </p>
      <p>
        <span className={styles.title}>Email:</span>
        {email}
      </p>
      <p>
        <span className={styles.title}>Phone:</span>
        {phone}
      </p>
      <span className={styles.tag}>
        {tag.charAt(0).toUpperCase() + tag.slice(1)}
      </span>
      <div>
        <button
          className={`${styles.btn} ${styles.edit}`}
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button className={`${styles.btn} ${styles.delete}`} onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ContactItem;
