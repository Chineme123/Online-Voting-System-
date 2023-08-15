import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "../Body.css";
import pass from "../../assets/Password.jpg";

const Authentication = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    matric_id: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formData);

    axios
      .post("http://localhost:3000/auth/login", formData)
      .then((response) => {
        if (response.status === 200) {
          const token = response.data.token;
          const loggedInUser = response.data.loggedInUser;

          // Store the JWT and user data in local storage
          localStorage.setItem("jwtToken", token);
          localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

          navigate("/auth");
        } else {
          console.log(response.status);
        }
      })
      .catch((error) => {
        console.error("Error Submitting Form: ", error.message);
      });
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
        image={pass}
        btname="Login"
        imgClass="username"
        children={
          <>
            <input
              type="text"
              placeholder="Voter's Identification Number"
              required
              maxLength={10}
              pattern="^\d{2}[A-Z]{2}\d{6}$"
              title="Please Enter your VIN (eg; 19CG026421)"
              name="matric_id"
              id="matric_id"
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
              onChange={handleInputChange}
            />
          </>
        }
      />
      <Footer />
    </div>
  );
};

export default Authentication;
