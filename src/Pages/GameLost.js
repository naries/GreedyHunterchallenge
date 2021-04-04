import Reusable from "../component/Reusable"

const GameLost = props => {
    return (
        <>
            <Reusable type="lost" {...props} />
        </>
    );
}

export default GameLost;