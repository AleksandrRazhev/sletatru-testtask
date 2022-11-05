import { StickyTourInfo } from "../StickyTourInfo/StickyTourInfo";
import style from "./Booking.module.scss";

export const Booking: React.FC = (): JSX.Element => {
  return (
    <section className={style.booking}>
      <div className={style.container}>
        <h2 className={style.bookingTitle}>Бронирование тура</h2>
        <StickyTourInfo />
        <div className={style.help}>
          <h3 className={style.title}>Нужна помощь?</h3>
          <a href="tel:+78003339963">8 800 333 99 63</a>
        </div>
        <form action="">
          <div className={style.buyerDetails}>
            <h3 className={style.title}>Данные покупателя</h3>
            <input type="email" name="email" />
            <input type="tel" name="tel" />
          </div>
          <div className={style.touristInfo}>
            <h3 className={style.title}>Информация о туристах</h3>
            <p>Пусть это заполнят твои двуногие</p>
            <div>
              <p>Данные о первом двуногом</p>
              <input type="text" name="surnameFirst" />
            </div>
            <div>
              <p>Данные о втором двуногом</p>
            </div>
          </div>
        </form>
        <div className={style.payment}></div>
      </div>
    </section>
  );
};
