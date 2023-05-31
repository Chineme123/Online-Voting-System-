import "./Card.css";

interface Props {
  Name: string;
  imgSrc: string;
  link: string;
}
const Card = ({ Name, imgSrc, link }: Props) => {
  return (
    <a href = {link}>
      <div className="card">
        <div className="election-name">
          <p>{Name}</p>
        </div>

        <div className="election-image">
          <img src={imgSrc} alt="default" />
        </div>

        <div className="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nam
            modi vero ipsa quos tempore? Ipsa cupiditate facilis doloribus
            nobis, est porro.
          </p>
        </div>
      </div>
    </a>
  );
};

export default Card;
