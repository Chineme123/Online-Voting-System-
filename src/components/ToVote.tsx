
const ToVote = () => {
  return (
    <form action="">
        <fieldset>
            <legend>Personal Information</legend>
            <div className="box-one">
                <label htmlFor="fName">First Name</label>
                <input type="text" name="fName" id="fName" placeholder="First Name" />
            </div>

            <div className="box-one">
                <label htmlFor="lName">Last Name</label>
                <input type="text" name="lName" id="lName" placeholder="Last Name" />
            </div>

            <input type="date" name="bDay" id="bDay" />

            <div className="gender">
                <h4>Gender</h4>
                <input type="radio" name="gender" id="male" value="male" />
                <label htmlFor="male">Male</label>

                <input type="radio" name="gender" id="female" value="female" />
                <label htmlFor="female">Female</label>
            </div>
        </fieldset>

        <fieldset>
            <legend>School Information</legend>
            <div className="box">
                <h4>Program</h4>
                <input type="radio" name="program" id="cs" value="Computer Science" />
                <label htmlFor="cs">Computer Science</label>
                
                <input type="radio" name="program" id="mis" value="MIS" />
                <label htmlFor="mis">Management and Information Science</label>
            </div>

            <div className="box">
                <h4>Level</h4>
                <input type="radio" name="level" id="one" value="100"/>
                <label htmlFor="one">100</label>
               
                <input type="radio" name="level" id="two" value="200" />
                <label htmlFor="two">200</label>

                <input type="radio" name="level" id="three" value="300"/>
                <label htmlFor="three">300</label>
                
                <input type="radio" name="level" id="four" value="400" />
                <label htmlFor="four">400</label>
            </div>
        </fieldset>

        <fieldset>
            <legend>Account SetUp</legend>
            <input type="text" name="matric" id="matric_id" placeholder="Matriculation Number" />
            <input type="file" name="image" id="img_id" />
        </fieldset>
    </form>
  )
}

export default ToVote