import styled from "styled-components";

const HabitsContainer = styled.div`
  margin-top: 70px;
  background-color: #f2f2f2;
  height: 100vh;
  width: 100vw;
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

export { HabitsContainer, HabitsHeader, HabitsCreator };
