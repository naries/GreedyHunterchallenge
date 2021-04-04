import { Route, Switch, withRouter } from "react-router-dom";
import './Sass/app.scss';
import Home from "./Pages/Home";
import GamePlay from './Pages/GamePlay'
import GameWon from "./Pages/GameWon";
import GameLost from "./Pages/GameLost";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Component } from "react";


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      prevDepth: this.getPathDepth(this.props.location)
    }
  }

  componentWillReceiveProps() {
    this.setState({prevDepth: this.getPathDepth(this.props.location)})
  }

  getPathDepth(location){
    let pathArr = location.pathname.split("/");
    pathArr = pathArr.filter(n => n !== "");
    return pathArr.length;
  }

  render(){
    const { location } = this.props

    //track for path changes to apply animation
    const currentKey = location.pathname.split("/")[1] || "/";
    
    //animation duration
    const timeout = 300;

    return (
        <TransitionGroup component="div" className="App">
          <CSSTransition
            key={currentKey}
            in = {true}
            timeout={timeout}
            classNames="pageSlider"
            unmountOnExit
          >

          
          <div className={
            this.getPathDepth(location) - this.state.prevDepth >= 0
            ? "left"
            : "right"
          }>
            <Switch location={location}>
              <Route path="/game-play/:grid" component={GamePlay} />
              <Route path="/won" component={GameWon} />
              <Route path="/lost" component={GameLost} />
              <Route path="/" exact={true} component={Home} />
              <Route component={() => <div className="error">Oops! 404 not found</div>} />
            </Switch>
          </div>
          </CSSTransition>
        </TransitionGroup>
    );
  }
}

export default withRouter(App)