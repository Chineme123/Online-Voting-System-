import NavBar from "../components/NavBar";
import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";
import "./Body.css";
import pass from "../assets/Password.jpg";

const password = () => {
  return (
    <div className="body not-home">
      <NavBar className="half" loginState="" navbarBTN="navbar-button" />
      <LoginForm
        image={pass}
        btname="Login"
        imgClass="password"
        to="/dashboard"
        children={
          <input
            type="password"
            placeholder="Password"
            required
          />
        }
      />
      <Footer />
    </div>
  );
};

export default password;
