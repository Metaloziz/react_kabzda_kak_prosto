import {InputNew} from "./InputNew";
import {OnOff} from "../../components/OnOff/OnOff";
import {ChangeEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: "input",
    components: OnOff   // I can add different component
}


export const ControledInput =()=> {

    const [parentValue, setParentValue] = useState('')

    return <input value={parentValue} onChange={action('hoho')}/>
}




export const NewInput_call = () => <InputNew/>
export const uncontroledInput_Fix_Value = () => <input type={"text"} placeholder={'not fix'}/>
export const TrackUncontroledInput_Fix_Value = () => {

    const [value, setValue] = useState('text')

    let setNewText = (event: ChangeEvent<HTMLInputElement>) => {
        let newValue = event.currentTarget.value
        setValue(newValue)
    }
    return <><input onChange={setNewText} value={'fix'}/>-{value}</>
}
export const TrackUncontroledInput_Fix_Value_By_Button = () => {

    const [value, setValue] = useState('')
    const refLink = useRef<HTMLInputElement>(null)

    const save = ()=> {
        const el = refLink.current as HTMLInputElement
        setValue(el.value)
    }


    return <><input ref={refLink}/><button onClick={save}>save</button>-actual text:{value}</>
}
export const ControledInput_Fix_Value = () => <input type={"text"} value={'fix value'}/>





