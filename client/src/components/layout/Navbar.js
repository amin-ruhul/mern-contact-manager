import React from "react";
import styles from "../../assets/css/Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className="logo">CM</div>
      <ul className={styles.navLinks}>
        <li className={styles.navLink}>
          <Link className={styles.link} to="/">
            Home
          </Link>
        </li>
        <li className={styles.navLink}>
          <Link className={styles.link} to="/about">
            About
          </Link>
        </li>
        <li className={styles.navLink}>
          <Link className={styles.link} to="/login">
            Login
          </Link>
        </li>
        <li className={styles.navLink}>
          <Link className={styles.link} to="/register">
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
