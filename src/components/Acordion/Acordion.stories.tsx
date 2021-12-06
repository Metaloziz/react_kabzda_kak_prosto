import {useState} from "react";

import {action} from "@storybook/addon-actions";
import {Acordion} from "./Acordion";
import {Accordion2} from "../AcordionWithUseState/Acordion2";

export default {
    title: "Accordion",
    components: Acordion
}

const callback =  action('changed')

export const AccordionCollapsed = () => <Accordion2 title={'menu'} value={true} oneClick={callback}/>
export const AccordionNotCollapsed = () => <Accordion2 title={'menu'} value={false} oneClick={callback}/>


export const ModiFy = () => {

    const [value, setValue] = useState<boolean>(true)
    console.log('hehes')

    return <Accordion2 title={'menu'} value={value} oneClick={setValue}/>

}

