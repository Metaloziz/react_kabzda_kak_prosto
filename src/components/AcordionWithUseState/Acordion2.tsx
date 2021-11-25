import React, {useState} from "react";

type AcordionProps = {
    title: string
    // collapsed: boolean
}


export function Acordion2(props: AcordionProps) {





    let [collapsed, setColapsed] = useState(false)

return <div onClick={()=>{setColapsed(!collapsed)}}>
        <AcordionTitle title={props.title}/>
    { collapsed && <AcordionBudy/>}
    </div>
}


let AcordionTitle = (props: { title: string }) => <h3 >{props.title}</h3>

let AcordionBudy = () => <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>

