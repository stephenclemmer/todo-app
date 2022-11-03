// import React, { useState } from 'react';
// // import cookie from 'react-cookies';
// // import jwt_decode from 'jwt-decode';

import { useInsertionEffect } from "react";

// export const AuthContext = React.createContext();

// const testUsers = {
// // put test users here
// }

// const AuthProvider = ({ children}) => {

//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState({});
//   const [error, setError] = useState(null);

//   const can = (capability) => {

//     return user?.capabilities?.includes(capability);
//   }

//   const login = (username, password) => {
//     let authCredentials = testUsers[username];

//     if(authCredentials && authCredentials.password === password){
//       try {
//         // validate the token
//       } catch (e) {
//         // set error in state?
//         console.error(e);
//       }
//     }

//   }
  
//   function _validateToken(token){
//     try {
//       let validUser = jwt_decode(token);
//       if(validUser){
//         setUser(validUser);
//         setLoggedIn(true);
//         cookie.save('auth', token);
//       }
//     } catch(e) {
//       setIsLoggedIn(false);
//       setError(e);
//       console.error(e);
//     }
//   }
  
//   const logout = () => {
//     setUser({});
//     setIsLoggedIn(false);
//     setError(null);
//     cookie.remove('auth');
//   }
  
// useInsertionEffect(() => {
//   let token = cookie.load('auth');
//   if(token) {
//     _validateToken(token);
//   }
// }, []);

//   let values = {
//     isLoggedIn,
//     user, 
//     error,
//     can,
//     login,
//     logout,
//   }

//   return (
//     <AuthContext.Provider value={values}>
//       { children }
//     </AuthContext.Provider>
//   )

// }

// export default AuthProvider;