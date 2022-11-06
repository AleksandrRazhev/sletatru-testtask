import { useState } from "react";
import { DropDownButton } from "../../../svg/DropDownButton";
import { Input } from "../../../UI/Input/Input";

import style from "./TouristData.module.scss";

interface TouristDataProps {
  data: { name: string; placeholder: string }[];
  title: string;
  closed: boolean;
}

export const TouristData = (props: TouristDataProps): JSX.Element => {
  const { title, data, closed } = props;

  const [state, setState] = useState(closed);

  const onOpen = () => {
    setState(!state);
  };

  return (
    <div className={state ? style.touristDataClosed : style.touristData}>
      <div className={style.titleBlock}>
        <p>{title}</p>
        <button type="button" className={style.button} onClick={() => onOpen()}>
          <DropDownButton />
        </button>
      </div>
      <div className={style.inputsBlock}>
        {data.map((item) => (
          <label key={item.name} className={style.inputTuorist}>
            <Input
              type="text"
              name={item.name}
              placeholder={item.placeholder}
            />
          </label>
        ))}
      </div>
    </div>
  );
};
