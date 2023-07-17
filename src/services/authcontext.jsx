import React, { createContext, useState, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import ContinuePage from '../components/continue';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
  const accessToken = localStorage.getItem("session");
  const [auth, setAuth] = useState(accessToken);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export const PrivateRoute = ({children}) => {
  const { auth } = useAuth();
  const location = useLocation();
  const locationContinue = location.pathname === "/continue";
  return (
    auth ? ( 
        locationContinue ? <Navigate to="/" state={{ from: location }} /> : children
    ) : !locationContinue ? <Navigate to="/continue" state={{ from: location }} /> : children
  );
};
