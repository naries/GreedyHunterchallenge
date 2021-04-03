import hangingHeart from '../assets/vectors/heart.png'

const LifeRemaining = ({life}) => {
    return (
        <div className="life-remaining">
            <div className="life"></div>
            <div className="hanging-heart" style={{width: `${life}%`}}>
                <img src={hangingHeart} alt="hanging heart" />
            </div>
        </div>
    );
}

export default LifeRemaining;