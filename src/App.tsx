import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";
import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
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
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={HomeRoute} />;
          <Route path="/contact" Component={Contact} />
          <Route path="/login" element={LoginRoute} />
          <Route path="/register" Component={Register} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
