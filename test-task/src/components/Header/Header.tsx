import { Burger } from "../Burger/Burger";
import { Tel } from "./Tel/Tel";
import { Enter } from "./Enter/Enter";
import { LogoColor } from "../svg/LogoColor";
import { LogoWhite } from "../svg/LogoWhite";

import style from "./Header.module.scss";

export const Header: React.FC = (): JSX.Element => {
  return (
    <header className={style.header}>
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
      <Burger />
    </header>
  );
};
