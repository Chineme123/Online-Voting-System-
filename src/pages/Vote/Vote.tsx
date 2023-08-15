import React from 'react';
import BallotPage from '../../components/BallotCard/BallotPage';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Vote: React.FC = () => {
  const navigate = useNavigate()
  const { electionId } = useParams<{ electionId: string }>(); // Replace with the actual electionId

  const handleCandidateSelect = async (candidateId: string) => {
    try {
      const voterId = 'Replace with the actual voter ID';
      
      // Create the payload for the POST request
      const payload = {
        candidateId: candidateId,
        electionId: electionId,
        voterId: voterId,
      };

      // Send the POST request to the backend
      const response = await axios.post('http://localhost:3000/vote', payload);
      console.log(response.data); // Handle the response as needed
      navigate('/confirmation')
    } catch (error) {
      console.error('Failed to send vote:', error);
    }
  };

  return (
    <div>
      {/* Other components and content */}
      {electionId && <BallotPage electionId={electionId} onCandidateSelect={handleCandidateSelect} />}
      {/* Other components and content */}
    </div>
  );
};

export default Vote;
