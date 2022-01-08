import { Link } from "react-router-dom";
import { FooterContainer } from "./style";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import ProgressContext from "../../contexts/progressContext";
import { useContext } from "react";

export default function Footer() {
  const { progress } = useContext(ProgressContext);
  const percentage = progress;
  return (
    <>
      <FooterContainer>
        <Link to="/habitos">Hábitos</Link>
        <Link to="/hoje">
          <div style={{ width: 91, height: 91 }}>
            <CircularProgressbar
              value={percentage}
              text="Hoje"
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#52b6ff",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent",
              })}
            />
          </div>
        </Link>
        <Link to="/historico">Histórico</Link>
      </FooterContainer>
    </>
  );
}
