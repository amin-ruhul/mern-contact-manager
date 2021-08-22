import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/auth/authContext";
import Styles from "../../assets/css/Form.module.css";
import EyeClose from "../EyeClose";
import EyeOpen from "../EyeOpen";

function Login(props) {
  const authContext = useContext(AuthContext);
  const { login, isAuthenticated, error, clearError } = authContext;
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/dashboard");
    }
  }, [isAuthenticated, props.history, error]);

  const { email, password } = user;

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

  if (error !== null) clearError();
  return (
    <div className={`${Styles.card} ${Styles.middle}`}>
      <form onSubmit={handelSubmit}>
        <h3 className={Styles.heading}>Login</h3>
        {error && (
          <div className={Styles.error}>{error && <h5>{error}</h5>}</div>
        )}
        <div className={Styles.formGroup}>
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
        </div>
        <input className={Styles.btn} type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
