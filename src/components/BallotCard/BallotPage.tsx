// BallotPage.tsx
import React, { useEffect, useState } from 'react';
import BallotCard from './BallotCard';

interface Candidate {
  id: string;
  name: string;
  motto: string;
  pictureUrl: string;
}

interface BallotPageProps {
  electionId: string;
  onCandidateSelect: (candidateId: string) => void;
}

const BallotPage: React.FC<BallotPageProps> = ({ electionId, onCandidateSelect }) => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    // Fetch candidates for the selected election from the backend
    const fetchCandidates = async () => {
      try {
        const response = await fetch(`http://localhost:3000/elections/${electionId}/candidates`); // Adjust the API endpoint as per your backend implementation
        if (response.ok) {
          const data = await response.json();
          setCandidates(data);
        } else {
          console.error('Failed to fetch candidates');
        }
      } catch (error) {
        console.error('Error while fetching candidates:', error);
      }
    };

    fetchCandidates();
  }, [electionId]);

  const handleCandidateSelect = (candidateId: string) => {
    onCandidateSelect(candidateId);
  };

  return (
    <div className="ballot-page">
      <h2>Select a Candidate:</h2>
      <div className="ballot-cards">
        {candidates.map(candidate => (
          <BallotCard
            key={candidate.id}
            candidateName={candidate.name}
            candidateMotto={candidate.motto}
            candidatePictureUrl={candidate.pictureUrl}
            onSelectCandidate={() => handleCandidateSelect(candidate.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default BallotPage;
