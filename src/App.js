import { BrowserRouter, Routes, Route } from "react-router-dom";
import Habits from "./components/Habits";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/habitos" element={<Habits />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
