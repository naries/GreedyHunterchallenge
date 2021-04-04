import { useEffect, useRef } from 'react';
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
    const gridRef = useRef();

    const navigatable = [playerHole, playerHole-2, playerHole+grid-1, playerHole-grid-1]
    
    const keyboardNavigation = (e) =>{
        navigate(e.which)
    }

    const mouseNavigation = (e, square) => {
        /**
         * 37 for left
         * 38 for up
         * 39 for right
         * 40 for down
         */
        const which = square === playerHole + 1 ? 39: square === playerHole + grid ? 40 : square===playerHole - 1 ? 37: 38;
        navigate(which)
    }

    const navigate = which => {
        switch(which) {
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

    useEffect(() => {
        gridRef.current.focus();
    })

    return (
        <>
        <div id="grid" 
            className="grid" 
            tabIndex={0} 
            ref={gridRef} 
            onKeyDown={e => keyboardNavigation(e)} 
            style={{gridTemplateColumns: `repeat(${grid}, calc(100%/${grid}))`, gridTemplateRows: `repeat(${grid}, calc(500px/${grid}))`}}> 
            {squares.map((square, i) => {return <>
                {navigatable.includes(square) && <div key={i} className="box paint" onClick={(e) => mouseNavigation(e, square + 1)}>
                    {playerHole === square + 1 && <div className="holder" >
                        <img src={logo} alt="player"/>
                    </div> || foodArray.includes(square + 1) && <div className="holder">
                        <img src={food} alt="player"/>
                    </div>}
                </div>}

                {!navigatable.includes(square) && <div key={i} className="box" >
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