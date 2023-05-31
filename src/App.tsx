import NavBar from "./components/NavBar";
import "./App.css";
import Button from "./components/Button";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="container">
        <NavBar className="home" loginState="LOGIN" navbarBTN="home-navbar-button"/>

        <div className="message">
          <div className="part-one">
            <p>Voting should be Safe,</p>
          </div>
          <div className="part-two">
            <p>Secure and Convenient</p>
          </div>
        </div>

        <Button
          buttonName={"LOGIN"}
          className="home-button"
          disabled={false}
          to="/username"
        />
      </div>
      <div className="home-content"></div>
      <Footer />
    </>
  );
};

export default App;
