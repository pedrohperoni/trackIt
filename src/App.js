import { BrowserRouter, Routes, Route } from "react-router-dom";
import Habits from "./components/Habits";
import Login from "./components/Login";
import Register from "./components/Register";
import Today from "./components/Today";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/hoje" element={<Today />} />
        <Route path="/habitos" element={<Habits />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
