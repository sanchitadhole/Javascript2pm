// Array  --- array is a collection of element

let arr = Array(6)
let arr1 = new Array(12, 13,45,56,76,12)
console.log(arr1)


let arr2 = [12,23,45,65,23]
console.log(arr2[2])
console.log(arr2[4])

//length method
console.log(arr2.length);


//push method   --- returns new length , element add karato

arr2.push(24)
arr2.push(25)
console.log(arr2)



//pop method


console.log("**************")
let a2 = arr2.pop()
console.log(a2)


//indexOf
//---if there is no number return -1
//---otherwise return index
console.log(arr2.indexOf(1))

//include
console.log(arr2.includes(12))
console.log(arr2.includes(99))

//unshift
console.log(arr2.unshift(2))
console.log(arr2)

//slice


let arr3 = [12,23,45,65,23]
let subarray = arr3.slice(2,5)     //sanchita dhole
console.log(subarray)

for(let i=0;i<arr3.length;i++){
    console.log(i)
}










