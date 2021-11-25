import React from "react";

type AcordionProps = {
    title: string
    collapsed: boolean
}


export function Acordion(props: AcordionProps) {

return <div>
        <AcordionTitle title={props.title}/>
    { props.collapsed && <AcordionBudy/>}
    </div>
}


let AcordionTitle = (props: { title: string }) => <h3>{props.title}</h3>

let AcordionBudy = () => <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>

