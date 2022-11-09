import { Hotline } from "./Hotline/Hotline";
import { MainBlock } from "./MainBlock/MainBlock";
import { Socials } from "./Socials/Socials";

import style from "./Footer.module.scss";

export const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.mainGrid}>
          <Hotline />
          <MainBlock />
          <Socials />
        </div>
      </div>
    </footer>
  );
};
