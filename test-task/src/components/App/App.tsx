import style from "./App.module.scss";
import { Header } from "../Header/Header";
import { MainScreen } from "../MainScreen/MainScreen";

export const App: React.FC = (): JSX.Element => {
  return (
    <div className={style.app}>
      <Header />
      <main>
        <MainScreen />
      </main>
      <footer>footer</footer>
    </div>
  );
};
