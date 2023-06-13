import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Username from "./pages/Username";
import Password from "./pages/Password";
import Dashboard from "./pages/Dashboard";
import Vote from "./pages/Vote";
import Auth from "./pages/Auth";
import Confirmation from "./pages/Confirmation";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/username" Component={Username} />
        <Route path="/password" Component={Password} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/vote/:electionId" Component={Vote} />
        <Route path="/Auth" Component={Auth} />
        <Route path="/confirmation" Component={Confirmation} />
      </Routes>
    </Router>
  );
};

export default App;
