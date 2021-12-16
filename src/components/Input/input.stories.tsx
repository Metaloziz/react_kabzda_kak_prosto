import {ChangeEvent, useState} from "react";
import {action} from "@storybook/addon-actions";
// import input = Simulate.input;


export default {
    title: 'input',
    // components: input
}
//
// export const UncontroledInput = () => <input/>
// export const TrackValue = () => {
//     const [value, setValue] = useState('')
//     return <InputNew text={value} changeText={setValue}/>
// }
// export const TrackValueByButton = () => {
//     const [value, setValue] = useState<string>('')
//
//     const callBack = () => {
//         setValue('hoh')
//     }
//
//     return <>
//         <InputNew text={value} changeText={setValue}/>
//     </>
// }
// export const ControledInputWhitFV = () => <input value={'Andrew'}/>


export const ControlledInput = () => {
    const [value, setValue] = useState<string>('')

    // const callBack = () => {
    //     action("want to change")
    //     setValue('a')
    // }

    return <input value={value} onChange={(e) => {
        console.log(e)
        debugger
        setValue('')

    }}/>
}
export const ControlledCheckBox = () => {
    const [value, setValue] = useState<boolean>(true)

    // const callBack = () => {
    //     action("want to change")
    //     setValue('a')
    // }

    return <input type={"checkbox"} checked={value} onChange={(e) => {
        console.log(e)
        action('asd')
        setValue(!value)

    }}/>
}

export const ControlledCheckSelect = () => {
    const [value, setValue] = useState<string>('')

    const callBack = (event: ChangeEvent<HTMLSelectElement>) => {
        setValue(event.currentTarget.value)
    }

    return <select value={value} onChange={callBack}>
        <option>none</option>
        <option value={'1'}>KoЯn</option>
        <option value={'2'}>Rammstein</option>
        <option value={'3'}>LP</option>
    </select>

}