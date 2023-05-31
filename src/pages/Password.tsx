import NavBar from "../components/NavBar";
import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";
import authentication from "../assets/authentication.svg"
import './Body.css'

const password = () => {
  return (
    <div className="body not-home">
      <NavBar className="half" loginState="" navbarBTN="navbar-button"/>
      <LoginForm link = "/dashboard" image={authentication} placeHolder="Password" btname="Login"/>
      <Footer />
    </div>
  );
};

export default password;
