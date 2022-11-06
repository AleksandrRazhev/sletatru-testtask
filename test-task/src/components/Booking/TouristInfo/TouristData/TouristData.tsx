import { DropDownButton } from "../../../svg/DropDownButton";
import { Input } from "../../../UI/Input/Input";

import style from "./TouristData.module.scss";

interface TouristDataProps {
  data: { name: string; placeholder: string }[];
  title: string;
}

export const TouristData = (props: TouristDataProps): JSX.Element => {
  const { title, data } = props;

  return (
    <div className={style.touristData}>
      <div className={style.titleBlock}>
        <p>{title}</p>
        <button className={style.button}>
          <DropDownButton />
        </button>
      </div>
      {data.map((item) => (
        <label key={item.name} className={style.inputTuorist}>
          <Input type="text" name={item.name} placeholder={item.placeholder} />
        </label>
      ))}
    </div>
  );
};
