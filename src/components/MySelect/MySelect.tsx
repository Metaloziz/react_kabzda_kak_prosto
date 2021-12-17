import React from "react";
import {dataPT, statePT} from "./MySelect.stories";
import s from './MySelect.module.css'


type MySelectPT = {
    data: dataPT
    state: statePT
}

export const MySelect = ({data, state}: MySelectPT) => {


    const callback1 = () => {
        state.setCollapsed(!state.collapsed)
    }
    const callback2 = (title: string) => {
        state.setTitle(title)
        state.setCollapsed(!state.collapsed)
    }


    return (
        <div className={s.body}>
            <div className={s.title} onClick={callback1}>{state.title}</div>
            <div className={s.items}>
                {state.collapsed && data.map(l => <div

                    onMouseEnter={() => {
                        // state.setTitle(l.title)
                    }}
                    className={l.title === state.hover ? s.selected : ''} key={l.id}
                    onClick={() => {
                        callback2(l.title)
                    }}><span>{l.title}</span></div>)}

            </div>

        </div>
    );
};
