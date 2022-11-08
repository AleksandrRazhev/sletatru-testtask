import { Checkbox } from "../UI/Checkbox/Checkbox";

import style from "./CheckboxBlock.module.scss";

export const CheckboxBlock: React.FC = (): JSX.Element => {
  return (
    <div className={style.textBlock}>
      <Checkbox />
      <p className={style.text}>
        Я согласен на обработку своих персональных данных согласно
        <a href="#"> политике конфиденциальности </a>и с условиями
        <a href="#"> оферты</a>
      </p>
    </div>
  );
};
