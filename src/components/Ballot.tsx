import { ballotConfigs } from "../components/BallotConfig";
import { useParams } from "react-router-dom";

import BallotCard from "./BallotCard";

import "./Ballot.css";

interface Props {
  i: number;
}

const Ballot = ({ i }: Props) => {
  const { electionId } = useParams();

  return (
    <div className="ballot">
      <BallotCard
        motto={ballotConfigs[Number(electionId)].motto[i]}
        path={ballotConfigs[Number(electionId)].candidateImg[i]}
        name={ballotConfigs[Number(electionId)].candidates[i]}
        iName={ballotConfigs[Number(electionId)].election}
      />
    </div>
  );
};

export default Ballot;
