import { Input } from "../../UI/Input/Input";
import style from "./BuyerData.module.scss";

export const BuyerData: React.FC = (): JSX.Element => {
  return (
    <div className={style.buyerData}>
      <h3 className={style.title}>Данные покупателя</h3>
      <div className={style.inputBlock}>
        <label className={style.input}>
          <Input type="email" name="email" placeholder="Email" />
        </label>
        <label className={style.input}>
          <Input type="tel" name="tel" placeholder="Телефон" />
        </label>
      </div>
    </div>
  );
};
