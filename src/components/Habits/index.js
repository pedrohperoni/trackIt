import Footer from "../Footer";
import Header from "../Header";
import { HabitsContainer, HabitsCreator, HabitsHeader } from "./style";

export default function Habits() {
  return (
    <>
      <Header />
      <HabitsContainer>
        <HabitsHeader>
          <h2>Meus hábitos </h2>
          <button>+</button>
        </HabitsHeader>
        <HabitsCreator>
          <input placeholder="nome do hábito"></input>
        </HabitsCreator>
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      </HabitsContainer>

      <Footer />
    </>
  );
}
