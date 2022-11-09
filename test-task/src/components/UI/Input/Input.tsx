import style from "./Input.module.scss";

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  defaultValue?: string;
  label?: string;
}

export const Input = (props: InputProps): JSX.Element => {
  const { name, type, placeholder, defaultValue, label } = props;
  return (
    <label data-selector="input" className={style.input}>
      {label ? <span>{label}</span> : null}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </label>
  );
};
