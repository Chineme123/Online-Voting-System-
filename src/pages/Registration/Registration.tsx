import ToVote from "../../components/ToVote/ToVote";
import NavBar from "../../components/NavBar/NavBar";
import "./Registration.css";

const Registration = () => { 

  return (
    <div className="reg-div">
      <NavBar className="not-home" loginState="" navbarBTN="navbar-button" />
      <div className="registration">
        <div className="tab">
          <span>Voter</span>
        </div>
        <ToVote />
      </div>
    </div>
  );
};

export default Registration;
