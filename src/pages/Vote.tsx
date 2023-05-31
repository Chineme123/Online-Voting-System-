import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import Ballot from "../components/Ballot"
import './Body.css'

const Vote = () => {
  return (
    <div className="body">
        <NavBar className="home not-home" loginState="LOGOUT" navbarBTN="navbar-button"/>
        <h1>Select your Candidate</h1>
        <Ballot />
        <Footer />
    </div>
  )
}

export default Vote