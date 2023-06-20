import {ReactNode} from 'react'
import "./LoginForm.css";

interface Props {
  image: string;
  btname: string;
  imgClass: string;
  children: ReactNode;
  onsubmit: (event: React.FormEvent) => void;
}

const LoginForm = ({ image, btname, imgClass, onsubmit, children }: Props) => {

  return (
    <div className="form">
      <form action="#" className="form-div-one" onSubmit={onsubmit}>
        {children}
        <input type="submit" value={btname} />
      </form>

      <img src={image} alt="default" className={imgClass} />
    </div>
  );
};

export default LoginForm;
