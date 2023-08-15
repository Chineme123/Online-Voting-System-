import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Authentication from "./pages/Authentication/Authentication";
import Dashboard from "./pages/Dashboard/Dashboard";
import Vote from "./pages/Vote/Vote";
import Registration from "./pages/Registration/Registration";
import Confirmation from "./pages/Confirmation/Confirmation";
import FaceAuth from "./pages/FaceAuth/FaceAuth";
import ViewResults from "./pages/ViewResults/ViewResults";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/registration" Component={Registration} />
        <Route path="/authenticate" Component={Authentication} />
        <Route path="/auth" Component={FaceAuth} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/vote/:electionId" Component={Vote} />
        <Route path="/confirmation" Component={Confirmation} />
        <Route path="/viewresults" Component={ViewResults} />
      </Routes>
    </Router>
  );
};

export default App;
