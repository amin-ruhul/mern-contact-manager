import React, { useContext } from "react";
import styles from "../../assets/css/Navbar.module.css";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

function Navbar() {
  const authContext = useContext(AuthContext);
  const { user, isAuthenticated, logout } = authContext;

  const handelClick = () => {
    logout();
  };
  return (
    <div className={styles.navbar}>
      <div className="logo">CM</div>
      <ul className={styles.navLinks}>
        <li className={styles.navLink}>
          <Link className={styles.link} to="/">
            Home
          </Link>
        </li>
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
