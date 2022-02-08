function DeleteUserAction(userID) {

    this.id = userID;
    this.counter = function () {
        this.id++
    }
}

let obj1 = new DeleteUserAction(1)
let obj2 = new DeleteUserAction(2)

obj1.counter()
obj1.counter()
obj1.counter()

console.log(obj1, obj2)
console.log(obj1.counter === obj2.counter)

