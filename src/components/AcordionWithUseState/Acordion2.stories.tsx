import {useState} from "react";

import {action} from "@storybook/addon-actions";
import {Accordion2} from "./Acordion2";

export default {
    title: "AccordionWithUseState",
    components: Accordion2
}

const callback =  action('changed')

export const AccordionCollapsed = () => <Accordion2 title={'menu'} value={true} oneClick={callback}/>
export const AccordionNotCollapsed = () => <Accordion2 title={'menu'} value={false} oneClick={callback}/>


export const ModiFy = () => {

    const [value, setValue] = useState<boolean>(true)
    return <Accordion2 title={'menu'} value={value} oneClick={setValue}/>

}

