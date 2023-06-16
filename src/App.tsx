import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";
// import { createContext, useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// interface AuthContextProps {
//   isLoggedIn: boolean;
//   setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
// }

// export const AuthContext = createContext<AuthContextProps>({
//   isLoggedIn: false,
//   setIsLoggedIn: () => {},
// });

const App = () => {

  // const [isLoggedIn, setIsLoggedIn] = useState(() => {
  //   const storedValue = sessionStorage.getItem("isLoggedIn");
  //   return storedValue ? JSON.parse(storedValue) : false;
  // });

  // useEffect(() => {
  //   sessionStorage.setItem("isLoggedIn", isLoggedIn.toString());
  // }, [isLoggedIn]);

  // const HomeRoute = isAuthenticated ? <Home /> : <Navigate to="/login" />;
  // const LoginRoute = !isAuthenticated ? <Login /> : <Navigate to="/" />;

  const {isAuthenticated} = useAuth0();

  return (
    // <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={isAuthenticated?Home:Login} />
            <Route path="/contact" Component={Contact} />
            <Route path="/login" Component={!isAuthenticated?Login:Home} />
            <Route path="/register" Component={Register} />
          </Routes>
        </BrowserRouter>
    // </AuthContext.Provider>
  );
};

export default App;
