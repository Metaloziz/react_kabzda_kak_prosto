type actionPT = typeof changeAC

const CHANGE = 'CHANGE'

export const changeAC = {type: CHANGE} as const

type statePT = {
    collapsed: boolean
}

export const state = {
    collapsed: true
}

export const reducer = (value: statePT, action: actionPT): statePT => {

    switch (action.type) {
        case CHANGE:
            let copy: statePT = {
                ...value,
                collapsed: !value.collapsed
            }
            console.log('change')
            return copy
    }
    throw new Error('Are you siryos?')
}