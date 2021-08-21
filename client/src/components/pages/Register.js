import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import Styles from "../../assets/css/Form.module.css";

function Register(props) {
  const authContext = useContext(AuthContext);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { register, error, clearError, isAuthenticated } = authContext;

  const { name, email, password, password2 } = user;
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
  }, [isAuthenticated, props.history]);
  const handelChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    console.log("error", error);
    register(user);
  };
  return (
    <div className={`${Styles.card} ${Styles.middle}`}>
      <form onSubmit={handelSubmit}>
        <h3 className={Styles.heading}>Register</h3>
        {error !== null && <h5>{error}</h5>}
        <div className={Styles.formGroup}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handelChange}
            required
          />
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
          <input
            type="password"
            name="password2"
            placeholder="Confirm Password"
            value={password2}
            onChange={handelChange}
            required
          />
        </div>
        <input type="submit" className={Styles.btn} value="Register" />
      </form>
    </div>
  );
}

export default Register;
