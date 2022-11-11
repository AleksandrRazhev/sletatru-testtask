import { useContext, useState } from "react";

import { CallMeBackSetState } from "../../CallMeBack/CallMeBack";

import { CheckboxChecked } from "../../svg/CheckboxChecked";

import style from "./Checkbox.module.scss";

export const Checkbox: React.FC = (): JSX.Element => {
  const [state, setState] = useState(false);

  const context: Function | null = useContext(CallMeBackSetState);

  const onChecked = (e: React.MouseEvent<HTMLInputElement>) => {
    setState((state) => !state);
    if (context !== null) {
      context(!state);
    }
  };

  return (
    <label className={style.checkbox}>
      <input
        type="checkbox"
        name="checkbox"
        defaultChecked={state}
        onClick={(e) => onChecked(e)}
      />
      <div className={style.custom}>
        <CheckboxChecked />
      </div>
    </label>
  );
};
