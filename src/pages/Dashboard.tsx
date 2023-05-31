import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import "./Dashboard.css";

const Dashboard = () => {
  const name = "Chineme Dimkpa";
  const age = 20;
  const vin = "19CG026421";
  const dbImg = "";

  return (
    <div className="body">
      <NavBar className="home not-home" loginState="LOGOUT" navbarBTN="navbar-button" />
      <div className="menu">
        <Card imgSrc="" Name="Election 1" link="/vote" />
        <Card imgSrc="" Name="Election 2" link="/vote" />
        <Card imgSrc="" Name="Election 3" link="/vote" />
        <Card imgSrc="" Name="Election 4" link="/vote" />
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
      <Footer />
    </div>
  );
};

export default Dashboard;
