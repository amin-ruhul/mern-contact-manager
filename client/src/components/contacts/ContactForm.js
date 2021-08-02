import React from "react";
import styles from "../../assets/css/Form.module.css";

function ContactForm() {
  return (
    <div className={styles.card}>
      <form action="">
        <h3 className={styles.heading}>Add New Contact</h3>
        <div className={styles.formGroup}>
          <input type="text" placeholder="Enter Name" />
          <input type="email" placeholder="Enter email" />
          <input type="phone" placeholder="Enter phone" />
        </div>
        <div className={styles.checkBoxGroup}>
          <span className={styles.tagSpan}>
            <input type="radio" name="tag" value="Personal" />
            <span>Personal</span>
          </span>
          <span className={styles.tagSpan}>
            <input type="radio" name="tag" value="Professional" />
            <span>Professional</span>
          </span>
        </div>
        <button className={styles.btn}>ADD</button>
      </form>
    </div>
  );
}

export default ContactForm;
