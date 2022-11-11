import { useContext, useState } from "react";

import { CallMeBackSetState } from "../../CallMeBack/CallMeBack";

import { CheckboxChecked } from "../../svg/CheckboxChecked";

import style from "./Checkbox.module.scss";

export const Checkbox: React.FC = (): JSX.Element => {
  const [state, setState] = useState(false);

  const context: Function | null = useContext(CallMeBackSetState);

  const onChecked = (e: React.MouseEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    if (context !== null) {
      context(checked);
    }
    setState(checked);
  };

  return (
    <label className={style.checkbox}>
      <input type="checkbox" name="checkbox" onClick={(e) => onChecked(e)} />
      <div className={style.custom}>
        <CheckboxChecked />
      </div>
    </label>
  );
};
