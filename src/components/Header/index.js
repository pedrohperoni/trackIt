import { HeaderContainer } from "./style";
import { useContext } from "react";
import UserContext from "../../contexts/userContext";

import { Link } from "react-router-dom";

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <h1>TrackIt</h1>
        </Link>

        <img src={user.image} alt="User" />
      </HeaderContainer>
    </>
  );
}
