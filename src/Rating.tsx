import React, {useState} from "react";

type RatingProps = {
    // value: 1 | 2 | 3 | 4 | 5
}

export function Rating(props: RatingProps) {

    let [value, setValue] = useState(0)

    return <div>
        <Star selected={value > 0} point={1} set={setValue}/>
        <Star selected={value > 1} point={2} set={setValue}/>
        <Star selected={value > 2} point={3} set={setValue}/>
        <Star selected={value > 3} point={4} set={setValue}/>
        <Star selected={value > 4} point={5} set={setValue}/>

    </div>

}

type StarProps = {
    selected: boolean
    point: 0 | 1 | 2 | 3 | 4 | 5
    set: (p: number) => void
}

let Star = (props: StarProps) => props.selected ? <span onClick={() => {
    props.set(props.point)
}}> <b>Star </b></span> : <span onClick={() => {
    props.set(props.point)
}}> Star </span>




