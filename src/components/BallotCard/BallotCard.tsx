import { useParams } from "react-router-dom";
import { ballotConfigs } from "../BallotConfig";
import "./BallotCard.css";

interface Props {
  i: number;
  onVote: (candidateId: number, vote: string) => void;
  candidateId: number;
  onCandidateSelect: (candidateId: number) => void;
}

const BallotCard = ({ i, onVote, onCandidateSelect, candidateId }: Props) => {
  const { electionId } = useParams();

  const handleVote = (vote: string) => {
    onVote(i, vote);
  };

  const handleCandidateSelection = () => {
    onCandidateSelect(candidateId);
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
        onClick={handleCandidateSelection}
        required
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
