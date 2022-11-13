import { EnterImg } from "../../svg/EnterImg";
import style from "./Enter.module.scss";

export const Enter: React.FC = (): JSX.Element => {
  return (
    <div className={style.enter}>
      <button className={style.button}>
        <EnterImg />
        <span className={style.buttonText}>Войти</span>
      </button>
    </div>
  );
};
