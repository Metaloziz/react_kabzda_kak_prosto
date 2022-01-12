import {useReducer, useState} from "react";

import {action} from "@storybook/addon-actions";
import {Accordion2} from "./Acordion2";
import {v1} from "uuid";
import {reducer, state} from "./reducer";
import {CHANGE} from "./Acordion2.test";

export default {
    title: "AccordionWithUseState",
    components: Accordion2
}

const callback = action('changed')

const callbackItem = (itemId: string) => {
    console.log(itemId)
}

const arrayString = [
    {title: 'Andrew', id: v1()},
    {title: 'Alex', id: v1()},
    {title: 'Artem', id: v1()}
]


export const AccordionWorkUseReduce = () => {


    const [value2, dispatch] = useReducer(reducer, state)

    const localCallBack = () => {
        dispatch(CHANGE)
    }

    return <Accordion2 title={'menu'}
                       value={value2.collapsed}
                       oneClick={localCallBack}
                       data={arrayString}
                       callbackItem={callbackItem}/>
}

export const AccordionWork = () => {
    const [value1, setValue] = useState<boolean>(true)

    return <Accordion2 title={'menu'}
                       value={value1}
                       oneClick={setValue}
                       data={arrayString}
                       callbackItem={callbackItem}/>
}


export const AccordionCollapsed = () => <Accordion2 title={'menu'}
                                                    value={true}
                                                    oneClick={callback}
                                                    data={arrayString}
                                                    callbackItem={callbackItem}/>

export const AccordionNotCollapsed = () => <Accordion2 title={'menu'}
                                                       value={false}
                                                       oneClick={callback}
                                                       data={arrayString}
                                                       callbackItem={callbackItem}/>
