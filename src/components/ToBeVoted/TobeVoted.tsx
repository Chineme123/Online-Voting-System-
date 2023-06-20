import './ToBeVoted.css'

const TobeVoted = () => {
  return (
    <form action="">
        <h3>REGISTER AS A CANDIDATE</h3>
        <div className="box">
            <label htmlFor="candidate_name">Full Name</label>
            <input type="text" name="candidate_name" id="candidate_name" />
        </div>
        <div className="box">
            <label htmlFor="candidate_img">Upload </label>
            <input type="file" name="candidate_img" id="candidate_img" />
        </div>
        <div className="box">
            <label htmlFor="motto">Write out a motto: Give your followers something to believe in</label>
            <input type="text" name="motto" id="motto" />
        </div>
        <button type="submit">REGISTER</button>
    </form>
  )
}

export default TobeVoted