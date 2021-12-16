import React from 'react';
import {MySelect} from "./MySelect";
import {v1} from "uuid";


export default {
    title: "MySelect",
    components: MySelect
}
export type dataPT = itemDataPT[]

export type itemDataPT = {
    id: string
    title: string
}

const data: dataPT = [
    {id: v1(), title: 'Minsk'},
    {id: v1(), title: 'LA'},
    {id: v1(), title: 'NY'},
]

export const MySelectRealisation = () => <MySelect data={data}/>
