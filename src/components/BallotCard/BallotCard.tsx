import { useParams } from "react-router-dom";
import { ballotConfigs } from "../BallotConfig";
import "./BallotCard.css";

interface Props {
  i: number;
  onVote: (candidateId: number, vote: string) => void;
}

const BallotCard = ({ i, onVote }: Props) => {
  const { electionId } = useParams();

  const handleVote = (vote: string) => {
    onVote(i, vote);
  };

  return (
    <div className="ballot-card">
      <input
        type="radio"
        name={ballotConfigs[Number(electionId)].election}
        id={ballotConfigs[Number(electionId)].election}
        className="radio-btn"
        value={ballotConfigs[Number(electionId)].candidates[i]}
        onChange={(e) => handleVote(e.target.value)}
      />

      <div className="candidate-img">
        <img
          src={ballotConfigs[Number(electionId)].candidateImg[i]}
          alt="default"
        />
      </div>

      <div>{ballotConfigs[Number(electionId)].candidates[i]}</div>

      <div>{ballotConfigs[Number(electionId)].motto[i]}</div>
    </div>
  );
};

export default BallotCard;
