import style from "./Burger.module.scss";

export const Burger: React.FC = (): JSX.Element => {
  return (
    <svg
      className={style.burger}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 5H18" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M2 10H18" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M2 15H18" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};
