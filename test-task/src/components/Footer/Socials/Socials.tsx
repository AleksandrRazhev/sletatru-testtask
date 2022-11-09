import { Odnoklassniki } from "../../svg/Odnoklassniki";
import { Telegram } from "../../svg/Telegram";
import { VK } from "../../svg/VK";

import style from "./Socials.module.scss";

export const Socials: React.FC = (): JSX.Element => {
  return (
    <ul className={style.socials}>
      <li className={style.socialItem}>
        <a href="#" className={style.socialLink}>
          <VK />
        </a>
      </li>
      <li className={style.socialItem}>
        <a href="#" className={style.socialLink}>
          <Odnoklassniki />
        </a>
      </li>
      <li className={style.socialItem}>
        <a href="#" className={style.socialLink}>
          <Telegram />
        </a>
      </li>
    </ul>
  );
};
