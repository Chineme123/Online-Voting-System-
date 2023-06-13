import "./Hero.css";
import {ReactNode} from 'react';

interface Props {
  textDisplay: ReactNode;
  path: string;
  name: string;
}

const Hero = ({ textDisplay, path, name }: Props) => {
  return (
    <div className={name}>
      <div className="text">{textDisplay}</div>
      <img src={path} alt="default" />
    </div>
  );
};

export default Hero;
