// links to watch theory
// https://www.youtube.com/watch?v=6napu-MGQDo&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=47
// https://www.youtube.com/watch?v=I8LNJpG60vI&feature=youtu.be

// 1. Simple object
let man = {
    name: 'John',
    age: 28
};

let manFullCopy  //  your code

test('1', () => {

    manFullCopy = {...man}
    manFullCopy.age = 50

    expect(man).not.toBe(manFullCopy)
    expect(man.age).toBe(28)
    expect(manFullCopy.age).toBe(50)
})

// 2. Array of primitives
let numbers = [1, 2, 3];

let numbersFullCopy  //  your code

test('2', () => {

    numbersFullCopy = [...numbers]
    manFullCopy[0] = 50

    expect(numbers).not.toBe(numbersFullCopy)
    expect(numbers[0]).toBe(1)
    expect(manFullCopy[0]).toBe(50)
})


// 3. Object inside an object
let man1 = {
    name: 'John',
    age: 28,
    mother: {
        name: 'Kate',
        age: 50
    }
};

let man1FullCopy // your code


test('3', () => {

    man1FullCopy = {...man1, mother: {...man1.mother}}
    man1FullCopy.mother.age = 100

    expect(man1).not.toBe(man1FullCopy)
    expect(man1.mother).not.toBe(man1FullCopy.mother)
    expect(man1.mother.age).toBe(50)
    expect(man1FullCopy.mother.age).toBe(100)

})


// 4. Array of primitives inside an object
let man2 = {
    name: 'John',
    age: 28,
    friends: ["Peter", "Steven", "William"]
};

let man2FullCopy  // your code

test('4', () => {

    man2FullCopy = {...man1, friends: [...man2.friends]}
    man2FullCopy.friends[0] = 'Andrew'

    expect(man2).not.toBe(man2FullCopy)
    expect(man2.friends).not.toBe(man2FullCopy.friends)
    expect(man2.friends[0]).toBe("Peter")
    expect(man2FullCopy.friends[0]).toBe('Andrew')
})


// 5 Array of objects
let people = [
    {name: "Peter", age: 30},
    {name: "Steven", age: 32},
    {name: "William", age: 28}
];


let peopleFullCopy  // your code

test('5', () => {

    peopleFullCopy = people.map((l) => ({...l}))
    peopleFullCopy[0].name = "Patrik"

    expect(people).not.toBe(peopleFullCopy)
    expect(people[0]).not.toBe(peopleFullCopy[0])
    expect(peopleFullCopy[0].name).toBe("Patrik")
    expect(people[0].name).toBe("Peter")

})


// 6 Array of objects inside object
let man3 = {
    name: 'John',
    age: 28,
    friends: [
        {name: "Peter", age: 30},
        {name: "Steven", age: 32},
        {name: "William", age: 28}
    ]
};

let man3FullCopy //  your code

test('6', () => {

    man3FullCopy = {...man3, friends: man3.friends.map((l) => ({...l}))}
    man3FullCopy.friends[2].age = 18

    expect(man3).not.toBe(man3FullCopy)
    expect(man3.friends).not.toBe(man3FullCopy.friends)
    expect(man3.friends[2].age).toBe(28)
    expect(man3FullCopy.friends[2].age).toBe(18)
})


// 7 Object inside an object, inside an object
let man4 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        }
    }
};

let man4FullCopy //  your code


test('7', () => {

    man4FullCopy = {...man4, mother: {...man4.mother, work: {...man4.mother.work}}}
    man4FullCopy.mother.work.position = 'CEO'

    expect(man4).not.toBe(man4FullCopy)
    expect(man4.mother).not.toBe(man4FullCopy.mother)
    expect(man4.mother.work).not.toBe(man4FullCopy.mother.work)
    expect(man4.mother.work.position).toBe("doctor")
    expect(man4FullCopy.mother.work.position).toBe('CEO')
})

// 8 Array of objects inside object -> object
let man5 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {name: "Kevin", age: 80},
            {name: "Jennifer", age: 78},
        ]
    }
};

let man5FullCopy //  your code

test('8', () => {

    man5FullCopy = {
        ...man5, mother: {
            ...man5.mother, work: {...man5.mother.work}, parents: man5.mother.parents
                .map((l) => ({...l}))
        }
    }


    man5FullCopy.mother.parents[0].name = 'Bro'

    expect(man5).not.toBe(man5FullCopy)
    expect(man5.mother).not.toBe(man5FullCopy.mother)
    expect(man5.mother.parents).not.toBe(man5FullCopy.mother.parents)

    expect(man5.mother.parents[0].name).toBe("Kevin")
    expect(man5FullCopy.mother.parents[0].name).toBe('Bro')
})


// 9 Object inside an object -> array -> object ->  object
let man6 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {
                name: "Kevin",
                age: 80,
                favoriteDish: {
                    title: "borscht"
                }
            },
            {
                name: "Jennifer",
                age: 78,
                favoriteDish: {
                    title: "sushi"
                }
            },
        ]
    }
};

let man6FullCopy  //  your code

test('9', () => {

    man6FullCopy = {
        ...man6, mother: {
            ...man6.mother, work: {...man6.mother.work}, parents: man6.mother.parents
                .map((l) => ({...l, favoriteDish: {...l.favoriteDish}}))
        }
    }


    man6FullCopy.mother.parents[0].favoriteDish.title = 'Milk'

    expect(man6).not.toBe(man6FullCopy)
    expect(man6.mother).not.toBe(man6FullCopy.mother)
    expect(man6.mother.parents).not.toBe(man6FullCopy.mother.parents)
    expect(man6.mother.parents[0]).not.toBe(man6FullCopy.mother.parents[0])
    expect(man6.mother.parents[0].favoriteDish).not.toBe(man6FullCopy.mother.parents[0].favoriteDish)

    expect(man6.mother.parents[0].favoriteDish.title).toBe("borscht")
    expect(man6FullCopy.mother.parents[0].favoriteDish.title).toBe('Milk')
})


//10 Array of objects inside an object -> object -> array -> object ->  object
let man7 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {
                name: "Kevin",
                age: 80,
                favoriteDish: {
                    title: "borscht",
                    ingredients: [
                        {title: "beet", amount: 3},
                        {title: "potatoes", amount: 5},
                        {title: "carrot", amount: 1},
                    ]
                }
            },
            {
                name: "Jennifer",
                age: 78,
                favoriteDish: {
                    title: "sushi",
                    ingredients: [
                        {title: "fish", amount: 1},
                        {title: "rise", amount: 0.5}
                    ]
                }
            },
        ]
    }
};

let man7FullCopy  //  your code

test('10', () => {

    man7FullCopy = {
        ...man7, mother: {
            ...man7.mother, work: {...man7.mother.work}, parents: man7.mother.parents
                .map((l) => ({
                    ...l, favoriteDish: {
                        ...l.favoriteDish, ingredients: l.favoriteDish.ingredients
                            .map((t) => ({...t}))
                    }
                }))
        }
    }


    man7FullCopy.mother.parents[0].favoriteDish.ingredients[1].title = 'Dog'

    expect(man7).not.toBe(man7FullCopy)
    expect(man7.mother).not.toBe(man7FullCopy.mother)
    expect(man7.mother.parents).not.toBe(man7FullCopy.mother.parents)
    expect(man7.mother.parents[0]).not.toBe(man7FullCopy.mother.parents[0])
    expect(man7.mother.parents[0].favoriteDish).not.toBe(man7FullCopy.mother.parents[0].favoriteDish)
    expect(man7.mother.parents[0].favoriteDish.ingredients).not.toBe(man7FullCopy.mother.parents[0].favoriteDish.ingredients)
    expect(man7.mother.parents[0].favoriteDish.ingredients[0]).not.toBe(man7FullCopy.mother.parents[0].favoriteDish.ingredients[0])

    expect(man7.mother.parents[0].favoriteDish.ingredients[1].title).toBe("potatoes")
    expect(man7FullCopy.mother.parents[0].favoriteDish.ingredients[1].title).toBe('Dog')
})