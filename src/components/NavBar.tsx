import Button from "./Button";
import "./NavBar.css";

interface Props {
  className: string;
  loginState: string;
  navbarBTN: string;
}

const NavBar = ({ className, loginState, navbarBTN }: Props) => {
  return (
    <nav className={className}>
      <div className="container-one">
        <a href="/">Queen'sVote</a>
      </div>

      <Button
        className={navbarBTN}
        buttonName={loginState}
        disabled={false}
        to="/username"
      />
    </nav>
  );
};

export default NavBar;
