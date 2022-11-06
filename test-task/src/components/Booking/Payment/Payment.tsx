import { Ruble } from "../../svg/Ruble";

import style from "./Payment.module.scss";

export const Payment: React.FC = (): JSX.Element => {
  return (
    <div className={style.payment}>
      <p className={style.title}>К оплате</p>
      <div className={style.money}>
        <span className={style.text}>200 000</span>
        <div className={style.img}>
          <Ruble />
        </div>
      </div>
    </div>
  );
};
