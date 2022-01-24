import {ChildrenClockPT} from "../ClockFromDimych";


export const DigitalClock = ({data}: ChildrenClockPT) => {

    console.log('DigitalClock')

    return (
        <div>
            {data.toLocaleTimeString()}
        </div>
    );
};

