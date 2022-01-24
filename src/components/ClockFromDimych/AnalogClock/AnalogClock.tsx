import {ChildrenClockPT} from "../ClockFromDimych";
import s from './AnalogClock.module.css'


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
        <div className={s.clock}>
            <h3>Clock</h3>
            <div className={s.analogClock}>
                <div className={s.seconds} style={secondsStyle}/>
                <div className={s.minutes} style={minutesStyle}/>
                <div className={s.hours} style={hoursStyle}/>
            </div>
        </div>
    );
};