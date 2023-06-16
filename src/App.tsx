import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";
import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
interface AuthContextProps {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedValue = sessionStorage.getItem("isLoggedIn");
    return storedValue ? JSON.parse(storedValue) : false;
  });

  useEffect(() => {
    sessionStorage.setItem("isLoggedIn", isLoggedIn.toString());
  }, [isLoggedIn]);

  const HomeRoute = isLoggedIn ? <Home /> : <Navigate to="/login" />;
  const LoginRoute = !isLoggedIn ? <Login /> : <Navigate to="/" />;

  return (
    // <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Auth0Provider
        domain="dev-vv56j5skcswxbfmp.us.auth0.com"
        clientId="Z3nC5ve1eWkkWJvC6zVgBr8OWwiMiF7U"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={HomeRoute} />
            <Route path="/contact" Component={Contact} />
            <Route path="/login" element={LoginRoute} />
            <Route path="/register" Component={Register} />
          </Routes>
        </BrowserRouter>
      </Auth0Provider>
    // </AuthContext.Provider>
  );
};

export default App;
