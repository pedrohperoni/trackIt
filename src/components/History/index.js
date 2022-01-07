import Footer from "../Footer";
import Header from "../Header";
import { HistoryContainer, HistoryHeader } from "./styles";

export default function History() {
  return (
    <>
      <Header />
      <HistoryContainer>
        <HistoryHeader>
          <h2>Histórico</h2>
          <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </HistoryHeader>
      </HistoryContainer>
      <Footer />
    </>
  );
}
