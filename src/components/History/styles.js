import styled from "styled-components";

const HistoryContainer = styled.div`
  margin-top: 70px;
  background-color: #f2f2f2;
  height: 100vh;
  width: 100vw;
`;

const HistoryHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 21px 0px 30px 0px;
  margin: 0 17px;

  h2 {
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
    margin-bottom: 17px;
  }

  p {
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
  }
`;

export { HistoryContainer, HistoryHeader };
