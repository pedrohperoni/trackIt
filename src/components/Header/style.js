import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 70px;
  padding: 0 18px;

  a {
    text-decoration: none;
  }

  h1 {
    color: #fff;
    font-family: "Playball", cursive;
    font-size: 39px;
    line-height: 48px;
  }

  img {
    :last-of-type {
      border-radius: 50px;
      width: 51px;
      height: 51px;
    }
  }
`;

export { HeaderContainer };
