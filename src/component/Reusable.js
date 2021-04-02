import holes from '../assets/vectors/holes.svg';
import logo from '../assets/vectors/character.svg'
import '../Sass/app.scss';

const Reusable = () => {
    return (<>
          <div className="app-inner">
        <div>
          <img src={holes} alt = "holes design" />
        </div>

        <div className="major">
          <img src={logo} alt="logo" />
          <div className="game-name">Greedy hunter</div>
          <div className="game-info">The aim is to eat all the food in record time</div>
          <div className="game-info">Configure your game grid below 👇🏼</div>
          <div className="settings">
            <div>Game grid</div>
            <div><input type="number" min={5} max={10} defaultValue={10}/></div>
          </div>
          <div className="activate">
            <button>Start game</button>
          </div>
        </div>

        <div>
          <img src={holes} alt = "holes design" />
        </div>
      </div>
      </>);
}

export default Reusable;