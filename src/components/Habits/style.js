import styled from "styled-components";

const HabitsContainer = styled.div`
  margin-top: 70px;
  background-color: #f2f2f2;
  width: 100vw;
  min-height: 100vh;
  padding-bottom: 90px;
  p {
    font-size: 18px;
    line-height: 22.5px;
    color: #666666;
    margin: 0 17px;
  }
`;

const HabitsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 21px 0px 30px 0px;
  margin: 0 17px;

  button {
    background-color: #52b6ff;
    color: #fff;
    height: 35px;
    width: 40px;
    border-radius: 4.6px;
    border: 0;
    font-size: 27px;
    line-height: 33.72px;
    :hover {
      opacity: 0.5;
    }
  }

  h2 {
    font-size: 23px;
    line-height: 29px;
    color: #126ba5;
  }
`;

const HabitsCreator = styled.div`
  background-color: #fff;
  height: 180px;
  padding: 18px;
  margin: 0 17px 30px 17px;
  border-radius: 5px;

  input {
    width: 100%;
    height: 45px;
    color: #666666;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    font-size: 20px;
    line-height: 25px;
    padding-left: 11px;

    ::placeholder {
      font-size: 20px;
      line-height: 25px;
      color: #dbdbdb;
    }
  }
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: ${(props) => (props.active ? "#cfcfcf" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#dbdbdb")};
  border: 1px solid #d4d4d4;
  margin-top: 10px;
  margin-right: 4px;
  font-size: 19.976px;
  line-height: 25px;
  text-align: center;

  :hover {
    opacity: 0.5;
  }
`;

const HabitsCreatorMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    width: 84px;
    height: 35px;
    border-radius: 5px;
    font-size: 15.976px;
    line-height: 20px;
    margin-top: 29px;
    margin-bottom: 15px;

    :first-of-type {
      background-color: #fff;
      border: 0;
      color: #52b6ff;
      margin-right: 23px;
    }
    :last-of-type {
      background-color: #52b6ff;
      color: #fff;
      border: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    :hover {
      opacity: 0.5;
    }
  }
`;

const HabitItem = styled.div`
  height: 91px;
  margin: 0 17px 10px 17px;
  padding: 13px 11px 15px 15px;
  background-color: #fff;
  position: relative;
  border-radius: 5px;

  h1 {
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
  }
  img {
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
  }
  button {
    :first-of-type {
      position: absolute;
      top: 0;
      right: 0;
      margin: 0px;
      background-color: #fff;
      border: 0px;
      text-align: center;
      height: 34px;
      width: 33px;
    }

    height: 30px;
    width: 30px;
    font-size: 19.976px;
    line-height: 25px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    margin-right: 4px;
    margin-top: 8px;
  }
`;

export {
  HabitsContainer,
  HabitsHeader,
  HabitsCreator,
  HabitsCreatorMenu,
  HabitItem,
  Button,
};
