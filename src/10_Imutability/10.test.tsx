import {changeBooksUsers, changeLaptopUser, makeHairStyle, moveUser, updateBooksUsers, userProps} from "./10";

const user: userProps = {
    name: "Andrew",
    hair: 30,
    address: {city: 'Gomel'},
    laptop: {mark: 'Acer'},
    books: ['Martin Iden', 'Lagom']
}


test("update_haistyle", () => {

    const supperUser = makeHairStyle(user, 2)

    expect(user.hair).toBe(30)
    expect(supperUser.hair).toBe(15)

})

test("change_address_laptop", () => {

    const supperUser = moveUser(user, 'Minsk')
    const laptopUser = changeLaptopUser(user, 'Asus')

    expect(user.address.city).not.toBe(supperUser.address.city)
    expect(supperUser.address.city).toBe('Minsk')
    expect(user.laptop.mark).toBe('Acer')
    expect(laptopUser.laptop.mark).toBe('Asus')

})

test("change_books", () => {

    let newBooksUsers = changeBooksUsers(user, ['js','react'])

    expect(JSON.stringify(user.books)).toBe(JSON.stringify(['Martin Iden', 'Lagom']))

    expect(user.books).not.toBe(newBooksUsers.books)
    expect(JSON.stringify(newBooksUsers.books)).toBe(JSON.stringify(['Martin Iden', 'Lagom', 'js','react']))


})

test("update_books", () => {

    let newBooksUsers = updateBooksUsers(user, 'Lagom','ts')

    expect(user.books.length).toBe(2)
    expect(JSON.stringify(user.books)).toBe(JSON.stringify(['Martin Iden', 'Lagom']))
    expect(user.books).not.toBe(newBooksUsers.books)
    expect(JSON.stringify(newBooksUsers.books)).toBe(JSON.stringify(['Martin Iden','ts']))

})