import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Habits from "./components/Habits";
import Login from "./components/Login";
import Register from "./components/Register";
import Today from "./components/Today";
import UserContext from "./contexts/userContext";
import TokenContext from "./contexts/tokenContext";
import History from "./components/History";
import ProgressContext from "./contexts/progressContext";

function App() {
  const [user, setUser] = useState([]);
  const [token, setToken] = useState("");
  const [progress, setProgress] = useState(0);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <TokenContext.Provider value={{ token, setToken }}>
        <ProgressContext.Provider value={{ progress, setProgress }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/cadastro" element={<Register />} />
              <Route path="/hoje" element={<Today />} />
              <Route path="/habitos" element={<Habits />} />
              <Route path="/historico" element={<History />} />
            </Routes>
          </BrowserRouter>
        </ProgressContext.Provider>
      </TokenContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
