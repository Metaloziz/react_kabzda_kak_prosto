import React, {useState} from "react";

// type RatingProps = {
//     // value: 1 | 2 | 3 | 4 | 5
// }
type StarProps = {
    selected: boolean
    point: 0 | 1 | 2 | 3 | 4 | 5
    set: (p: number) => void
}

export function RatingWithUseState() {

    let [value, setValue] = useState(0)

    return <div>
        <Star selected={value > 0} point={1} set={setValue}/>
        <Star selected={value > 1} point={2} set={setValue}/>
        <Star selected={value > 2} point={3} set={setValue}/>
        <Star selected={value > 3} point={4} set={setValue}/>
        <Star selected={value > 4} point={5} set={setValue}/>
    </div>

}


let Star = ({set, selected, point}: StarProps) => {

    const change = () => {
        set(point)
    }

    return <span onClick={change}> {selected ? <b>Star </b> : 'Star '} </span>
}