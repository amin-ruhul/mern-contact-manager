import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";

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
    <div>
      <form onSubmit={handelSubmit}>
        {error !== null && <h5>{error}</h5>}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handelChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handelChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handelChange}
        />
        <input
          type="password"
          name="password2"
          placeholder="Confirm Password"
          value={password2}
          onChange={handelChange}
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default Register;
