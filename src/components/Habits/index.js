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
  const [toggleCreate, setToggleCreate] = useState(false);
  const [newHabitName, setNewHabitName] = useState("");
  const [newHabitDays, setNewHabitDays] = useState([1, 2, 3, 4, 5, 6, 7]);
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
      .then(() => {
        setLoading(false);
        setToggleCreate(false);
        setNewHabitName("");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.response);
      });
  };

  const deleteHabit = (habit) => {
    console.log(habit);
    let confirmDeletion = window.confirm(
      "Tem certeza que deseja deletar esse habito?"
    );
    confirmDeletion
      ? axios
          .delete(
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
          })
      : console.log("nao");
  };

  const handleDaySelector = (aaa) => {
    console.log(aaa);
    console.log(days.indexOf(aaa));
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

  return (
    <>
      <Header />
      <HabitsContainer>
        <HabitsHeader>
          <h2>Meus hábitos </h2>
          <button
            onClick={() =>
              toggleCreate ? setToggleCreate(false) : setToggleCreate(true)
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
              value={newHabitName.length > 0 ? newHabitName : ""}
            />
            {days.map((day) => (
              <button disabled={loading} onClick={() => handleDaySelector(day)}>
                {day}
              </button>
            ))}

            <HabitsCreatorMenu>
              <button onClick={() => setToggleCreate(false)}>Cancelar</button>
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

        {habits.length === 0 ? (
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
        ) : (
          habits.map((habit) => (
            <HabitItem key={habit.id}>
              <h1>{habit.name}</h1>
              <button onClick={() => deleteHabit(habit.id)}>
                <img src={trash} alt="X" />
              </button>
              {days.map((day) => (
                <button>{days.includes(day) ? "S" : "N"}</button>
              ))}
            </HabitItem>
          ))
        )}
      </HabitsContainer>

      <Footer />
    </>
  );
}
