import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/Home'
import NavBar from './components/NavBar';
import Leaderboard from './components/LeaderBoard';

// if (window.history.state) {
//   window.history.pushState(state, title, href);
// }
function App() {

  return (
    <Router>
      <div>
        <NavBar/>
      </div>
      
      <Switch>
        <Route path="/" component={Home}/>   
        <Route path='/leaderboard' component={Leaderboard}/>     
      </Switch>
    </Router>
  );
}

export default App;
