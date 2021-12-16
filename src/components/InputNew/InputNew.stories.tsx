import {InputNew} from "./InputNew";
import {ChangeEvent, useRef, useState} from "react";

export default {
    title: "InputNew",
    components: InputNew   // I can add different component
}

// export const NewInputCall = () => <InputNew/>


// export const ControlledInputVersionTwo =()=> {
//     const [parentValue, setParentValue] = useState('')
//
//     const changeUseStat = (event:ChangeEvent<HTMLInputElement>)=>{
//         setParentValue(event.currentTarget.value)
//     }
//     return <input value={parentValue} onChange={changeUseStat}/>
// }
export const uncontroledInput_Fix_Value = () => <input type={"text"} placeholder={'not fix'}/>

export const TrackUncontroledInputFixValue = () => {
    const [value, setValue] = useState('text')
    let setNewText = (event: ChangeEvent<HTMLInputElement>) => {
        let newValue = event.currentTarget.value
        setValue(newValue)
    }
    return <><input onChange={setNewText} value={'fix'}/>-{value}</>
}
export const TrackUncontroled = () => {

    const [value, setValue] = useState('')
    const refLink = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = refLink.current as HTMLInputElement
        setValue(el.value)
    }
    return <><input ref={refLink}/>
        <button onClick={save}>save</button>
        -actual text:{value}</>
}
export const ControledInputFixValue = () => <input type={"text"} value={'fix value'}/>





