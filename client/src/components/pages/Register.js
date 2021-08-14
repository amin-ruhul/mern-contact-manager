import React, { useState } from "react";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = user;
  const handelChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
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
