import style from "./App.module.scss";
import { Header } from "../Header/Header";
import { MainScreen } from "../MainScreen/MainScreen";
import { Booking } from "../Booking/Booking";

export const App: React.FC = (): JSX.Element => {
  return (
    <div className={style.app}>
      <div>
        <Header />
        <MainScreen />
      </div>
      <main className={style.main}>
        <Booking />
        <div style={{ backgroundColor: "red" }}>CallMe</div>
      </main>
      <footer style={{ backgroundColor: "red" }}>footer</footer>
    </div>
  );
};
