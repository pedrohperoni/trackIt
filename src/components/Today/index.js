import Footer from "../Footer";
import Header from "../Header";
import { TodayContainer, TodayHeader, HabitContainer } from "./style";
import check from "../../assets/check.svg";
import dayjs from "dayjs";
import styled from "styled-components";

import { useContext, useEffect, useState } from "react";
import TokenContext from "../../contexts/tokenContext";
import axios from "axios";

export default function Today() {
  const { token } = useContext(TokenContext);
  const [habits, setHabits] = useState([""]);

  console.log(habits);

  require("dayjs/locale/pt-br");

  const update = () => {
    axios
      .get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setHabits(response.data);
      })
      .catch((error) => console.log(error.response));
  };

  useEffect(() => {
    update();
  }, []);

  const toggleCompletion = (habit) => {
    habit.done
      ? axios
          .post(
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`,
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((response) => {
            console.log(response.data);
            update();
          })
          .catch((error) => console.log(error.response))
      : axios
          .post(
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`,
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((response) => {
            console.log(response.data);
            update();
          })
          .catch((error) => console.log(error.response));
  };

  return (
    <>
      <Header />
      <TodayContainer>
        <TodayHeader>
          <h2>
            {dayjs().locale("pt-br").format("dddd")}, {dayjs().format("DD/MM")}
          </h2>
          <h3>Nenhum habito concluido ainda</h3>
        </TodayHeader>
        {habits.length > 0
          ? habits.map((habit) => (
              <HabitContainer
                onClick={() => toggleCompletion(habit)}
                completed={habit.done ? true : false}
                sequence={
                  habit.currentSequence >= habit.highestSequence ? true : false
                }
              >
                <div key={habit.id}>
                  <h1>{habit.name}</h1>
                  <p>
                    Sequencia atual: <span>{habit.currentSequence} dias</span>
                  </p>
                  <p>
                    Seu recode: <span>{habit.highestSequence} dias</span>
                  </p>
                </div>

                <button>
                  <img src={check} alt="check"></img>
                </button>
              </HabitContainer>
            ))
          : ""}
      </TodayContainer>

      <Footer />
    </>
  );
}
