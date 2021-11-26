import React from "react";


export type RatingValuePropsType = 1 | 2 | 3 | 4 | 5


type RatingProps = {
    value: RatingValuePropsType
    oneClick: (value: RatingValuePropsType) => void
}
type StarProps = {
    selected: boolean

    oneClick: () => void
}

export function Rating(props: RatingProps) {


    return <div>
        <Star selected={props.value > 0} oneClick={()=>{props.oneClick(1)}}/>
        <Star selected={props.value > 1} oneClick={()=>{props.oneClick(2)}}/>
        <Star selected={props.value > 2} oneClick={()=>{props.oneClick(3)}}/>
        <Star selected={props.value > 3} oneClick={()=>{props.oneClick(4)}}/>
        <Star selected={props.value > 4} oneClick={()=>{props.oneClick(5)}}/>

    </div>

}


let Star = (props: StarProps) => <span onClick={() => {
    props.oneClick()
}}> {props.selected ? <b>Star </b> : 'Star '} </span>