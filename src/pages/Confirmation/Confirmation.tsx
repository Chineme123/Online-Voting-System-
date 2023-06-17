import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Check from "../assets/checked.png";
import "./Confirmation.css";

const Confirmation = () => {
  return (
    <div className="body">
      <NavBar className="home" loginState="LOGOUT" navbarBTN="navbar-button"/>
      <img src={Check} className="gif-embed" alt="default" />
      <p className="success-message">Vote has been successfully captured</p>
      <p className="suggestion">
        Click the button below to view a live progression of this election
      </p>
      <Button className={"eip"} buttonName={"Election in Progress"} to="" />
      <Footer />
    </div>
  );
};

export default Confirmation;
