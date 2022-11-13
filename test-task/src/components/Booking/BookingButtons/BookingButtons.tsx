import { useState } from "react";
import { CheckboxBlock } from "../../CheckboxBlock/CheckboxBlock";
import { Button } from "../../UI/Button/Button";

import style from "./BookingButtons.module.scss";

export const BookingButtons: React.FC = (): JSX.Element => {
  const [allow, setAllow] = useState(false);

  return (
    <div className={style.bookingButtons}>
      <Button disabled={allow ? false : true}>Забронировать</Button>
      <CheckboxBlock setAllow={setAllow}>
        <p className={style.text}>
          Я согласен на обработку своих персональных данных согласно
          <a href="#"> политике конфиденциальности </a>и с условиями
          <a href="#"> оферты</a>
        </p>
      </CheckboxBlock>
    </div>
  );
};
