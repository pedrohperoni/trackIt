import { HeaderContainer } from "./style";
import logo from "../../assets/smallLogo.svg";

import { useContext } from "react";
import UserContext from "../../contexts/userContext";
import TokenContext from "../../contexts/tokenContext";

export default function Header() {
  const { user } = useContext(UserContext);
  const { token } = useContext(TokenContext);
  return (
    <>
      <HeaderContainer>
        <img src={logo} alt="TrackIt" />
        <img src={user.image} alt="TrackIt" />
      </HeaderContainer>
    </>
  );
}
