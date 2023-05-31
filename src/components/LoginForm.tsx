import Button from "./Button"
import './LoginForm.css'

interface Props{
  link: string;
  image: string;
  placeHolder: string;
  btname: string;
}


const LoginForm = ({link, image, placeHolder, btname} : Props ) => {
  return (
    <div className="form">
        <div className="form-div-one">
          <input type="text" placeholder = {placeHolder}/>
          <Button buttonName={btname}  className="button" disabled = {false} to = {link}/>
        </div>
        <div className="form-div-two">
          <img src= {image} alt="default" />
        </div>
    </div>
  )
}

export default LoginForm