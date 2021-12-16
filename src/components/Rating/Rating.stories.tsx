import {Rating, RatingValuePropsType} from "./Rating";
import {useState} from "react";

export default {
    title: "Rating stories",
    components: Rating
}

export const Rating0 = ()=> <Rating value={0} oneClick={x=>x}/>
export const Rating1 = ()=> <Rating value={1} oneClick={x=>x}/>
export const Rating2 = ()=> <Rating value={2} oneClick={x=>x}/>
export const Rating3 = ()=> <Rating value={3} oneClick={x=>x}/>
export const Rating4 = ()=> <Rating value={4} oneClick={x=>x}/>
export const Rating5 = ()=> <Rating value={5} oneClick={x=>x}/>
export const ChangeRating = () => {
    const [value, setValue] =useState<RatingValuePropsType>(1)
    return <Rating value={value} oneClick={setValue}/>
}