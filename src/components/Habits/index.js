import axios from "axios";
import { useContext, useState } from "react";
import TokenContext from "../../contexts/tokenContext";
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
  const [newHabitDays, setNewHabitDays] = useState([1, 3, 4]);
  const { token } = useContext(TokenContext);

  const days = ["D", "S", "T", "Q", "Q", "S", "S"];

  const handleCreate = () => {
    axios
      .post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        {
          name: newHabitName,
          days: newHabitDays,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error.response));
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
