import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import "./Body.css";
import login from "../assets/Man.jpg";

const Username = () => {
  const [formData, setFormData] = useState({
    vin: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formData);
    navigate("/password");

    // try {
    //     const response = await axios.post('', formData);
    //     // Handle success response
    //     console.log(response.data);
    // } catch (error) {
    //     // Handle error response
    //     console.error(error);
    // }
  };

  return (
    <div className="body">
      <NavBar
        className="half not-home"
        loginState=""
        navbarBTN="navbar-button"
      />
      <LoginForm
        onsubmit={handleSubmit}
        image={login}
        btname="Verify"
        imgClass="username"
        children={
          <input
            type="text"
            placeholder="Voter's Identification Number"
            required
            maxLength={10}
            pattern="^\d{2}[A-Z]{2}\d{6}$"
            title="Please Enter your VIN (eg; 19CG026421)"
            name="vin"
            id="vin"
            onChange={handleInputChange}
          />
        }
      />
      <Footer />
    </div>
  );
};

export default Username;
