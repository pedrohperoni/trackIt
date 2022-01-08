import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../../contexts/tokenContext";
import Footer from "../Footer";
import Header from "../Header";
import Loading from "../Loading";
import {
  HabitsContainer,
  HabitsCreator,
  HabitsHeader,
  HabitsCreatorMenu,
  HabitItem,
} from "./style";

import trash from "../../assets/trash.svg";

export default function Habits() {
  const [toggleCreate, setToggleActive] = useState(false);
  const [newHabitName, setNewHabitName] = useState("");
  const [newHabitDays, setNewHabitDays] = useState([1, 3, 4]);
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useContext(TokenContext);

  const days = ["D", "S", "T", "Q", "Q", "S", "S"];

  const createHabit = () => {
    setLoading(true);
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
      .then((response) => {
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.response);
      });
    console.log(newHabitName);
    console.log(newHabitDays);
  };

  const deleteHabit = () => {
    console.log("aaa");
  };

  useEffect(() => {
    axios
      .get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setHabits([...response.data]);
      })
      .catch((error) => console.log(error.response));
  }, []);

  console.log("habitos clone", habits);

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
              disabled={loading}
              onChange={(e) => setNewHabitName(e.target.value)}
              placeholder="nome do hábito"
            />
            {days.map((day) => (
              <button disabled={loading}>{day}</button>
            ))}

            <HabitsCreatorMenu>
              <button onClick={() => setToggleActive(false)}>Cancelar</button>
              {loading ? (
                <button>
                  <Loading />
                </button>
              ) : (
                <button onClick={createHabit} type="submit">
                  Salvar
                </button>
              )}
            </HabitsCreatorMenu>
          </HabitsCreator>
        ) : (
          ""
        )}

        {habits.length == 0 ? (
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
        ) : (
          habits.map((habit) => (
            <HabitItem key={habit.id}>
              <h1>{habit.name}</h1>
              <button onClick={deleteHabit}>
                <img src={trash} alt="X" />
              </button>
              {days.map((day) => (
                <button>{days.includes(day) ? console.log("a") : "N"}</button>
              ))}
            </HabitItem>
          ))
        )}
      </HabitsContainer>

      <Footer />
    </>
  );
}
