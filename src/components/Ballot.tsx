import './Ballot.css'
import BallotCard from './BallotCard'

const Ballot = () => {
  return (
    <div className='ballot'>
        <BallotCard />
        <BallotCard />
        <BallotCard />
    </div>
  )
}

export default Ballot