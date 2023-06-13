import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import "./Home.css";
import vote from "../assets/Vote.jpg";
import face_reg from "../assets/Face_reg.jpg";
import encrpty from "../assets/encryption.jpg";

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
