import { ReactNode } from "react";
import { Checkbox } from "../UI/Checkbox/Checkbox";

import style from "./CheckboxBlock.module.scss";

interface CheckboxBlockProps {
  children: ReactNode;
  setAllow?: Function;
}

export const CheckboxBlock = (props: CheckboxBlockProps): JSX.Element => {
  const { setAllow } = props;
  return (
    <div data-selector="checkbox-block" className={style.textBlock}>
      <Checkbox setAllow={setAllow} />
      {props.children}
    </div>
  );
};
