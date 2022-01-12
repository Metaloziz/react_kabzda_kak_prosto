import {ChangeEvent, useMemo, useState} from "react";

export const UseMemoTest = () => {

    const [value1, setValue1] = useState<number>(1)
    const [value2, setValue2] = useState<number>(1)

    let result1 = 0
    let result2 = 2

    for (let i = 0; i < 10; i++) {
        console.log('for1')
        result1 = result1 + value1
    }

    useMemo(() => {
        for (let i = 0; i < 10; i++) {
            console.log('for2')
            result2 = result2 + value2
        }
    }, [value2])


    return <div>
        <input value={value1} onChange={(e) => setValue1(+e.currentTarget.value)}/>
        <input value={value2} onChange={(e) => setValue2(+e.currentTarget.value)}/>
        <div>
            result1 :{result1} </div>
        <div>result2 :{result2}</div>

    </div>
}