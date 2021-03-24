//import logo from './logo.svg';
import './App.css';
import myImage from "./imageInSrc.jpg"
import "./style.css"

function App() {
  return (
  <>
  <div style={{ border:'solid 1px black',maxWidth:'100vw' }}>
    <h1 className="title red">Your name here</h1>
    <br/>
    <img src={myImage} alt="myImage"/>
    <br/>
    <img src="/imageInPublic.jpg" alt="go"/>
  </div>
  </>
  )
}

export default App;
