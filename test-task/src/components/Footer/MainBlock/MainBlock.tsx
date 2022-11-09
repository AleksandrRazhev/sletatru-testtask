import style from "./MainBlock.module.scss";

export const MainBlock: React.FC = (): JSX.Element => {
  return (
    <div className={style.mainBlock}>
      <nav className={style.nav}>
        <a className={style.navLink} href="#">
          Поиск тура
        </a>
        <a className={style.navLink} href="#">
          О компании
        </a>
        <a className={style.navLink} href="#">
          Travel блог
        </a>
        <a className={style.navLink} href="#">
          Новости
        </a>
        <a className={style.navLink} href="#">
          Партнерам
        </a>
        <a className={style.navLink} href="#">
          Контакты
        </a>
      </nav>
      <div className={style.copyright}>
        <span>
          © 2022 Все права защищены. Используя сайт, вы принимаете условия
          соглашений :
        </span>
        <span>Пользовательское соглашение</span>
        <span>Об ограничении ответственности</span>
        <span>Об обработке персональных данных</span>
        Информация на сайте не является публичной офертой: условия
        сотрудничества. Результаты проведения СОУТ.
        <span>
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </span>
      </div>
    </div>
  );
};
