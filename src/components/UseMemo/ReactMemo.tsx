import React, {useMemo, useState} from 'react';

import {MySelect} from "../MySelect/MySelect";

export type dataPT = { data: itemPT[] }
export type itemPT = { id: string, title: string }

export const ReactMemo = () => {

    console.log('useMemo')

    let data: itemPT[] = [
        {id: '1', title: 'Minsk'},
        {id: '2', title: 'LA'},
        {id: '3', title: 'NY'},
        {id: '4', title: 'Moscow'},
        {id: '5', title: 'Kiev'},
        {id: '6', title: 'Denver'}
    ]

    let data_1 = data.filter((l) => {
        console.log('data1')
        return l.id !== '1' && '2'
    })
    let data_2 = data.filter(l => l.id !== '3' && '4')
    let data_3 = data.filter(l => l.id !== '6' && '5')


    return (
        <div style={{display: "flex", gap: '20px'}}>
            <MySelect data={data_1}/>
            <MySelect data={data_2}/>
            <MySelect data={data_3}/>
        </div>
    );
};


