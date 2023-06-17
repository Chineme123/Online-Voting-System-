import { useParams } from "react-router-dom";
import { ballotConfigs } from "../components/BallotConfig";

import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import Ballot from "../components/Ballot/Ballot";

import './Body.css'

const Vote = () => {
  const { electionId } = useParams();

  function count() {
    let result = [];

    for (
      let x = 0;
      x < ballotConfigs[Number(electionId)].candidates.length;
      x++
    ) {
      result.push(x);
    }

    return result;
  }

  const count_plus = count();

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

      {count_plus.map((j) => (
        <Ballot i={j} />
      ))}

      <button type="submit">Cast Your Vote</button>

      <Footer />
    </div>
  );
};

export default Vote;
