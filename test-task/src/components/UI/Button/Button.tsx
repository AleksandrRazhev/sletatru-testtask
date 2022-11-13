import style from "./Button.module.scss";

interface ButtonProps {
  children: JSX.Element | string;
  disabled?: boolean;
}

export const Button = ({ children, disabled }: ButtonProps): JSX.Element => {
  return (
    <button disabled={disabled} className={style.button} data-selector="button">
      {children}
    </button>
  );
};
