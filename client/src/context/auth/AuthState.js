import { useReducer } from "react";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERROR,
  LOAD_USER,
} from "../action";
import authReducer from "./authReducer";
import AuthContext from "./authContext";
import axios from "axios";
import setAuthToken from "../../utils/authToken";

function AuthState(props) {
  const initialState = {
    authToken: localStorage.getItem("token"),
    isAuthenticated: false,
    user: null,
    error: null,
    loading: true,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  // load logged in user
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get("api/auth");
      dispatch({ type: LOAD_USER, payload: res.data });
    } catch (error) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  // register new user
  const register = async (data) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/user", data, config);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      loadUser();
    } catch (error) {
      dispatch({ type: REGISTER_FAIL, payload: error.response.data.error });
    }
  };

  // login user
  const login = async (data) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/auth", data, config);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      loadUser();
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error.response.data.error });
    }
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
  };
  // clear existing error
  const clearError = () => {
    dispatch({ type: CLEAR_ERROR });
  };

  return (
    <AuthContext.Provider
      value={{
        authToken: state.authToken,
        user: state.user,
        error: state.error,
        loading: state.loading,
        isAuthenticated: state.isAuthenticated,
        register,
        clearError,
        loadUser,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthState;
