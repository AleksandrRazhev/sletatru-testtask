import { Logo } from "../Logo/Logo";
import { LogoMobile } from "../LogoMobile/LogoMobile";
import { Burger } from "../Burger/Burger";
import style from "./Header.module.scss";
import { Tel } from "./Tel/Tel";
import { Enter } from "./Enter/Enter";

export const Header: React.FC = (): JSX.Element => {
  return (
    <div className={style.header}>
      <Logo />
      <LogoMobile />
      <Tel />
      <Enter />
      <Burger />
    </div>
  );
};
