import { Button } from "../../UI/Button/Button";
import { Checkbox } from "../../UI/Checkbox/Checkbox";

import style from "./BookingButtons.module.scss";

export const BookingButtons: React.FC = (): JSX.Element => {
  return (
    <div className={style.bookingButtons}>
      <Button>Забронировать</Button>
      <Checkbox />
    </div>
  );
};
