import style from "./StickyTourInfo.module.scss";

export const StickyTourInfo: React.FC = (): JSX.Element => {
  return (
    <article className={style.stickyTourInfo}>
      <span>Групповой</span>
      <h2>Сёрф-тур для хороших мальчиков</h2>
      <p>Аэропорт Хайнань</p>
      <p>3 дня / 4 ночи</p>
      <div>
        <span>31 сентября</span>
        <span>Пн</span>
        <span>—</span>
        <span>5 ноября</span>
        <span>Вс</span>
      </div>
      <p>1 пес + 2 человека</p>
      <button>Ввести промокод</button>
      <p>Стоимость тура</p>
      <p>Итого к оплате</p>
    </article>
  );
};
