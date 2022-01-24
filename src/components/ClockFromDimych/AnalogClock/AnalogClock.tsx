import {ChildrenClockPT} from "../ClockFromDimych";
import './AnalogClock.css'

export const AnalogClock = ({data}: ChildrenClockPT) => {


    console.log('AnalogClock')

    const secondsStyle = {
        transform: `rotate(${data.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${data.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${data.getHours() * 30}deg)`
    };


    return (
        <div className={"clock"}>
            <h3>Clock</h3>
            <div className={"analog-clock"}>
                <div className={"dial seconds"} style={secondsStyle}/>
                <div className={"dial minutes"} style={minutesStyle}/>
                <div className={"dial hours"} style={hoursStyle}/>
            </div>
        </div>
    );
};