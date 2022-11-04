import { EnterImg } from "../../EnterImg/EnterImg";
import style from "./Enter.module.scss";

export const Enter: React.FC = (): JSX.Element => {
  return (
    <div className={style.tel}>
      <button>
        <EnterImg />
        <span>Войти</span>
      </button>
    </div>
  );
};
