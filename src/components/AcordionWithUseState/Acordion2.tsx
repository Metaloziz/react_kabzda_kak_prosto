import React from "react";

type AccordionProps = {
    title: string
    value: boolean
    oneClick: (value: boolean) => void
    // collapsed: boolean
}
type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}


export function Accordion2(props: AccordionProps) {

    return <div>
        <AccordionTitle title={props.title} onClick={() => {
            props.oneClick(!props.value)
        }}/>
        {props.value && <AccordionBody/>}
    </div>
}


let AccordionTitle = (props: AccordionTitlePropsType) => <h3 onClick={() => {
    props.onClick()
}}>{props.title}</h3>

let AccordionBody = () => <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>

