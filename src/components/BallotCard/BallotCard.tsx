import './BallotCard.css'

interface Props{
  motto: string;
  name: string;
  path: string;
  iName: string;
}

const BallotCard = ({motto, name, path, iName}: Props) => {

  return (
    <div className='ballot-card'>
        <input type="radio" name={iName} id={iName} className='radio-btn'/>

        <div className="candidate-img"><img src = {path} alt="default" /></div>

        <div>{name}</div>

        <div>{motto}</div>

    </div>
  )
}

export default BallotCard