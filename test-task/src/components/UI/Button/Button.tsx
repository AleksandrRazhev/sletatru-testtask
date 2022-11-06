import style from "./Button.module.scss";

interface ButtonProps {
  children: JSX.Element | string;
}

export const Button = ({ children }: ButtonProps): JSX.Element => {
  return <button className={style.button}>{children}</button>;
};
