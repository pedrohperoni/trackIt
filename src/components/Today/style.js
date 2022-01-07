import styled from "styled-components";

const TodayContainer = styled.div`
  margin-top: 50px;
  background-color: #f2f2f2;
  height: 100vh;
  width: 100vw;
`;

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
  margin: 0 17px;

  display: flex;
  align-items: center;
  justify-content: space-between;

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
    }
  }

  button {
    height: 69px;
    width: 69px;
    background-color: #ebebeb;
    border: 1px solid #e7e7e7;
    border-radius: 5px;
    margin: 13px;
  }
`;

export { TodayContainer, TodayHeader, HabitContainer };
