import { useState } from "react";

import { Search } from "../Search/Search";

import style from "./Tour.module.scss";

export const Tour: React.FC = (): JSX.Element => {
  const [state, setState] = useState(false);

  const activeClassName = () => (state ? style.tourActive : style.tour);

  return (
    <div className={activeClassName()}>
      <div className={style.block}>
        <button
          className={style.button}
          onClick={() => setState((state) => !state)}
        >
          <h2 className={style.title}>Сёрф-тур для хороших мальчиков</h2>
          <p className={style.subtitle}>по России и за рубежом в 2022</p>
        </button>
        <div className={style.hidderSearch}>
          <Search />
        </div>
      </div>
    </div>
  );
};
