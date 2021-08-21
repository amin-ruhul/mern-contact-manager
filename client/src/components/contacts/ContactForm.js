import React, { useState, useContext, useEffect } from "react";
import styles from "../../assets/css/Form.module.css";
import ContactContext from "../../context/contact/ContactContext";

function ContactForm() {
  const contactContext = useContext(ContactContext);
  const { addContact, current, clearCurrent, updateContact } = contactContext;
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    tag: "",
  });

  useEffect(() => {
    if (current) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        tag: "",
      });
    }
  }, [current]);

  const { name, email, phone, tag } = contact;

  const handelChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (current) {
      updateContact(contact);
    } else {
      addContact(contact);
    }
    clearForm(e);
  };

  const clearForm = (e) => {
    e.preventDefault();
    clearCurrent();
    setContact({
      name: "",
      email: "",
      phone: "",
      tag: "",
    });
  };

  return (
    <div className={styles.card}>
      <form action="" onSubmit={handelSubmit}>
        <h3 className={styles.heading}>
          {current ? "Edit Contact" : "Add New Contact"}
        </h3>
        <div className={styles.formGroup}>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={name}
            onChange={handelChange}
          />
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={handelChange}
          />
          <input
            type="phone"
            placeholder="Enter phone"
            name="phone"
            value={phone}
            onChange={handelChange}
          />
        </div>
        <div className={styles.checkBoxGroup}>
          <span className={styles.tagSpan}>
            <input
              type="radio"
              name="tag"
              value="Personal"
              onChange={handelChange}
            />
            <span>Personal</span>
          </span>
          <span className={styles.tagSpan}>
            <input
              type="radio"
              name="tag"
              value="Professional"
              onChange={handelChange}
            />
            <span>Professional</span>
          </span>
        </div>
        <button className={styles.btn}>{current ? "Update" : "ADD"}</button>
        {current && (
          <button className={styles.Clearbtn} onClick={clearForm}>
            Clear
          </button>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
