import React from "react";

type AccordionProps = {
    title: string
    collapsed: boolean
}


export function Accordion(props: AccordionProps) {

    return <div>
        <AccordionTitle title={props.title}/>
        {props.collapsed && <AccordionBudy/>}
    </div>
}


let AccordionTitle = (props: { title: string }) => <h3>{props.title}</h3>

let AccordionBudy = () => <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>

