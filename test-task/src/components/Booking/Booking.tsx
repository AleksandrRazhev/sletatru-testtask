import { StickyTourInfo } from "../StickyTourInfo/StickyTourInfo";
import { Input } from "../UI/Input/Input";
import { BuyerData } from "./BuyerData/BuyerData";
import { TouristInfo } from "./TouristInfo/TouristInfo";

import style from "./Booking.module.scss";
import { Payment } from "./Payment/Payment";
import { BookingButtons } from "./BookingButtons/BookingButtons";

export const Booking: React.FC = (): JSX.Element => {
  return (
    <section className={style.booking}>
      <div className={style.container}>
        <div className={style.tourInfo}>
          <h2 className={style.bookingTitle}>Бронирование тура</h2>
          <div>
            <StickyTourInfo />
            <div className={style.help}>
              <h3 className={style.helpTitle}>Нужна помощь?</h3>
              <a href="tel:+78003339963" className={style.helpPhone}>
                8 800 333 99 63
              </a>
            </div>
          </div>
        </div>
        <form
          className={style.form}
          action="https://jsonplaceholder.typicode.com/posts"
          method="POST"
        >
          <BuyerData />
          <TouristInfo />
          <div className={style.paymentButtons}>
            <Payment />
            <BookingButtons />
          </div>
        </form>
      </div>
    </section>
  );
};
