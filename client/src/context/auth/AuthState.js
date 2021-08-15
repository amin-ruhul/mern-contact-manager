import { useReducer } from "react";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERROR,
} from "../action";
import authReducer from "./authReducer";
import AuthContext from "./authContext";
import axios from "axios";

function AuthState(props) {
  const initialState = {
    authToken: localStorage.getItem("token"),
    user: null,
    error: null,
    loading: true,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  const register = async (data) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/user", data, config);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: REGISTER_FAIL, payload: error.response.data.error });
    }
  };

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
        register,
        clearError,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthState;
