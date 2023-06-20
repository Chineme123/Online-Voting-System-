import { useParams } from "react-router-dom";
import { ballotConfigs } from "../components/BallotConfig";

import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import Ballot from "../components/Ballot/Ballot";

import './Body.css'

const Vote = () => {

  
  const { electionId } = useParams();

  if (!electionId) {
    return <div>No ballot found for this election.</div>;
  }

  return (
    <div className="body">
      <NavBar
        className="home not-home"
        loginState="LOGOUT"
        navbarBTN="navbar-button"
      />

      <h2>Select your Candidate</h2>

      <h3>{ballotConfigs[Number(electionId)].title}</h3>

      <Ballot />

      <Footer />
    </div>
  );
};

export default Vote;
