import { useContext, useEffect, useState } from "react";

import { CallMeBackGetState } from "../../CallMeBack/CallMeBack";

import style from "./Button.module.scss";

interface ButtonProps {
  children: JSX.Element | string;
}

export const Button = ({ children }: ButtonProps): JSX.Element => {
  const [allowClick, setAllowClick] = useState(true);
  const context: boolean = useContext(CallMeBackGetState);

  useEffect(() => {
    setAllowClick(context);
  }, [context]);

  return (
    <button
      className={style.button}
      data-selector="button"
      disabled={!allowClick}
    >
      {children}
    </button>
  );
};
