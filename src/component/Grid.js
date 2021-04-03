import logo from '../assets/vectors/character.svg'
import food from '../assets/vectors/food.svg'



const buildArray = (grid) => {
    let newArray = []
    for(let i = 0; i < (grid*grid); i++) {
        newArray.push(i);
    }
    return newArray
}

const Grid = ({grid, playerHole, _setPlayerHole, foodArray}) => {
    const squares = buildArray(grid)
    const navigatable = [playerHole, playerHole-2, playerHole+grid-1, playerHole-grid-1]
    const navigate = e => {
        switch(e.which) {
            case 37:
                _setPlayerHole('left')
                break;
            case 38:
                _setPlayerHole('up')
                break;
            case 39:
                _setPlayerHole('right')
                break;
            case 40:
                _setPlayerHole('down')
                break;
        }
    }

    return (
        <>
        <div className="grid" tabIndex={0} onKeyDown={e => navigate(e)}> 
            {squares.map((square, i) => {return <>
                {navigatable.includes(square) && <div key={i} className="box">
                    {playerHole === square + 1 && <div className="holder">
                        <img src={logo} alt="player"/>
                    </div> || foodArray.includes(square + 1) && <div className="holder">
                        <img src={food} alt="player"/>
                    </div>}
                </div>}

                {!navigatable.includes(square) && <div key={i} className="box">
                    {playerHole === square + 1 && <div className="holder" className="holder">
                        <img src={logo} alt="player"/>
                    </div> || foodArray.includes(square + 1) && <div className="holder">
                        <img src={food} alt="player"/>
                    </div>}
                </div>}
            </>})}
        </div>
        </>
    );
}

export default Grid;