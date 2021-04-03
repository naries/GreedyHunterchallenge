import hangingHeart from '../assets/vectors/heart.png'

const LifeRemaining = ({life}) => {
    return (<>
        <div className="life-remaining">
            <div className="life" style={{width: `${life*100}%`, maxWidth: '97%'}}></div>
            <div className="hanging-heart">
                <img src={hangingHeart} alt="hanging heart" />
            </div>
        </div>
        </>
    );
}

export default LifeRemaining;