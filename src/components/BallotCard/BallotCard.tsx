// BallotCard.tsx
import React from 'react';
import './BallotCard.css';

interface BallotCardProps {
  candidateName: string;
  candidateMotto: string;
  candidatePictureUrl: string;
  onSelectCandidate: () => void;
}

const BallotCard: React.FC<BallotCardProps> = ({
  candidateName,
  candidateMotto,
  candidatePictureUrl,
  onSelectCandidate,
}) => {
  return (
    <div className="ballot-card">
      <img src={candidatePictureUrl} alt={candidateName} className="candidate-picture" />
      <div className="candidate-info">
        <h3 className="candidate-name">{candidateName}</h3>
        <p className="candidate-motto">{candidateMotto}</p>
      </div>
      <input type="radio" name="candidate" onChange={onSelectCandidate} />
    </div>
  );
};

export default BallotCard;
