import {Accordion} from "./Accordion";


export default {
    title: "Accordionnnnnnn",                // just name in StoryBook
    components: Accordion
}

export const AccordionCollapsed = () => <Accordion title={'User'} collapsed={false}/>  // just name element in StoryBook
export const AccordionNotCollapsed = () => <Accordion title={'User'} collapsed={true}/>


