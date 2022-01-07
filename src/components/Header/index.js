import { HeaderContainer } from "./style";
import logo from "../../assets/smallLogo.svg";

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <img src={logo} alt="TrackIt" />
        <img src={logo} alt="TrackIt" />
      </HeaderContainer>
    </>
  );
}
