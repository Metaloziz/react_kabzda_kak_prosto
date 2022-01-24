import {useEffect, useState} from "react";
import {ClockAnalog} from "./ClockAnalog/ClockAnalog";


export const Clock = () => {

    const [time, setTime] = useState<string>("time")
    const [type, setType] = useState<boolean>(false)

    const changeTime = () => {
        return new Date().toLocaleTimeString()
    }

    useEffect(() => {
        let interval = setInterval(() => {
            setTime(changeTime)
        }, 1000)

        return () => {
            clearInterval(interval)
        }

    }, [])


    const changeTypeTime = () => {
        setType(!type)
    }

    return (

        <div>
            <button onClick={changeTypeTime}>ChangeTypeTime</button>

            {type ? <div>Digital: {time}</div> : <ClockAnalog/>}
        </div>
    )
}




