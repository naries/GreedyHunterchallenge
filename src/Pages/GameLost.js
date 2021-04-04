import Reusable from "../component/Reusable"

const GameLost = props => {
    return (
        <div className="pageSlider">
            <Reusable type="lost" {...props} />
        </div>
    );
}

export default GameLost