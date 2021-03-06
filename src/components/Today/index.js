import { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import axios from "axios";
import Footer from "../Footer";
import Header from "../Header";
import { TodayContainer, TodayHeader, HabitContainer } from "./style";
import TokenContext from "../../contexts/tokenContext";
import check from "../../assets/check.svg";
import ProgressContext from "../../contexts/progressContext";

export default function Today() {
  const { token } = useContext(TokenContext);
  const { progress, setProgress } = useContext(ProgressContext);
  const [habits, setHabits] = useState([]);
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

  const updateProgress = () => {
    const habitsQTY = habits.length;
    let completedQTY = 0;
    let percentage = 0;
    for (let i = 0; i < habitsQTY; i++) {
      if (habitsQTY === 0) {
        setProgress(0);
        break;
      }
      if (habits[i].done === true) {
        completedQTY++;
      }
      percentage = Math.round((completedQTY / habitsQTY) * 100);
      setProgress(percentage);
    }
  };

  updateProgress();

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
            update();
          })
          .catch((error) => {
            update();
          })
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
            update();
          })
          .catch((error) => {
            update();
          });
  };

  return (
    <>
      <Header />
      <TodayContainer>
        <TodayHeader active={progress > 0}>
          <h2>
            {dayjs().locale("pt-br").format("dddd")}, {dayjs().format("DD/MM")}
          </h2>
          {progress > 0 ? (
            <h3>{progress}% dos h??bitos conclu??dos</h3>
          ) : (
            <h3>Nenhum h??bito conclu??do ainda</h3>
          )}
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
                    Sequ??ncia atual atual:{" "}
                    <span>{habit.currentSequence} dias</span>
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
