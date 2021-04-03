import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home";
import GamePlay from './Pages/GamePlay'
import GameWon from "./Pages/GameWon";
import GameLost from "./Pages/GameLost";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/game-play" component={GamePlay} />
          <Route path="/won" component={GameWon} />
          <Route path="/lost" component={GameLost} />
          <Route path="/" exact={true} component={Home} />
          <Route component={() => <div className="error">Oops! 404 not found</div>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App