import { useNavigate } from "react-router-dom";
import { ballotConfigs } from "../components/BallotConfig";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Card from "../components/Card";

import "./Dashboard.css";
import "./Body.css";

const Dashboard = () => {
  const name = "Chineme Dimkpa";
  const age = 20;
  const vin = "19CG026421";
  const dbImg = "";

  const navigate = useNavigate();

  // Handle election selection
  const handleElectionSelection = (electionId: number) => {
    navigate(`/vote/${electionId}`);
  };

  return (
    <div className="body">
      <NavBar
        className="home not-home"
        loginState="LOGOUT"
        navbarBTN="navbar-button"
      />

      <div className="content">
        <div className="menu">
          {ballotConfigs.map((election) => (
            <Card
              key={election.electionId}
              Num={election.election}
              Name={election.title}
              onClick={() => handleElectionSelection(election.electionId)}
            />
          ))}
        </div>

        <div className="aside">
          <div className="profile">
            <div className="profile-pic">
              <img src={dbImg} alt="def" />
            </div>
            <div className="gov-name">
              <div className="label">
                <span>Name:</span>
                <span>Age:</span>
                <span>VIN:</span>
              </div>
              <div className="value">
                <span>{name}</span>
                <span>{age} years</span>
                <span>{vin}</span>
              </div>
            </div>
          </div>
          <div className="personal-info"></div>
          <div className="Other-info"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
