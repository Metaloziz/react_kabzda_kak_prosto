import React from "react";

type AccordionPT = {
    title: string
    value: boolean
    oneClick: (value: boolean) => void
    data: AccordionItemsPT[]
    callbackItem: (id: string) => void
}
type AccordionTitlePT = {
    title: string
    onClick: () => void
}
type AccordionBodyPT = {
    data: AccordionItemsPT[]
    callbackItem: (id: string) => void
}
type AccordionItemsPT = {
    title: string
    id: string
}

export const Accordion2 = ({value, title, oneClick, data, callbackItem}: AccordionPT) => {

    const callBack = () => oneClick(!value)
    return (
        <>
            <AccordionTitle title={title} onClick={callBack}/>
            {value && <AccordionBody data={data} callbackItem={callbackItem}/>}
        </>
    )
}

export const AccordionTitle = ({title, onClick}: AccordionTitlePT) => {

    const callBack = () => onClick()
    return <h3 onClick={callBack}>{title}</h3>
}


export const AccordionBody = ({data, callbackItem}: AccordionBodyPT) => {

    return <ul>
        {data.map(l => <li key={l.id} onClick={() => callbackItem(l.id)}>{l.title}</li>)}
    </ul>
}

