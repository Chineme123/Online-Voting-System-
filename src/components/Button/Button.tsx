import "./Button.css";

interface Props {
  buttonName: String;
  disabled?: boolean;
  className: string;
  to: string;
}

const Button = ({ buttonName, className, disabled, to }: Props) => {
  return (
    <a href={to}>
      <button className={className} disabled={disabled}>
        {buttonName}
      </button>
    </a>
  );
};

export default Button;
