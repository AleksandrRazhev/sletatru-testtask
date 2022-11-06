import { CheckboxChecked } from "../../svg/CheckboxChecked";
import style from "./Checkbox.module.scss";

export const Checkbox: React.FC = (): JSX.Element => {
  return (
    <label className={style.checkbox}>
      <input type="checkbox" name="checkbox" />
      <div className={style.custom}>
        <CheckboxChecked />
      </div>
    </label>
  );
};
