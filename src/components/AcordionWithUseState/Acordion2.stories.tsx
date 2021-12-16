import {useState} from "react";

import {action} from "@storybook/addon-actions";
import {Accordion2} from "./Acordion2";
import {v1} from "uuid";

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

export const AccordionWork = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion2 title={'menu'}
                       value={value}
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
