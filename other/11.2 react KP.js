const a = () => { console.log('Hello') }

a()

let b = a

b()

console.log(b===a)

b = a.bind()

b()
console.log(b===a)