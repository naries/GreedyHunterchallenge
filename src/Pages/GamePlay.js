import { useEffect, useRef, useState } from "react"
import { Redirect, useParams } from "react-router-dom"
import Grid from "../component/Grid"
import LifeRemaining from "../component/LifeRemaining"
import Time from "../component/Time"


const FoodgenerateRandom = (max, playerStartPosition) => {
    const gen =  Math.floor(Math.random() * max) + 1
    if(gen === playerStartPosition) {
        FoodgenerateRandom(max, playerStartPosition)
    }
    return gen
}

const userGenerateRandom = (max) => {
    return Math.floor(Math.random() * max) + 1
}

const buildFoodArray = (grid, constant) => {
    let nArray = []
    for(let i = 0; i < grid; i++){
        let ge = FoodgenerateRandom(grid * grid, constant)
        if(nArray.includes(ge)) {
            i = i - 1
            continue
        }
        nArray[i] = ge;
    }
    return nArray
}

const GamePlay = () => {
    let {grid} = useParams()

    // make sure the grid returned is an interger
    grid = parseInt(grid)

    //defining and initializing states
    const [playerHole, setPlayerHole] = useState(0)
    const [playerMoves, setPlayerMoves] = useState(0)
    const [exhaustedTime, setExhaustedTime] = useState(``)

    const totalMoves = Math.floor((grid * grid) / 2)
    

    let neverChange = useRef();
    neverChange.current = playerHole;

    // an array that sets the position of each food grid
    const [foodArray, setFoodArray] = useState([])
    // to navigate 
    const _setPlayerHole = (arg) => {

        if(arg === 'left') {
            if(playerHole > 1){
                setPlayerHole(playerHole - 1)
            }
        } else if (arg === 'right') {
            if(playerHole < grid * grid) {
                setPlayerHole(playerHole + 1)
            }
        } else if (arg === 'down') {
            if(playerHole < grid * grid - grid + 1){
                setPlayerHole(parseInt(parseInt(playerHole) + grid))
            }
        } else if (arg === 'up') {
            if(playerHole > grid) {
                setPlayerHole(playerHole - grid)
            }
        }

        setPlayerMoves(playerMoves + 1)
        if(foodArray.includes(playerHole)) {
            setFoodArray([...foodArray].filter(a => a !== playerHole))
        }
    }

    useEffect(() => {
        setPlayerHole(userGenerateRandom(grid * grid))
        setFoodArray(buildFoodArray(grid, neverChange.current))
    },[])

    return (
        <div className="pageSlider">
        {playerMoves === totalMoves && foodArray.length !== 0 && <Redirect to ={{pathname: "/lost", state: { exhausted_time: `${exhaustedTime} seconds` }}} />}
        {playerMoves !== 0 && foodArray.length === 0 && <Redirect to ={{pathname: "/won", state:{ exhausted_time: `${exhaustedTime} seconds` }}}/>}
        <div className="game-play-inner">
            <div className="container">
                <div className="header">
                    <div>Grid: {grid} x {grid}</div>
                    <div className="life-cover"><LifeRemaining life={playerMoves/totalMoves}/></div>
                    <div>Time spent: <b><Time setExhaustedTime={setExhaustedTime} /> secs</b></div>
                </div>
                <div className="middle-container">
                    <Grid grid={grid} playerHole={playerHole} _setPlayerHole={_setPlayerHole} foodArray={foodArray} />
                </div>
                <div className="header">
                    <div className="gameplay-text">Maximum moves: <b>{totalMoves}</b></div>
                    <div>Total moves: <b>{playerMoves}</b></div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default GamePlay;