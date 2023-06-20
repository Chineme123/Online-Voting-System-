import faceIO from "@faceio/fiojs";
import "./FaceAuth.css";
import { useNavigate } from "react-router-dom";

const faceio = new faceIO("fioa96ff");

const FaceAuth = () => {
  const navigate = useNavigate();

  const handleFaceIOAuthentication = async () => {
    try {
      await authenticateUser();
      navigate("/dashboard");
    } catch (error) {
      console.log("Authentication Failed", error);
      navigate("/");
    }
  };

  return (
    <div id="faceio-modal" className="faceAuth">
      <button type="submit" onClick={handleFaceIOAuthentication}>
        Authenticate
      </button>
    </div>
  );
};

async function authenticateUser() {
  const userData = await faceio.authenticate({
    locale: "auto",
  });
}

export default FaceAuth;
