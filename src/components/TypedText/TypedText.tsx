import {useEffect, useState} from "react";

export const TypedText = () => {

    const [text, setText] = useState<string>('')

    useEffect(() => {

        const callBack = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text => text + e.key)
        }

        window.addEventListener("keypress", callBack)

        return () => {
            window.removeEventListener("keypress", callBack)
        }

    }, [])

    return (
        <div className={'1'}>
            Typed key : {text}
        </div>
    );
};