import style from "./Footer.module.scss";

export const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.mainGrid}></div>
      </div>
    </footer>
  );
};
