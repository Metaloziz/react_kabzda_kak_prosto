export {}

export type userProps = {
    name: string
    hair: number
    address: { city: string }
    laptop: { mark: string }
    books: string[]
}

export const makeHairStyle = (u: userProps, power: number) => ({
        ...u,
        hair: u.hair / power
    })

export const moveUser = (u: userProps, city: string) => ({
        ...u,
        address: {...u.address, city}
    })

export const changeLaptopUser = (u: userProps, mark: string) => ({
        ...u,
        laptop: {...u.laptop, mark}
    })

export function changeBooksUsers(user: userProps, newBook: string[]) {

    // first variant
    // let a = [...user.books]
    // a.push(...newBook)
    //
    //
    // return {
    //     ...user,
    //     books: a
    // }

    // second variant
    return {
        ...user,
        books: [...user.books, ...newBook]
    }


}


export function updateBooksUsers(user: userProps, oldBook: string, newBook: string) {
    // first variant
    // let a = [...user.books]
    // a.splice(a.indexOf(oldBook), 1, newBook)
    //
    // return {
    //     ...user,
    //     books: a
    // }

    // second variant
    return {
        ...user,
        books: user.books.map(i => i === oldBook ? newBook : i)
    }

    // //third variant
    // return {
    //     ...user,
    //     books: user.books.reduce(acc,[])
    // }

}