import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home'
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
      </div>

      <Switch>
        <Route path="Home" component={Home}/>        
      </Switch>
    </Router>
    // <div className="App">
    //     <NavBar/>
    //     <Home/>
    // </div>
  );
}

export default App;
