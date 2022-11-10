import { useState } from "react";

import { Tel } from "./Tel/Tel";
import { Enter } from "./Enter/Enter";
import { LogoColor } from "../svg/LogoColor";
import { LogoWhite } from "../svg/LogoWhite";
import { Burger } from "../svg/Burger";

import style from "./Header.module.scss";

export const Header: React.FC = (): JSX.Element => {
  const [state, setState] = useState(false);
  const mobileVisible = () => (state ? style.headerBurgerOn : style.header);
  return (
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
        <Burger />
      </button>
    </header>
  );
};
