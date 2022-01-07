import Logo from "../Logo";
import { LoginContainer } from "./style";
import Input from "../Input";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useState } from "react";
import Loading from "../Loading";

import UserContext from "../../contexts/userContext";
import TokenContext from "../../contexts/tokenContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const { setToken } = useContext(TokenContext);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    setLoading(true);
    e.preventDefault();
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
        navigate("/hoje");
      })
      .catch(() => {
        alert("Usuario ou senha incorreta");
        setLoading(false);
      });
  };

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
