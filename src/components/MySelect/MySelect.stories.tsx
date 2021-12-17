import React, {useState} from 'react';
import {MySelect} from "./MySelect";
import {v1} from "uuid";

export type dataPT = itemDataPT[]

export type itemDataPT = {
    id: string
    title: string
}
export type statePT = {
    title: string
    setTitle: (title: string) => void
    collapsed: boolean
    setCollapsed: (value: boolean) => void
    hover: string
    setHover: (value: string) => void
}


export default {
    title: "MySelect",
    components: MySelect
}

const data: dataPT = [
    {id: v1(), title: 'Minsk'},
    {id: v1(), title: 'LA_+'},
    {id: v1(), title: 'NY'},
]


export const MySelectRealisation = () => {

    const [title, setTitle] = useState<string>(data[0].title)
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [hover, setHover] = useState<string>(title)

    let state: statePT = {
        title: title,
        setTitle: setTitle,
        collapsed: collapsed,
        setCollapsed: setCollapsed,
        hover: hover,
        setHover: setHover
    }


    return <MySelect data={data} state={state}/>
}
