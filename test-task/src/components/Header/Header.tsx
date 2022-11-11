import { useState } from "react";

import { Tel } from "./Tel/Tel";
import { Enter } from "./Enter/Enter";
import { LogoColor } from "../svg/LogoColor";
import { LogoWhite } from "../svg/LogoWhite";
import { MainScreen } from "../MainScreen/MainScreen";
import { Tour } from "../Tour/Tour";

import style from "./Header.module.scss";

export const Header: React.FC = (): JSX.Element => {
  const [state, setState] = useState(false);
  const mobileVisible = () => (state ? style.headerBurgerOn : style.header);
  return (
    <div className={style.relative}>
      <header className={mobileVisible()}>
        <div className={style.logoColor}>
          <LogoColor />
        </div>
        <div className={style.logoWhite}>
          <LogoWhite />
        </div>
        <div className={style.dropDown}>
          <Tel />
          <Enter />
        </div>
        <button
          className={style.buttonBurger}
          onClick={() => setState((state) => !state)}
        >
          <div className={style.crossBurger}>
            <div>
              <span className={style.burgerLine}></span>
              <span className={style.burgerLine}></span>
              <span className={style.burgerLine}></span>
            </div>
          </div>
        </button>
      </header>
      <MainScreen />
      <div className={style.absolute}>
        <Tour />
      </div>
    </div>
  );
};
