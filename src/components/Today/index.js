import Footer from "../Footer";
import Header from "../Header";
import { TodayContainer } from "./style";
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

  useEffect(() => {
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
          })
          .catch((error) => console.log(error.response));
  };

  const teste = {
    id: 7357,
    name: "sabadao",
    done: true,
    currentSequence: 10,
    highestSequence: 10,
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

const TodayHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 21px 0px 30px 0px;
  margin: 0 17px;

  h2 {
    font-size: 23px;
    line-height: 29px;
    color: #126ba5;
  }

  h3 {
    font-size: 18px;
    line-height: 23px;
    color: #bababa;
  }
`;

const HabitContainer = styled.div`
  height: 94px;
  border-radius: 5px;
  background-color: #fff;
  margin: 0 17px 10px 17px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: ${(props) => (props.completed ? "#8FC549" : "#666666")};
  }

  h1 {
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    margin: 13px 0px 7px 15px;
  }

  p {
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
    margin-left: 15px;

    :last-of-type {
      margin-bottom: 17px;
      span {
        color: ${(props) => (props.sequence ? "#8FC549" : "#666666")};
      }
    }
  }

  button {
    height: 69px;
    width: 69px;
    background-color: ${(props) => (props.completed ? "#8FC549" : "#ebebeb")};
    border: 1px solid #e7e7e7;
    border-radius: 5px;
    margin: 13px;
  }
`;
