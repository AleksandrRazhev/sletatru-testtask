import { Calendar } from "../svg/Calendar";
import { Clock } from "../svg/Clock";
import { Dog } from "../svg/Dog";
import { Group } from "../svg/Group";
import { MapPoint } from "../svg/MapPoint";
import style from "./StickyTourInfo.module.scss";

export const StickyTourInfo: React.FC = (): JSX.Element => {
  return (
    <article className={style.stickyTourInfo}>
      <div>
        <span>Групповой</span>
        <Dog />
      </div>
      <h2>Сёрф-тур для хороших мальчиков</h2>
      <div>
        <MapPoint />
        <span>Аэропорт Хайнань</span>
      </div>
      <div>
        <Clock />
        <span>3 дня / 4 ночи</span>
      </div>
      <div>
        <Calendar />
        <span>31 сентября</span>
        <span>Пн</span>
        <span>—</span>
        <span>5 ноября</span>
        <span>Вс</span>
      </div>
      <div>
        <Group />
        <span>1 пес + 2 человека</span>
      </div>
      <button>Ввести промокод</button>
      <p>Стоимость тура</p>
      <p>Итого к оплате</p>
    </article>
  );
};
