import {Accordion} from "./Accordion";


export default {
    title: "Accordion",
    components: Accordion
}

export const AccordionCollapsed = () => <Accordion title={'User'} collapsed={false}/>
export const AccordionNotCollapsed = () => <Accordion title={'User'} collapsed={true}/>


