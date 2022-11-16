import { ReactNode } from "react";
import { Checkbox } from "../UI/Checkbox/Checkbox";

import style from "./CheckboxBlock.module.scss";

interface CheckboxBlockProps {
  children: ReactNode;
  setAllow?: Function;
}

export const CheckboxBlock: React.FC<CheckboxBlockProps> = ({
  setAllow,
  children,
}): JSX.Element => {
  return (
    <div data-selector="checkbox-block" className={style.textBlock}>
      <Checkbox setAllow={setAllow} />
      {children}
    </div>
  );
};
