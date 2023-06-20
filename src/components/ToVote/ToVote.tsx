import './ToVote.css'

import {useState} from 'react'
import axios from 'axios'
import faceIO from "@faceio/fiojs";


   
const ToVote = () => {
    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        bDay: '',
        gender: '',
        program: '',
        level: '',
        matric_id: '',
        email: ''
    })


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
        ...formData,
        [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        console.log(formData);

        try {
            const response = await axios.post('https://api.faceio.net/setfacialidpayload', formData);
            // Handle success response
            console.log(response.data);
        } catch (error) {
            // Handle error response
            console.error(error);
        }
    };


  return (
    <form onSubmit={handleSubmit}>
        <h3>REGISTER AS A VOTER</h3>
        <fieldset id='personal-info'>
            <legend>Personal Information</legend>
            <div className="box">
                <label htmlFor="fName">First Name</label>
                <input type="text" name="fName" id="fName" placeholder="First Name" required onChange={handleInputChange} value={formData.fName} />
            </div>

            <div className="box">
                <label htmlFor="lName">Last Name</label>
                <input type="text" name="lName" id="lName" placeholder="Last Name"  required onChange={handleInputChange} value={formData.lName}/>
            </div>

            <div className="box">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Email"  required onChange={handleInputChange} value={formData.email}/>
            </div>

           <div className="box">
                <label htmlFor="bDay">Date of Birth</label>
                <input type="date" name="bDay" id="bDay" required onChange={handleInputChange} value={formData.bDay}/>
           </div>

            <div className="gender">
                <h4>Gender</h4>
                <div className="box-one">
                    <input type="radio" name="gender" required onChange={handleInputChange} value={formData.gender} id="male" />
                    <label htmlFor="male">Male</label>
                </div>

                <div className="box-one">
                    <input type="radio" name="gender" required onChange={handleInputChange} value={formData.gender} id="female" />
                    <label htmlFor="female">Female</label>
                </div>
            </div>
        </fieldset>

        <fieldset>
            <legend>School Information</legend>
            <div className="box">
                <h4>Program</h4>
                <div className="box-one">
                    <input type="radio" required onChange={handleInputChange} value={formData.program} name="program" id="cs" />
                    <label htmlFor="cs">Computer Science</label>
                </div>
                
                <div className="box-one">
                    <input type="radio" required onChange={handleInputChange} value={formData.program} name="program" id="mis"  />
                    <label htmlFor="mis">Management and Information Science</label>
                </div>
            </div>

            <div className="box">
                <h4>Level</h4>
                <div className="box-one">
                    <input type="radio" name="level" required onChange={handleInputChange} value={formData.level} id="one" />
                    <label htmlFor="one">100</label>
                </div>
               
                <div className="box-one">
                    <input type="radio" name="level" required onChange={handleInputChange} value={formData.level} id="two" />
                    <label htmlFor="two">200</label>
                </div>

                <div className="box-one">
                    <input type="radio" name="level" required onChange={handleInputChange} value={formData.level} id="three" />
                    <label htmlFor="three">300</label>
                </div>
                
                <div className="box-one">
                    <input type="radio" name="level" required onChange={handleInputChange} value={formData.level} id="four" />
                    <label htmlFor="four">400</label>
                </div>
            </div>
        </fieldset>

        <fieldset>
            <legend>Account SetUp</legend>
            <div className="box">
                <label htmlFor="matric_id">Matriculation</label>
                <input type="text" name="matric_id" id="matric_id" placeholder="Matriculation Number" required onChange={handleInputChange} value={formData.matric_id}/>
            </div>
        </fieldset>

        <button type="submit" onClick={enrollNewUser}>REGISTER</button>
    </form>
  )
}

async function enrollNewUser() {
    const faceio = new faceIO("fioa96ff");
    const userInfo = await faceio.enroll({
    "locale": "auto", // Default user locale
    "payload": {
        'fName': '',
        'lName': '',
        'gender': '',
        'program': '',
        'matric_id': '',
        'email':''
        }
    });

    alert(
        `User Successfully Enrolled! Details:
        Unique Facial ID: ${userInfo.facialId}
        Enrollment Date: ${userInfo.timestamp}
        Gender: ${userInfo.details.gender}
        Age Approximation: ${userInfo.email}`
    );
}


export default ToVote