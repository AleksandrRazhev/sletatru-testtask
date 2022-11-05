import { Calendar } from "../svg/Calendar";
import { Clock } from "../svg/Clock";
import { Dog } from "../svg/Dog";
import { Group } from "../svg/Group";
import { MapPoint } from "../svg/MapPoint";
import { StickyFooter } from "./StickyFooter/StickyFooter";
import style from "./StickyTourInfo.module.scss";

export const StickyTourInfo: React.FC = (): JSX.Element => {
  return (
    <article className={style.stickyTourInfo}>
      <div className={style.filter}>
        <span className={style.filterName}>Групповой</span>
        <span className={style.filterImage}>
          <Dog />
        </span>
        <span className={style.filterNumber}>10</span>
      </div>
      <h2 className={style.title}>Сёрф-тур для хороших мальчиков</h2>
      <ul className={style.list}>
        <li className={style.listItem}>
          <MapPoint />
          <span>Аэропорт Хайнань</span>
        </li>
        <li className={style.listItem}>
          <Clock />
          <span>3 дня / 4 ночи</span>
        </li>
        <li className={style.calendar}>
          <Calendar />
          <div className={style.calendarRow}>
            <span>31 сентября</span>
            <span className={style.dateFirst}>Пн</span>
            <span className={style.dash}>—</span>
            <span>5 ноября</span>
            <span className={style.dateLast}>Вс</span>
          </div>
        </li>
        <li className={style.listItem}>
          <Group />
          <span>1 пес + 2 человека</span>
        </li>
      </ul>
      <button className={style.button}>Ввести промокод</button>
      <StickyFooter />
    </article>
  );
};
