import { ReactNode } from "react";
import { Checkbox } from "../UI/Checkbox/Checkbox";

import style from "./CheckboxBlock.module.scss";

interface CheckboxBlockProps {
  children: ReactNode;
}

export const CheckboxBlock = (props: CheckboxBlockProps): JSX.Element => {
  return (
    <div className={style.textBlock}>
      <Checkbox />
      {props.children}
    </div>
  );
};
