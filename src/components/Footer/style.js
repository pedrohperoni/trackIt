import styled from "styled-components";

const FooterContainer = styled.footer`
  position: fixed;
  z-index: 10;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: space-around;

  a {
    color: #52b6ff;
    font-size: 18px;
    line-height: 22.47px;
    text-decoration: none;
  }

  div {
    margin-bottom: 48px;
  }
`;

export { FooterContainer };
