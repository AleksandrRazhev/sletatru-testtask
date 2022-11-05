import style from "./Booking.module.scss";

export const Booking: React.FC = (): JSX.Element => {
  return (
    <section className={style.booking}>
      <div className={style.container}>
        <h2 className={style.title}>Бронирование тура</h2>
      </div>
    </section>
  );
};
