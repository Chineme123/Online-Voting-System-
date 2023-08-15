import React from "react";
import "./ViewResults.css";

const candidatesData = [
  { name: "Candidate 1", votes: 100, photo: '', },
  { name: "Candidate 2", votes: 80 , photo: ''},
  { name: "Candidate 3", votes: 120, photo: '' },
];

const ViewResults: React.FC = () => {
  const highestVotes = Math.max(
    ...candidatesData.map((candidate) => candidate.votes)
  );
  const lowestVotes = Math.min(
    ...candidatesData.map((candidate) => candidate.votes)
  );

  return (
    <div className="view-results-container">
      <h2>View Results</h2>
      <div className="candidates-list">
        {candidatesData.map((candidate, index) => (
          <div
            key={index}
            className={`candidate-card ${
              candidate.votes === highestVotes
                ? "winner"
                : candidate.votes === lowestVotes
                ? "lowest"
                : "runner-up"
            }`}
          >
            <div className="candidate-image">
              <img src={candidate.photo} alt="Candidate" />
            </div>
            <div className="candidate-details">
              <h3>{candidate.name}</h3>
              <p>Votes: {candidate.votes}</p>
              {candidate.votes === highestVotes && (
                <span className="winner-label">Winner</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewResults;
