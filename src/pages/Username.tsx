import LoginForm from "../components/LoginForm";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import login from '../assets/mobile_login.svg'
import './Body.css'

const Username = () => {
  return (
    <div className="body">
      <NavBar className="half not-home" loginState="" navbarBTN="navbar-button" />
      <LoginForm  link = '/password' image={login} placeHolder="Voter's Identification Number" btname="Verify"/>
      <Footer />
    </div>
  );
};

export default Username;
