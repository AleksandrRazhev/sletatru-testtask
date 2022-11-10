import style from "./MainScreen.module.scss";

export const MainScreen: React.FC = (): JSX.Element => {
  return (
    <section className={style.mainScreen}>
      <div className={style.block}>
        <h2 className={style.title}>Сёрф-тур для хороших мальчиков</h2>
        <p className={style.subtitle}>по России и за рубежом в 2022</p>
      </div>
    </section>
  );
};
