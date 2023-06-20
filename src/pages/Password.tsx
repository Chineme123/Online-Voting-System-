import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import LoginForm from "../components/LoginForm/LoginForm";
import Footer from "../components/Footer/Footer";
import "./Body.css";
import pass from "../assets/Password.jpg";

const password = () => {
  const [formData, setFormData] = useState({
    password: "",
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
    navigate("/auth");

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
    <div className="body not-home">
      <NavBar className="half" loginState="" navbarBTN="navbar-button" />
      <LoginForm
        onsubmit={handleSubmit}
        image={pass}
        btname="Login"
        imgClass="password"
        children={<input type="password" name="password" id="password" placeholder="Password" required onChange={handleInputChange} />}
      />
      <Footer />
    </div>
  );
};

export default password;
