import React from "react";


type PropType = {
    on: boolean
    setOn: (props: boolean) => void
    // on: boolean
}


export function OnOff(props: PropType) {


    const onStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: props.on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '30px 0 0 10px',
        backgroundColor: props.on ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {props.setOn(true)}}>On</div>
            <div style={offStyle} onClick={() => {props.setOn(false)}}>Off
            </div><div style={indicatorStyle}>.</div>
        </div>

    )
}
