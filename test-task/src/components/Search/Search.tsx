import { DropDownButton } from "../svg/DropDownButton";
import { SearchImg } from "../svg/SearchImg";
import { Button } from "../UI/Button/Button";
import { Input } from "../UI/Input/Input";

import style from "./Search.module.scss";

export const Search: React.FC = (): JSX.Element => {
  return (
    <article className={style.search}>
      <div className={style.dropdownBlock}>
        <span className={style.label}>Вылет из</span>
        <div className={style.dropdown}>
          <span className={style.sityName}>Москвы</span>
          <button className={style.buttonDropdown}>
            <DropDownButton />
          </button>
        </div>
      </div>
      <form
        className={style.form}
        action="https://jsonplaceholder.typicode.com/posts"
        method="POST"
      >
        <Input
          name="where"
          type="text"
          placeholder=""
          defaultValue="Все направления"
          label="Куда летим"
        />
        <Input
          name="date"
          type="text"
          placeholder=""
          defaultValue="29 дек 22 – 09 янв 23"
          label="Даты вылета"
        />
        <Input
          name="nights"
          type="text"
          placeholder=""
          defaultValue="от 7 до 14"
          label="Ночей"
        />
        <Input
          name="tourists"
          type="text"
          placeholder=""
          defaultValue="2 взрослых"
          label="Туристов"
        />
        <Button>
          <div className={style.buttonChildren}>
            <div className={style.searchImg}>
              <SearchImg />
            </div>
            <p className={style.text}>Найти туры</p>
          </div>
        </Button>
      </form>
    </article>
  );
};
