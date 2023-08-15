// Import the necessary dependencies
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Card from "../../components/Card/Card";
import axios from "axios";

import "./Dashboard.css";
import "../Body.css";

interface Election {
  electionId: string;
  electionTitle: string;
  // Define other properties as needed
}

interface UserData {
  name: string;
  bDay: string;
  matric_id: string;
}

const Dashboard = () => {
  const [userData, setUserData] = useState<UserData>({
    name: "",
    bDay: "",
    matric_id: "",
  });
  const [elections, setElections] = useState<Election[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data from the backend
    fetchUserData()
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching user data:", error));

    // Fetch elections data from the backend
    fetchElectionsData()
      .then((data) => setElections(data))
      .catch((error) => console.error("Error fetching elections data:", error));
  }, []);

  // Fetch user data function
  const fetchUserData = async (): Promise<UserData> => {
    try {
      const response = await axios.get("http://localhost:3000/dashboard", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`, // Include the JWT in the headers
        },
      });
      const data = response.data;
      return data;
    } catch (error) {
      throw new Error("Failed to fetch user data");
    }
  };

  // Fetch elections data function
  const fetchElectionsData = async (): Promise<Election[]> => {
    try {
      const response = await axios.get("http://localhost:3000/elections", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`, // Include the JWT in the headers
        },
      });
      const data = response.data;
      return data;
    } catch (error) {
      throw new Error("Failed to fetch elections data");
    }
  };

  // Handle election selection
  const handleElectionSelection = (electionId: string) => {
    navigate(`/vote/${electionId}`);
  };

  return (
    <div className="body">
      <NavBar
        className="home not-home"
        loginState="LOGOUT"
        navbarBTN="navbar-button"
      />

      <h1> Welcome {userData.matric_id}</h1>

      <div className="content">
        <div className="menu">
          {elections.map((election) => (
            <Card
              key={election.electionId}
              Num={election.electionId}
              Name={election.electionTitle}
              onClick={() => handleElectionSelection(election.electionId)}
            />
          ))}
        </div>

        {/* Rest of the code */}

      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
