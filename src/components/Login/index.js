import Logo from "../Logo";
import { LoginContainer } from "./style";
import Input from "../Input";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");

  const handleLogin = (e) => {
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
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  console.log(user, token);

  return (
    <LoginContainer>
      <Logo />
      <form onSubmit={handleLogin}>
        <Input
          type="email"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          value={password}
          placeholder="senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
      <Link to="/cadastro">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </LoginContainer>
  );
}
