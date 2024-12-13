let arr = [
    {id:1, name:"salima", age:12},
    {id:2, name:"samira", age:23},
    {id:3, name:"sabina", age:23},
]

// add ma'lumot qo'shishish

// function onAddd(id,name,age) {
//     let res = [...arr,{id,name,age}]
//     console.log(res)
// }
// onAddd(4,"durdona",34)


// update ma'lumot almashtirish 

// function onUpdate(id,name){
//     let res = arr.map(v => v.id == id?{...v,name}:v)
//     console.log(res)
// }

// onUpdate(2,"oysha")


//  search ma'lumot qidirish

// function onSearch (age) {
//     let res = arr.filter(v=> v.age == age)
//     console.log(res)
// }
// onSearch(12)


// delete malumot o'chirish

function onDetele (p) {
    let res = arr.filter(v => v.name !== p)
    console.log(res)
}
onDetele("samira")