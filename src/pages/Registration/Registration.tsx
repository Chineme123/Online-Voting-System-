import ToVote from "../../components/ToVote/ToVote";
import TobeVoted from "../../components/ToBeVoted/TobeVoted";
import NavBar from "../../components/NavBar/NavBar";
import "./Registration.css";

import { useState } from "react";

const Registration = () => {
  const [display, setDisplay] = useState(true);

  const handleDivClick = () => {
    setDisplay(!display);
  };

  return (
    <div className="reg-div">
      <NavBar className="not-home" loginState="" navbarBTN="navbar-button" />
      <div className="registration">
        <div className="tab">
          <span onClick={handleDivClick}>Voter</span>
          <span onClick={handleDivClick}>Candidate</span>
        </div>
        <div className="form-box">{display ? <ToVote /> : <TobeVoted />}</div>
      </div>
    </div>
  );
};

export default Registration;
