import Logo from "../Logo";
import { RegisterContainer } from "./style";
import Input from "../Input";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <RegisterContainer>
      <Logo />
      <form>
        <Input placeholder="email" />
        <Input placeholder="senha" />
        <Input placeholder="nome" />
        <Input placeholder="foto" />
        <button>Entrar</button>
      </form>
      <Link to="/">
        <p>Já tem uma conta? Faça login!</p>
      </Link>
    </RegisterContainer>
  );
}
