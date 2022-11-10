import { useState } from "react";
import { DropDownButton } from "../../svg/DropDownButton";

import style from "./Tel.module.scss";

export const Tel: React.FC = (): JSX.Element => {
  const [state, setState] = useState(false);

  const listClass = (): string => (state ? style.telActive : style.tel);

  return (
    <div className={listClass()} data-selector="header-tel">
      <ul className={style.list}>
        <li className={style.listItem}>
          <a href="tel:+78123092666">8 (812) 309-26-66</a>
        </li>
        <div className={style.dropDown} data-selector="header-tel-dropdown">
          <li className={style.listItem}>
            <a href="tel:+78123092666">8 (812) 309-26-66</a>
          </li>
        </div>
      </ul>
      <button
        className={style.button}
        onClick={() => setState((state) => !state)}
      >
        <div className={style.buttonImg}>
          <DropDownButton />
        </div>
      </button>
    </div>
  );
};
