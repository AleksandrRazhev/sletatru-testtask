import { StickyTourInfo } from "../StickyTourInfo/StickyTourInfo";
import { Input } from "../UI/Input/Input";
import style from "./Booking.module.scss";
import { BuyerData } from "./BuyerData/BuyerData";

export const Booking: React.FC = (): JSX.Element => {
  return (
    <section className={style.booking}>
      <div className={style.container}>
        <div className={style.tourInfo}>
          <h2 className={style.bookingTitle}>Бронирование тура</h2>
          <StickyTourInfo />
          <div className={style.help}>
            <h3 className={style.helpTitle}>Нужна помощь?</h3>
            <a href="tel:+78003339963" className={style.helpPhone}>
              8 800 333 99 63
            </a>
          </div>
        </div>
        <form
          className={style.form}
          action="https://jsonplaceholder.typicode.com/posts"
          method="POST"
        >
          <BuyerData />
          <div className={style.touristInfo}>
            <h3 className={style.title}>Информация о туристах</h3>
            <p>Пусть это заполнят твои двуногие</p>
            <div>
              <p>Данные о первом двуногом</p>
              <label className={style.inputTuorist}>
                <Input type="text" name="surnameFirst" placeholder="Фамилия" />
              </label>
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
