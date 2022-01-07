import Logo from "../Logo";
import { LoginContainer } from "./style";
import Input from "../Input";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Loading from "../Loading";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(email, password);
    axios
      .post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
        {
          email,
          password,
        }
      )
      .then((response) => {
        setUser(response.data);
        setToken(response.data.token);
        console.log(user, token);
        navigate("/hoje");
      })
      .catch((error) => {
        console.log(error.response);
        alert("Usuario ou senha incorreta");
        setLoading(false);
      });
  };

  console.log(user, token);

  return (
    <LoginContainer>
      <Logo />
      <form onSubmit={handleLogin}>
        <Input
          disabled={loading}
          type="email"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          disabled={loading}
          type="password"
          value={password}
          placeholder="senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{loading ? <Loading /> : "Entrar"}</button>
      </form>
      <Link to="/cadastro">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </LoginContainer>
  );
}
