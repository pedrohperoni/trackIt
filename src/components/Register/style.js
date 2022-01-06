import styled from "styled-components";

const RegisterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  button {
    width: 100%;
    height: 45px;
    border-radius: 4.5px;
    background-color: #52b6ff;
    color: #fff;
    font-size: 21px;
    line-height: 26px;
    border: 0px;
  }

  a {
    font-size: 14px;
    color: #52b6ff;
    text-decoration: underline;
    line-height: 17px;
    margin-top: 25px;
  }
`;

export { RegisterContainer };
