import { Ruble } from "../../svg/Ruble";
import style from "./StickyFooter.module.scss";

export const StickyFooter: React.FC = (): JSX.Element => {
  return (
    <div className={style.footer}>
      <div className={style.priceTour}>
        <span className={style.title}>Стоимость тура</span>
        <div className={style.price}>
          <span>100 000</span>
          <span>
            <Ruble />
          </span>
          <span>x 2</span>
        </div>
      </div>
      <div className={style.toPaid}>
        <span className={style.titlePaid}>Итого к оплате</span>
        <div className={style.pricePaid}>
          <span>200 000</span>
          <Ruble />
        </div>
      </div>
    </div>
  );
};
