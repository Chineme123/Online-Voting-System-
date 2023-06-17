import LoginForm from "../components/LoginForm/LoginForm";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import "./Body.css";
import login from "../assets/Man.jpg";

const Username = () => {
  return (
    <div className="body">
      <NavBar
        className="half not-home"
        loginState=""
        navbarBTN="navbar-button"
      />
      <LoginForm
        image={login}
        btname="Verify"
        imgClass="username"
        to="/password"
        children={
          <input
            type="text"
            placeholder = "Voter's Identification Number"
            required
            maxLength={10}
            pattern="^\d{2}[A-Z]{2}\d{6}$"
            title="Please Enter your VIN (eg; 19CG026421)"
          />
        }
      />
      <Footer />
    </div>
  );
};

export default Username;
