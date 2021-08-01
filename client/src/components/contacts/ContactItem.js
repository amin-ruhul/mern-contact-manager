import React from "react";
import styles from "../../assets/css/ContactItem.module.css";

function ContactItem(props) {
  const { name, email, phone, tag } = props.contact;
  console.log(props.contact);
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
        <button className={`${styles.btn} ${styles.edit}`}>Edit</button>
        <button className={`${styles.btn} ${styles.delete}`}>Delete</button>
      </div>
    </div>
  );
}

export default ContactItem;
