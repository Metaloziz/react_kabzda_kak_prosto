import {DigitalClock} from "./DigitalClock/DigitalClock";
import {AnalogClock} from "./AnalogClock/AnalogClock";
import {useEffect, useState} from "react";

type ClockFromDimychPT = {
    mode: 'analog' | 'digital'
}
export type ChildrenClockPT = {
    data: Date
}


export const ClockFromDimych = (props: ClockFromDimychPT) => {

    const [date, setDate] = useState<Date>(new Date())

    const changeTime = () => {
        return new Date()
    }

    useEffect(() => {

        let interval = setInterval(() => {
            console.log('setInterval')
            setDate(changeTime)
        }, 1000)

        return () => {
            clearInterval(interval)
        }

    }, [])


    let view

    switch (props.mode) {
        case "digital":
            view = <DigitalClock data={date}/>
            break
        case "analog":
        default:
            view = <AnalogClock data={date}/>
    }

    return (

        <div>
            {view}
        </div>
    )
};



