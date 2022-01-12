import React, {useCallback, useState} from 'react';


type CounterPT = {
    value: number
}

type ListPT = {
    list: string[]
    addItem: () => void
}

export const CounterNewS = (props: CounterPT) => {
    console.log('Counter')
    return <span key={1}>{props.value}</span>
}

export const ListSecret = (props: ListPT) => {
    console.log("List")

    return <div>
        <button onClick={() => props.addItem()}>add</button>
        {props.list.map((list, index) => <div key={index}>{list}</div>)}
    </div>
}

const CounterNew = React.memo(CounterNewS)
const List = React.memo(ListSecret)


export const ReactMemoContainer = () => {
    console.log('common')

    const [value, setValue] = useState(0)
    const [people, setPeople] = useState(['1', '2', '3'])

    const newCallBack = useCallback(() => {
        return setPeople([...people, '10'])
    }, [people])

    // const callBack = () => setPeople([...people, '10'])

    return (
        <div>
            <button onClick={() => setValue(value + 1)}>add</button>
            <div>
                <CounterNew value={value}/>
            </div>
            {/*<button onClick={callBack}>addList</button>*/}
            <List addItem={newCallBack} list={people}/>
        </div>
    );
};


