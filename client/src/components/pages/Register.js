import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import Styles from "../../assets/css/Form.module.css";
import EyeClose from "../EyeClose";
import EyeOpen from "../EyeOpen";

function Register(props) {
  const authContext = useContext(AuthContext);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [err, setErr] = useState(null);
  const [hidden, setHidden] = useState(true);

  const { register, error, clearError, isAuthenticated } = authContext;
  const { name, email, password, password2 } = user;

  // redirect user base on status
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/dashboard");
    }
  }, [isAuthenticated, props.history]);

  // set state value
  const handelChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (password === password2) {
      register(user);
    } else {
      setErr("Password Not Match");
    }
  };

  // clear frontend error
  if (err === "Password Not Match") {
    setTimeout(() => {
      setErr("");
    }, 2000);
  }
  // clear backend error
  if (error !== null) clearError();

  return (
    <div className={`${Styles.card} ${Styles.middle}`}>
      <form onSubmit={handelSubmit}>
        <h3 className={Styles.heading}>Register</h3>
        {(err || error) && (
          <div className={Styles.error}>
            {err && <h5>{err}</h5>}
            {error && <h5>{error}</h5>}
          </div>
        )}

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
          <div className={Styles.passwordWrapper}>
            <input
              type={hidden ? "password" : "text"}
              name="password"
              placeholder="Password"
              value={password}
              onChange={handelChange}
              required
            />
            <div className={Styles.EyeIcon} onClick={() => setHidden(!hidden)}>
              {hidden ? <EyeOpen /> : <EyeClose />}
            </div>
          </div>
          <div className={Styles.passwordWrapper}>
            <input
              type={hidden ? "password" : "text"}
              name="password2"
              placeholder="Confirm Password"
              value={password2}
              onChange={handelChange}
              required
            />
            <div className={Styles.EyeIcon} onClick={() => setHidden(!hidden)}>
              {hidden ? <EyeOpen /> : <EyeClose />}
            </div>
          </div>
        </div>
        <input type="submit" className={Styles.btn} value="Register" />
      </form>
    </div>
  );
}

export default Register;
