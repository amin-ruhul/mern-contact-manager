import { useReducer } from "react";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../action";
import authReducer from "./authReducer";
import AuthContext from "./authContext";

function AuthState(props) {
  const initialState = {
    authToken: "ttttt", // localStorage.getItem("token"),
    user: null,
    error: null,
    loading: true,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        authToken: state.authToken,
        user: state.user,
        error: state.error,
        loading: state.loading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthState;
