import React, {useMemo, useState} from "react";

import s from './MySelect.module.css'
import {dataPT, itemPT} from "../UseMemo/ReactMemo";
import {RatingValuePropsType} from "../Rating/Rating";


type MySelectPT = {
    data: itemPT[]

}

export const MySelect = (props: MySelectPT & dataPT) => {

    let [title, setTitle] = useState('1')
    let [collapsed, setCollapsed] = useState(false)
    let [hover, setHover] = useState<string>()

    console.log('change')

    // const useMemoFun = useMemo(() => {
    //     return () => console.log(props.data)
    // }, [props.data])
    // useMemoFun()

    console.log(props.data)

    let state = {
        title: title,
        setTitle: setTitle,
        collapsed: collapsed,
        setCollapsed: setCollapsed,
        hover: hover,
        setHover: setHover
    }

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
                {state.collapsed && props.data.map(l => <div

                    onMouseEnter={() => {
                        // state.setTitle(l.title)
                    }}
                    className={title === state.hover ? s.selected : ''} key={l.id}
                    onClick={() => {
                        callback2(l.title)
                    }}><span>{l.title}</span></div>)}
            </div>
        </div>
    );
};

// export const MySelect1 = React.memo(MySelect_init)
