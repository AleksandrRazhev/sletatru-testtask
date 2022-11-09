import style from "./Hotline.module.scss";

export const Hotline: React.FC = (): JSX.Element => {
  return (
    <div className={style.hotLine}>
      <a href="tel:+78003339963">
        <h3>Горячая линия</h3>
        <span>8 800 333 99 63</span>
      </a>
      <a href="mailto:info@sletat.ru">info@sletat.ru</a>
    </div>
  );
};
