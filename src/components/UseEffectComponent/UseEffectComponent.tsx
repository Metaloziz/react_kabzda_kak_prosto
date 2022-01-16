import {useState} from "react";

const generating = () => {
    return 1
}
export const UseEffectComponent = () => {

    // debugger

    console.log('UseEffectComponent_1')

    const [number, setNumber] = useState<number>(generating)
    const [title, setTitle] = useState<string>('title')

    const changer = () => {
        setNumber(n => n + 1)
    }
    const changer2 = () => {
        setTitle(new Date().toLocaleTimeString())
    }


    // useEffect(() => {
    //     console.log('useEffect')
    //     setInterval(() => {
    //         console.log('setInterval')
    //         setTitle(new Date().toLocaleTimeString())
    //         setNumber(number + 1)
    //     }, 1000)
    // }, [number])


    return (
        <div>
            <button onClick={changer}>add</button>
            {number}
            <button onClick={changer2}>setTitle</button>
            {title}
        </div>
    );
};