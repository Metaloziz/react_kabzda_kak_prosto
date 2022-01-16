import {useMemo, useState} from "react";


let generating = () => {
    return Math.round(Math.random() * 100000) / 100
}


export const UseStateCool = () => {

    console.log('UseStateCool')

    // let initNumber = useMemo(generating, [])

    const [number, setNumber] = useState<number>(generating)


    const changer = () => {
        setNumber(n => n + 1)
    }

    return (
        <div>
            <button onClick={changer}>add
            </button>
            {number}
        </div>
    );
};