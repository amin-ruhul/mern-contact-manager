import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/auth/authContext";
import Styles from "../../assets/css/Form.module.css";

function Login(props) {
  const authContext = useContext(AuthContext);
  const { login, isAuthenticated, error } = authContext;
  const [user, setUser] = useState({
    email: "",
    password: "",
    errorMessage: "",
  });
  // if (error) {
  //   setUser({
  //     ...user,
  //     errorMessage: error,
  //   });
  // }
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    // if (error) {
    //   setTimeout(() => {
    //     setUser({
    //       ...user,
    //       errorMessage: error,
    //     });
    //   }, 2000);
    // }
  }, [isAuthenticated, props.history]);

  const { email, password, errorMessage } = user;

  const handelChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };
  return (
    <div className={`${Styles.card} ${Styles.middle}`}>
      <form onSubmit={handelSubmit}>
        <h3 className={Styles.heading}>Login</h3>
        {error && <h5>{error}</h5>}
        <div className={Styles.formGroup}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handelChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handelChange}
            required
          />
        </div>
        <input className={Styles.btn} type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
