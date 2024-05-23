import { useState, useContext, useEffect } from "react";
import { createContext } from "react";
import { auth } from "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
const AuthContext = createContext({});

// usecontext for every file
export const useAuth = () => {
  return useContext(AuthContext);
};
const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();

  //   sign up method---------------------------------
  const auth = getAuth();
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login method -------------------------------
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //  context data
  const authData = {
    currentUser,
    setCurrentUser,
    signUp,
    login,
  };

  return (
    <>
      <AuthContext.Provider value={authData}>
        {props.children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
