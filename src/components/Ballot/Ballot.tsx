import { useParams, useNavigate } from "react-router-dom";
import { ballotConfigs } from "../BallotConfig";
import CryptoJS from "crypto-js";
import { useState } from "react";

import BallotCard from "../BallotCard/BallotCard";

import "./Ballot.css";

const Ballot = () => {
  const { electionId } = useParams();
  const navigate = useNavigate();
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(
    null
  );
  const [votes, setVotes] = useState({});

  const handleVote = (candidateId: number, vote: string) => {
    setVotes((prevVotes) => ({ ...prevVotes, [candidateId]: vote }));
  };

  const handleVoteSubmission = () => {
    // Encrypt the ballot data
    const encryptedBallot = encryptBallot(votes, "yourEncryptionKey");

    // Send the encrypted ballot to the server
    // (Implement your logic to send the encrypted ballot to the database or server)

    // Reset votes after submission if needed
    setVotes({});

    console.log(votes);

    if (selectedCandidate === null) {
      alert("Please select a candidate before submitting your ballot.");
    } else {
      navigate("/confirmation");
    }
  };

  const encryptBallot = (ballot: object, encryptionKey: string) => {
    // Convert the ballot object to a string
    const ballotString = JSON.stringify(ballot);

    // Encrypt the ballot string using AES encryption
    const encryptedBallot = CryptoJS.AES.encrypt(
      ballotString,
      encryptionKey
    ).toString();

    return encryptedBallot;
  };

  const handleCandidateSelection = (candidateId: number) => {
    setSelectedCandidate(candidateId);
  };

  const candidateIndices = Array.from(
    { length: ballotConfigs[Number(electionId)].candidates.length },
    (_, i) => i
  );

  return (
    <div className="ballot">
      {candidateIndices.map((index) => (
        <BallotCard key={index} i={index} onVote={handleVote} candidateId={index} onCandidateSelect={handleCandidateSelection} />
      ))}

      <button type="submit" onClick={handleVoteSubmission}>
        Cast Your Vote
      </button>
    </div>
  );
};

export default Ballot;
