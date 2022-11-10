import { Header } from "../Header/Header";
import { MainScreen } from "../MainScreen/MainScreen";
import { Booking } from "../Booking/Booking";
import { CallMeBack } from "../CallMeBack/CallMeBack";
import { Footer } from "../Footer/Footer";
import { Search } from "../Search/Search";

import style from "./App.module.scss";

export const App: React.FC = (): JSX.Element => {
  return (
    <div className={style.app}>
      <div>
        <Header />
        <MainScreen />
      </div>
      <main className={style.main}>
        <Booking />
        <CallMeBack />
      </main>
      <Footer />
      <Search />
    </div>
  );
};
