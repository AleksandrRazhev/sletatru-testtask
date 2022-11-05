import style from "./Booking.module.scss";

export const Booking: React.FC = (): JSX.Element => {
  return (
    <section className={style.booking}>
      <h2 className={style.title}>Бронирование тура</h2>
    </section>
  );
};
