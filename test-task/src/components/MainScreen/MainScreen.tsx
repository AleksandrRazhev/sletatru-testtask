import style from "./MainScreen.module.scss";

export const MainScreen: React.FC = (): JSX.Element => {
  return (
    <section className={style.mainScreen}>
      <h2 className={style.title}>Сёрф-тур для хороших мальчиков</h2>
    </section>
  );
};
