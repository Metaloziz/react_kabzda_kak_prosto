import React, {useState} from "react";

type PropType = {
    setOn: (props: boolean) => void
    // on: boolean
}

export function OnOffWithUseState(props: PropType) {

    let [on, setOnOff] = useState(false)

    const onStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '30px 0 0 10px',
        backgroundColor: on ? 'green' : 'red'
    }

    let switchOn = () => {
        setOnOff(true)
        props.setOn(true)
    }
    let switchOff = () => {
        setOnOff(false)
        props.setOn(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={switchOn}>On</div>
            <div style={offStyle} onClick={switchOff}>Off</div>
            <div style={indicatorStyle}>.</div>
        </div>
    )
}
