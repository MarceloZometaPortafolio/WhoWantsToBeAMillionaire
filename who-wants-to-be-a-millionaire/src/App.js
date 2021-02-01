import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/Home'
import NavBar from './components/NavBar';
import LeaderBoard from './components/LeaderBoard';
import Game from './components/Game';

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
        <Route exact path="/" component={Home}/>   
        <Route exact path="/leaderboard" component={LeaderBoard}/>
        <Route exact path="/game" component={Game}/>     
      </Switch>
    </Router>
  );
}

export default App;
