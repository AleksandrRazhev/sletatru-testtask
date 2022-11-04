import style from "./Tel.module.scss";

export const Tel: React.FC = (): JSX.Element => {
  return (
    <div className={style.tel}>
      <ul className={style.list}>
        <li>
          <a href="tel:+78123092666">8 (812) 309-26-66</a>
        </li>
        <li>
          <a href="tel:+78123092666">8 (812) 309-26-66</a>
        </li>
      </ul>
      <button>b</button>
    </div>
  );
};
