import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import "./Home.css";
import vote from "../../assets/Vote.jpg";
import face_reg from "../../assets/Face_reg.jpg";
import encrpty from "../../assets/encryption.jpg";
import Button from "../../components/Button/Button";

const Home = () => {
  return (
    <>
      <div className="container">
        <NavBar
          className="home"
          loginState="LOGIN"
          navbarBTN="home-navbar-button"
        />
      </div>
      <div className="home-content">
        <Hero
          textDisplay={
            <div>
              <p>voting should be</p>{" "}
              <p>
                <span className="isHighlighted">SAFE</span>,{" "}
                <span className="isHighlighted">SECURE</span> and{" "}
                <span className="isHighlighted">EFFICIENT</span>
              </p>
            </div>
          }
          path={vote}
          name="hero"
        />
        <div className="register">
          <p>Be A Part Of The System</p>
          <p>Register Now</p>
          <Button buttonName={"REGISTER"} className={"register-btn"} disabled = {false} to="/registration"/>
        </div>
        <Hero
          textDisplay={
            <div>
              <p>
                <span className="isHighlighted">FACIAL</span> Recognition
              </p>{" "}
              <p>Authentication</p>
            </div>
          }
          path={face_reg}
          name="hero-plus"
        />
        <Hero
          textDisplay={
            <div>
              <p>
                <span className="isHighlighted">ENCRYPTED</span> voting and{" "}
              </p>{" "}
              <p>
                {" "}
                Voter's <span className="isHighlighted">PRIVACY</span>
              </p>
            </div>
          }
          path={encrpty}
          name="hero"
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;
