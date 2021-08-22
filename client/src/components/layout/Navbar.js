import React, { useContext } from "react";
import styles from "../../assets/css/Navbar.module.css";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/ContactContext";

function Navbar() {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);
  const { user, isAuthenticated, logout } = authContext;
  const { clearContact } = contactContext;

  const handelClick = () => {
    logout();
    clearContact();
  };
  return (
    <div className={styles.navbar}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="logo">CM</div>
      </Link>

      <ul className={styles.navLinks}>
        {isAuthenticated && (
          <>
            <li className={styles.navLink} onClick={handelClick}>
              <Link className={styles.link} to="/logout">
                Logout
              </Link>
            </li>

            <li className={styles.navLink}>{user && user.user.name}</li>
          </>
        )}
        {!isAuthenticated && (
          <>
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
          </>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
