import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/Home'
import NavBar from './components/NavBar';
import LeaderBoard from './components/LeaderBoard';

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
      </Switch>
    </Router>
  );
}

export default App;
