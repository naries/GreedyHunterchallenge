import holes from '../assets/vectors/holes.svg';
import logo from '../assets/vectors/character.svg'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Reusable = props => {
    const { type } = props
    const exhausted_time = props.location ? props.location.state.exhausted_time: null;
    const food_consumed = props.location && props.location.state.food_consumed ? props.location.state.food_consumed: null
    const lastgrid = props.location && props.location.state.grid ? props.location.state.grid: null

    
    const [grid, setGrid] = useState(5);
    return (<>
          <div className="app-inner">
        <div>
          <img src={holes} alt = "holes design" />
        </div>

        <div className="major">
          <img src={logo} alt="logo" />
          <div className="game-name">{type? type==="won" ?`Bravo!`: `Game over!`: `Greedy hunter`}</div>
          {!type && <div className="game-info">The aim is to eat all the food in record time</div>}
          {type && type==="lost" && <div className="game-info">Total Food: <b>{food_consumed}/{lastgrid}</b></div>}
          {type && <div className="game-info">Time Spent: <b>{exhausted_time}</b></div>}

          {!type && <div className="game-info">Configure your game grid below 👇🏼</div>}
          <div className="settings">
            <div>Game grid</div>
            <div><input type="number" min={5} max={10} defaultValue={grid} onChange={e => setGrid(e.target.value)}/></div>
          </div>
          <div className="activate">
            <Link to ={`/game-play/${grid}`}>
              <button>Start {type&&`Again`}{!type&&`Game`}</button>
            </Link>
          </div>
        </div>

        <div>
          <img src={holes} alt = "holes design" />
        </div>
      </div>
      </>);
}

export default Reusable;