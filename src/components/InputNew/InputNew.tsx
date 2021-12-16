import {useRef} from "react";


type InputNewPT = {
    text: string
    changeText?: (newText: string) => void
}

export const InputNew = ({text, changeText}: InputNewPT) => {

    // const el = document.getElementById('input2') as HTMLInputElement

    const inputRef = useRef<HTMLInputElement>(null)
    const el = inputRef.current as HTMLInputElement

    const callBack = () => {

        if (changeText) {
            changeText(el.value)

        }
    }

    return <>
        <div>
            <input ref={inputRef} id={'input2'} placeholder={text}/>actual value: {text}
        </div>
        <button onClick={callBack}>set</button>
    </>
}
