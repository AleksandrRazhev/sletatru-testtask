import { Input } from "../../UI/Input/Input";
import { TouristData } from "./TouristData/TouristData";

import style from "./TouristInfo.module.scss";

export const TouristInfo: React.FC = (): JSX.Element => {
  const data = [
    { name: "lastname", placeholder: "Фамилия" },
    { name: "firstname", placeholder: "Имя" },
    { name: "middlename", placeholder: "Отчество" },
    { name: "birthday", placeholder: "Дата рождения" },
    { name: "passport", placeholder: "Серия и номер паспорта" },
    { name: "whenissued", placeholder: "Когда выдан" },
    { name: "whomeissued", placeholder: "Кем выдан" },
  ];

  return (
    <div className={style.touristInfo}>
      <div className={style.titleBlock}>
        <h3 className={style.title}>Информация о туристах</h3>
        <p>Пусть это заполнят твои двуногие</p>
      </div>
      <TouristData
        title="Данные о первом двуногом"
        data={data}
        closed={false}
      />
      <TouristData title="Данные о втором двуногом" data={data} closed={true} />
    </div>
  );
};
