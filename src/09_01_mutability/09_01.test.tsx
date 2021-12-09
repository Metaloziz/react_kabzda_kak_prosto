export {}


test.skip('array test', () => {

    type userProps = {
        name: string
        age: number
    }
    let user: userProps = {
        name: "Andrew",
        age: 27
    }
    let addAge = (a: userProps) => {
        a.age++
    }
    addAge(user)

    let superman = user
    superman.age = 1000

    const users = [
        {
            name: "Andrew",
            age: 27
        },
        {
            name: "Oleg",
            age: 90
        }
    ]

    users.push({name: 'Wasya', age: 11})
    users[0].age = 30

    expect(user.age).toBe(1000)
    expect(users.length).toBe(3)
    expect(users[0].age).toBe(30)
})
test.skip('value test', () => {

    let usersCout = 100

    let adminsCout = usersCout

    adminsCout++


    expect(adminsCout).toBe(101)
})

test('2 objects test', () => {

    type userProps = {
        name: string
        age: number
        address: { title: { title: string } }
    }

    let address = {
        title: 'Minsk'
    }

    let user: userProps = {
        name: "Andrew",
        age: 27,
        address: {
            title: address
        }
    }

    let user2: userProps = {
        name: "Alex",
        age: 22,
        address: {
            title: user.address.title
        }
    }


    expect(user2.address.title.title).toBe('Minsk')
})

test('referense type array test', () => {

    type userProps = {
        name: string
        age: number
        address: { title: { title: string } }
    }

    let address = {
        title: 'Minsk'
    }

    let user: userProps = {
        name: "Andrew",
        age: 27,
        address: {
            title: address
        }
    }

    let user2: userProps = {
        name: "Alex",
        age: 22,
        address: {
            title: user.address.title
        }
    }


    let users = [user, user2, {name:'Solo', age:11,address:address}]

    user2.name='Poul'


    expect(users[1].name).toBe('Poul')
})


test('sort method', ()=>{

    let array = ['a', 'z', 'b']

    let array2 = array.sort()

    expect(array2).toEqual(['a','b','z'])

})