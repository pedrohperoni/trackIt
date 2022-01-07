import Logo from "../Logo";
import { RegisterContainer } from "./style";
import Input from "../Input";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Loading from "../Loading";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleSignUp(e) {
    setLoading(true);
    e.preventDefault();
    console.log(email, password, name, image);
    axios
      .post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
        {
          email,
          name,
          image,
          password,
        }
      )
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.response);
        setLoading(false);
        alert("Tente novamente");
      });
  }
  return (
    <RegisterContainer>
      <Logo />
      <form onSubmit={handleSignUp}>
        <Input
          disabled={loading}
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          disabled={loading}
          type="password"
          placeholder="senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          disabled={loading}
          type="text"
          placeholder="nome"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          disabled={loading}
          type="text"
          placeholder="foto"
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">{loading ? <Loading /> : "Cadastrar"}</button>
      </form>
      <Link to="/">
        <p>Já tem uma conta? Faça login!</p>
      </Link>
    </RegisterContainer>
  );
}
