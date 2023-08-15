import "./ToVote.css";

import { useState } from "react";
import axios from "axios";
import faceIO from "@faceio/fiojs";
import { useNavigate } from "react-router-dom";

const ToVote = () => {
  const navigate = useNavigate();
  const [registrationStatus, setRegistrationStatus] = useState("");
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    bDay: "",
    gender: "",
    program: "",
    level: "",
    matric_id: "",
    email: "",
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

    try {
      const registrationResponse = await axios.post(
        "http://localhost:3000/auth/register",
        formData
      );
      console.log("Response from register:", registrationResponse.data);

      if (registrationResponse.status === 201) {
        setRegistrationStatus("Registration Successful");
        console.log(registrationStatus);
        
        enrollNewUser();
        navigate("/authenticate");
      } else {
        setRegistrationStatus("Registration Failed");
        console.log(registrationStatus);
      }
    } catch (error: any) {
      console.error("Error Submitting Form: ", error.message);
      setRegistrationStatus("Registration Failed");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>REGISTER AS A VOTER</h3>
      <fieldset id="personal-info">
        <legend>Personal Information</legend>
        <div className="box">
          <label htmlFor="fName">First Name</label>
          <input
            type="text"
            name="fName"
            id="fName"
            placeholder="First Name"
            required
            onChange={handleInputChange}
            value={formData.fName}
          />
        </div>

        <div className="box">
          <label htmlFor="lName">Last Name</label>
          <input
            type="text"
            name="lName"
            id="lName"
            placeholder="Last Name"
            required
            onChange={handleInputChange}
            value={formData.lName}
          />
        </div>

        <div className="box">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            onChange={handleInputChange}
            value={formData.email}
          />
        </div>

        <div className="box">
          <label htmlFor="bDay">Date of Birth</label>
          <input
            type="date"
            name="bDay"
            id="bDay"
            required
            onChange={handleInputChange}
            value={formData.bDay}
          />
        </div>

        <div className="gender">
          <h4>Gender</h4>
          <div className="box-one">
            <input
              type="radio"
              name="gender"
              required
              onChange={handleInputChange}
              value="Female"
              id="Female"
            />
            <label htmlFor="gender">Female</label>
          </div>

          <div className="box-one">
            <input
              type="radio"
              name="gender"
              required
              onChange={handleInputChange}
              value="Male"
              id="Male"
            />
            <label htmlFor="gender">Male</label>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>School Information</legend>
        <div className="box">
          <h4>Program</h4>
          <div className="box-one">
            <input
              type="radio"
              required
              onChange={handleInputChange}
              value="cs"
              name="program"
              id="cs"
            />
            <label htmlFor="program">Computer Science</label>
          </div>

          <div className="box-one">
            <input
              type="radio"
              required
              onChange={handleInputChange}
              value="mis"
              name="program"
              id="mis"
            />
            <label htmlFor="program">Management and Information Science</label>
          </div>
        </div>

        <div className="box">
          <h4>Level</h4>
          <div className="box-one">
            <input
              type="radio"
              name="level"
              required
              onChange={handleInputChange}
              value="100"
              id="one"
            />
            <label htmlFor="level">100</label>
          </div>

          <div className="box-one">
            <input
              type="radio"
              name="level"
              required
              onChange={handleInputChange}
              value="200"
              id="two"
            />
            <label htmlFor="level">200</label>
          </div>

          <div className="box-one">
            <input
              type="radio"
              name="level"
              required
              onChange={handleInputChange}
              value="300"
              id="three"
            />
            <label htmlFor="level">300</label>
          </div>

          <div className="box-one">
            <input
              type="radio"
              name="level"
              required
              onChange={handleInputChange}
              value="400"
              id="level"
            />
            <label htmlFor="level">400</label>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>Account SetUp</legend>
        <div className="box">
          <label htmlFor="matric_id">Matriculation</label>
          <input
            type="text"
            name="matric_id"
            id="matric_id"
            placeholder="Matriculation Number"
            required
            onChange={handleInputChange}
            value={formData.matric_id}
          />
        </div>
      </fieldset>

      <button type="submit">REGISTER</button>
    </form>
  );
};

async function enrollNewUser() {
  const faceio = new faceIO("fioa96ff");
  const userInfo = await faceio.enroll({
    locale: "auto", // Default user locale
    payload: {
      fName: "",
      lName: "",
      gender: "",
      program: "",
      matric_id: "",
      email: "",
    },
  });

  alert(
    `User Successfully Enrolled! Details:
        Unique Facial ID: ${userInfo.facialId}
        Enrollment Date: ${userInfo.timestamp}`
  );
}

export default ToVote;
