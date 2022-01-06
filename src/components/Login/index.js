import Logo from "../Logo";
import { LoginContainer } from "./style";
import Input from "../Input";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <LoginContainer>
      <Logo />
      <form>
        <Input placeholder="nome" />
        <Input placeholder="senha" />
        <button>Entrar</button>
      </form>
      <Link to="/cadastro">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </LoginContainer>
  );
}
