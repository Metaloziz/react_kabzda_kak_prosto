import React from "react";

export {}

type usersType = {
    item: usersItemTypes
}
type usersItemTypes = {
    id: number
    name: string
}

export let users = [
    {
        id: 21341324,
        name: 'Andrew'
    },
    {
        id: 14134,
        name: 'Alex'
    },
    {
        id: 245072405,
        name: 'Bro'
    }
]


export let User = () => {

    let message = () => {
        console.log('user has been deleted')
    }

    const funct = () => {
        console.log("click")
    }


    return <div className={'Div'}>
        <script>
            let btn = document.getElementById('')
        </script>
        Andrew
        <button onMouseMove={message}>add</button>
        <button onClick={funct}>cleared</button>


    </div>
}