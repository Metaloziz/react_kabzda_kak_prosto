export  type actionPT = {
    type: 'CHANGE'
}

export const CHANGE: actionPT = {
    type: 'CHANGE'
}

type statePT = {
    collapsed: boolean
}

export const state = {
    collapsed: true
}
const reducer = (value: statePT, action: actionPT): statePT => {

    switch (action.type) {
        case 'CHANGE':
            let copy: statePT = {
                ...value,
                collapsed: !value.collapsed
            }
            console.log('change')
            return copy
    }
    throw new Error('Are you siryos?')
}

let state1 = {
    collapsed: true
}
export const CHANGE2: actionPT = {
    type: 'CHANGE'
}


test('test_reducer', () => {

    let result = reducer(state1, CHANGE2)


    expect(result).not.toBe(state1)

})