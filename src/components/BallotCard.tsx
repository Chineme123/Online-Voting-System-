import './BallotCard.css'

const BallotCard = () => {
    const No = 1;
    const candidateName = 'Dimkpa Chineme'
    const C_imgSrc = ""
    const Motto = 'Hello World'

  return (
    <div className='ballot-card'>
        <input type="radio" name={'radio'+ No} id={'radio'+ No} className='radio-btn'/>
        <div className="candidate-img"><img src = {C_imgSrc} alt="default" /></div>
        <span>{candidateName}</span>
        <span>{Motto}</span>

    </div>
  )
}

export default BallotCard