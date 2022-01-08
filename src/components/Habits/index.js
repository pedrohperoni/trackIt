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
  Button,
} from "./style";

import trash from "../../assets/trash.svg";

export default function Habits() {
  const [toggleCreate, setToggleCreate] = useState(false);
  const [newHabitName, setNewHabitName] = useState("");
  const [newHabitDays, setNewHabitDays] = useState([]);
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useContext(TokenContext);

  const days = [
    {
      day: "D",
      id: 0,
    },
    {
      day: "S",
      id: 1,
    },
    {
      day: "T",
      id: 2,
    },
    {
      day: "Q",
      id: 3,
    },
    {
      day: "Q",
      id: 4,
    },
    {
      day: "S",
      id: 5,
    },
    {
      day: "S",
      id: 6,
    },
  ];

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
        setNewHabitDays([]);
        update();
      })
      .catch((error) => {
        setLoading(false);
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
            update();
          })
          .catch((err) => {
            console.log(err);
          })
      : console.log("nao");
  };

  const handleDaySelector = (habit) => {
    if (newHabitDays.includes(habit)) {
      const buffer = [...newHabitDays];
      const index = buffer.indexOf(habit);
      if (index >= 0) {
        buffer.splice(index, 1);
        setNewHabitDays(buffer);
      }
      update();
    } else {
      newHabitDays.push(habit);
      update();
    }
  };

  const update = () => {
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
  };

  useEffect(() => {
    update();
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
              <Button
                active={newHabitDays.includes(day.id)}
                disabled={loading}
                onClick={() => handleDaySelector(day.id)}
              >
                {day.day}
              </Button>
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
                <Button active={habit.days.includes(day.id)}>{day.day}</Button>
              ))}
            </HabitItem>
          ))
        )}
      </HabitsContainer>

      <Footer />
    </>
  );
}
