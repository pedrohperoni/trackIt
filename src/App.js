import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Habits from "./components/Habits";
import Login from "./components/Login";
import Register from "./components/Register";
import Today from "./components/Today";
import UserContext from "./contexts/userContext";
import TokenContext from "./contexts/tokenContext";

function App() {
  const [user, setUser] = useState([]);
  const [token, setToken] = useState("");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <TokenContext.Provider value={{ token, setToken }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/hoje" element={<Today />} />
            <Route path="/habitos" element={<Habits />} />
          </Routes>
        </BrowserRouter>
      </TokenContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
