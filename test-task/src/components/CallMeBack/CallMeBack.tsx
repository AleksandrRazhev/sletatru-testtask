import { CheckboxBlock } from "../CheckboxBlock/CheckboxBlock";
import { Button } from "../UI/Button/Button";
import { Input } from "../UI/Input/Input";

import style from "./CallMeBack.module.scss";

export const CallMeBack: React.FC = (): JSX.Element => {
  return (
    <section className={style.callMeBack}>
      <div className={style.container}>
        <div className={style.block}>
          <h2 className={style.title}>Нужна помощь?</h2>
          <p className={style.subtitle}>
            Наши менеджеры с удовольствием погавкают с вами о всех ваших
            вопросах
          </p>
          <form
            className={style.form}
            action="https://jsonplaceholder.typicode.com/posts"
            method="POST"
          >
            <Input
              name="phone"
              placeholder=""
              type="tel"
              defaultValue="+7"
              label="Ваш номер телефона"
            />
            <Button>Перезвоните мне</Button>
            <CheckboxBlock>
              <p>
                Я согласен на обработку своих персональных данных согласно
                <a href="#"> политике конфиденциальности </a>
              </p>
            </CheckboxBlock>
          </form>
        </div>
        <div className={style.picture}></div>
      </div>
    </section>
  );
};
