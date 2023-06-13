// import { useNavigate } from "react-router-dom";
import "./Card.css";

interface Props {
  Num: string;
  Name: string;
  onClick: () => void;
}
const Card = ({ Name, Num, onClick }: Props) => {

  // const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
  //   navigate('/vote')
  // }

  return (
    <div className="card" onClick={onClick}>
        <div className="election-number">
          {Num}
        </div>

        <div className="election-name">
          {Name}
        </div>
      </div>
  );
};

export default Card;
