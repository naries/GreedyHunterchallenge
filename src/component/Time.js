import { useEffect, useRef, useState } from "react";

const Time = props => {
    const { setExhaustedTime } = props 
    const [timer, setTimer] = useState(0)
    const time = useRef()

    setTimeout(() => {setTimer(timer + 1); setExhaustedTime(time.current)}, 1000)

    useEffect(() => {
        const formatTime = (time) => {
            // make sure string is double.
            return `${Math.floor(time/60).toString().length === 1
                ?`0${Math.floor(time/60)}`
                :Math.floor(time / 60)} 
                : ${(time % 60).toString().length === 1 
                    ? `0${time % 60}`
                    : time%60}`
        }
        time.current = formatTime(timer)
    },[timer])

    return (
        <span>{time.current}</span>
    );
}

export default Time;