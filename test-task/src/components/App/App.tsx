import style from "./App.module.scss";
import { Header } from "../Header/Header";

export const App: React.FC = (): JSX.Element => {
  return (
    <div className={style.app}>
      <Header />
      <main>
        main
        <section>section</section>
        <section>section</section>
        <section>section</section>
      </main>
      <footer>footer</footer>
    </div>
  );
};
