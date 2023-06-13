import { useNavigate } from "react-router-dom";
import {ReactNode} from 'react'
import "./LoginForm.css";

interface Props {
  image: string;
  btname: string;
  imgClass: string;
  to: string;
  children: ReactNode;
}

const LoginForm = ({ image, btname, imgClass, to, children }: Props) => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const form = event.target;
    // Access form values using form.elements or other form library methods
    console.log("Form submitted!");
    navigate(to);
  };

  return (
    <div className="form">
      <form action="#" className="form-div-one" onSubmit={handleSubmit}>
        {children}
        <input type="submit" value={btname} />
      </form>

      <img src={image} alt="default" className={imgClass} />
    </div>
  );
};

export default LoginForm;
