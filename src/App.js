import './App.css';
import Navigation from './Components/Navigation/Nav';
import MySection from './Components/Welcome-Section'
import Login from './Components/LoginSignup/Login'



function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
        <Login></Login>

    </div>
  );
}

export default App;


export function WelcomePage () {
  return(
    <div className="App">
      <Navigation></Navigation>
      <MySection/>
    </div>
  )
}