import style from './ClockAnalog.module.css'
import {useCallback, useEffect, useState} from "react";


type timeType = {
    hours: number
    minutes: number
    seconds: number
}

let initTime = {
    hours: 0,
    minutes: 0,
    seconds: 0,
}

export const ClockAnalog = () => {

    const [time, setTime] = useState<timeType>(initTime)

    const deg = 6;

    let data = new Date();
    time.hours = data.getHours() * 30;
    time.minutes = data.getMinutes() * deg;
    time.seconds = data.getSeconds() * deg;

    const setTimeCB = useCallback(() => {
        return {...time}
    }, [])

    useEffect(() => {
        let intervalID = setInterval(() => {
            setTime(setTimeCB)
        }, 1000)

        return () => {
            clearInterval(intervalID)
            console.log('END')
        }

    }, [setTimeCB])


    return (
        <div className={`${style.clock}`}>
            <div className={style.hour}>
                <div style={{transform: `rotateZ(${time.hours}deg)`}} className={style.hr} id="hr"/>
            </div>
            <div className={style.min}>
                <div style={{transform: `rotateZ(${time.minutes}deg)`}} className={style.mn} id="mn"/>
            </div>
            <div className={style.sec}>
                <div id="sc" style={{transform: `rotateZ(${time.seconds}deg)`}} className={`${style.sc}`}/>
            </div>
        </div>
    )

}