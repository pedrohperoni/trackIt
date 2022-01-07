import { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import {
  HabitsContainer,
  HabitsCreator,
  HabitsHeader,
  HabitsCreatorMenu,
} from "./style";

export default function Habits() {
  const [toggleCreate, setToggleActive] = useState(false);
  const [newHabitName, setNewHabitName] = useState("");
  const [newHabitDays, setNewHabitDays] = useState([]);

  const days = ["D", "S", "T", "Q", "Q", "S", "S"];

  const handleCreate = () => {
    console.log(newHabitName);
    console.log(newHabitDays);
  };

  return (
    <>
      <Header />
      <HabitsContainer>
        <HabitsHeader>
          <h2>Meus hábitos </h2>
          <button
            onClick={() =>
              toggleCreate ? setToggleActive(false) : setToggleActive(true)
            }
          >
            +
          </button>
        </HabitsHeader>
        {toggleCreate ? (
          <HabitsCreator>
            <input
              onChange={(e) => setNewHabitName(e.target.value)}
              placeholder="nome do hábito"
            ></input>
            {days.map((day) => {
              <button>{day}</button>;
            })}

            <HabitsCreatorMenu>
              <button onClick={() => setToggleActive(false)}>Cancelar</button>
              <button onClick={handleCreate} type="submit">
                Salvar
              </button>
            </HabitsCreatorMenu>
          </HabitsCreator>
        ) : (
          ""
        )}

        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      </HabitsContainer>

      <Footer />
    </>
  );
}
