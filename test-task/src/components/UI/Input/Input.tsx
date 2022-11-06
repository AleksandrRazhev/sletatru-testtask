import style from "./Input.module.scss";

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
}

export const Input = (props: InputProps): JSX.Element => {
  const { name, type, placeholder } = props;
  return (
    <label className={style.input}>
      <input type={type} name={name} placeholder={placeholder} />
    </label>
  );
};
