import { Header } from "../Header/Header";
import { MainScreen } from "../MainScreen/MainScreen";
import { Booking } from "../Booking/Booking";
import { CallMeBack } from "../CallMeBack/CallMeBack";
import { Footer } from "../Footer/Footer";

import style from "./App.module.scss";

export const App: React.FC = (): JSX.Element => {
  return (
    <div className={style.app}>
      <Header />
      <main className={style.main}>
        <h1 className={style.visuallyHidden}>Тестовое задание для sletat.ru</h1>
        <Booking />
        <CallMeBack />
      </main>
      <Footer />
    </div>
  );
};
