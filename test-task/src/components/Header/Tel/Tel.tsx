import { useState } from "react";
import { DropDownButton } from "../../svg/DropDownButton";

import style from "./Tel.module.scss";

export const Tel: React.FC = (): JSX.Element => {
  const [state, setState] = useState(false);

  const listClass = (): string => (state ? style.telActive : style.tel);

  return (
    <div className={listClass()}>
      <ul className={style.list}>
        <li className={style.listItem}>
          <a href="tel:+78123092666">8 (812) 309-26-66</a>
        </li>
        <li className={style.listItem}>
          <a href="tel:+78123092666">8 (812) 309-26-66</a>
        </li>
      </ul>
      <button
        className={style.button}
        onClick={() => setState((state) => !state)}
      >
        <div className={style.dropdownImg}>
          <DropDownButton />
        </div>
      </button>
    </div>
  );
};
