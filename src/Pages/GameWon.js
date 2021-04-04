import Reusable from '../component/Reusable'

const GameWon = props => {
    return (
        <div className="pageSlider">
            <Reusable type="won" {...props}/>
        </div>
    );
}

export default GameWon;