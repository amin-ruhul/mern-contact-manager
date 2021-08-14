import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
