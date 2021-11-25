import React, {useState} from "react";


type PropType = {
    // on: boolean
}


export function OnOff(props: PropType) {

    let [on, setOnOff]=useState(false)



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

    return (
        <div>
            <div style={onStyle} onClick={()=>{setOnOff(true)}}>On</div>
            <div style={offStyle} onClick={()=>{setOnOff(false)}}>Off</div>
            <div style={indicatorStyle} ></div>
        </div>

    )
}
