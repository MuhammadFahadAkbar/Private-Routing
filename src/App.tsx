import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";
import { createContext, useState } from "react";

interface AuthContextProps {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={isLoggedIn ? Home : Login} />
          <Route path="/contact" Component={Contact} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
