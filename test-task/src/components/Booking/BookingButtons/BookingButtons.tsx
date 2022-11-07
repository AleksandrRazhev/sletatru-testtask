import { Button } from "../../UI/Button/Button";
import { Checkbox } from "../../UI/Checkbox/Checkbox";

import style from "./BookingButtons.module.scss";

export const BookingButtons: React.FC = (): JSX.Element => {
  return (
    <div className={style.bookingButtons}>
      <Button>Забронировать</Button>
      <div className={style.textBlock}>
        <Checkbox />
        <p className={style.text}>
          Я согласен на обработку своих персональных данных согласно
          <a href=""> политике конфиденциальности </a>и с условиями
          <a href=""> оферты</a>
        </p>
      </div>
    </div>
  );
};
