import Footer from "../Footer";
import Header from "../Header";
import { HabitContainer, TodayContainer, TodayHeader } from "./style";
import check from "../../assets/check.svg";

import { useContext } from "react";
import UserContext from "../../contexts/userContext";
import TokenContext from "../../contexts/tokenContext";

export default function Today() {
  const { user } = useContext(UserContext);
  const { token } = useContext(TokenContext);

  console.log("today log", user);
  console.log("token", token);
  return (
    <>
      <Header />
      <TodayContainer>
        <TodayHeader>
          <h2>Segunda 07/10</h2>
          <h3>Nenhum habito concluido ainda</h3>
        </TodayHeader>
        <HabitContainer>
          <div>
            <h1>Ler 1 capitulo de livro</h1>
            <p>
              Sequencia atual: <span>4 dias</span>
            </p>
            <p>Seu recode: 5 dias</p>
          </div>

          <button>
            <img src={check} alt="check"></img>
          </button>
        </HabitContainer>
      </TodayContainer>

      <Footer />
    </>
  );
}
