export {}


type userProps = {
   name: string
   age: number
}


 let user = {
   name: "Andrew",
   age: 27
}


 let addAge =(a: userProps)=>{
   a.age++
}