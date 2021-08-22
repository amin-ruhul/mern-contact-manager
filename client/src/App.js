import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/pages/Dashboard";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";
import setAuthToken from "./utils/authToken";
import PrivateRoute from "./routing/PrivateRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <Route exact path="/about" component={About} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
              </Switch>
            </div>
          </>
        </Router>
      </ContactState>
    </AuthState>
  );
}

export default App;
