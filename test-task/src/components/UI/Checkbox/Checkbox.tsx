import { CheckboxChecked } from "../../svg/CheckboxChecked";

import style from "./Checkbox.module.scss";

interface CheckboxProps {
  setAllow?: Function;
}

export const Checkbox = (props: CheckboxProps): JSX.Element => {
  const { setAllow } = props;
  const onChecked = (e: React.MouseEvent<HTMLInputElement>) => {
    if (setAllow) {
      const checked = e.target as HTMLInputElement;
      setAllow(checked.checked);
    } else {
      return;
    }
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
