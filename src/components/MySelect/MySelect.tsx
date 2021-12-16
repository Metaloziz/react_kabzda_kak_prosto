import React, {useState} from "react";
import {dataPT} from "./MySelect.stories";
import s from './MySelect.module.css'


type MySelectPT = {
    data: dataPT
}

export const MySelect = ({data}: MySelectPT) => {


    const [title, setTitle] = useState<string>(data[0].title)
    const [collapsed, setCollapsed] = useState<boolean>(true)

    const callback1 = () => {
        setCollapsed(!collapsed)
    }
    const callback2 = (title: string) => {
        setTitle(title)
        setCollapsed(!collapsed)
    }


    return (
        <div className={s.body}>
            <div className={s.title} onClick={callback1}>{title}</div>
            <div className={s.items}>
                {collapsed && data.map(l => <div  key={l.id} onClick={() => {
                    callback2(l.title)
                }}><span>{l.title}</span></div>)}

            </div>

        </div>
    );
};
