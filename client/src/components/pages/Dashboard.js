import React, { useEffect, useContext } from "react";
import Contacts from "../contacts/Contacts";
import AuthContext from "../../context/auth/authContext";

function Dashboard() {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Contacts />
    </div>
  );
}

export default Dashboard;
