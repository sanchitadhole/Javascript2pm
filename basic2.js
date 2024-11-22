let rohini = true;

if (required) {
  console.log("condition satisfied");
} else {
  console.log("condition not satisfied");
}







let a = 10;


if (a == 11) {
  console.log("succesfull");
} else {
  console.log("not successful");
}

//while
//do while
// for loop

// while()


//syntax

// while (condition) {
//   // code block to be executed
// }




while(true){
    console.log("i am inside the loop")
}

let i = 0
while(i>10){
    i++
    console.log(i)
}

// do while loop
console.log("****************************");

// let i=12
// do{
//     i++
// }while(i>10);
//     console.log(i)

console.log("******************");

// for (let k = 1; k <= 100; k++) {
//   if (k % 2 == 0 && k % 5 == 0) {
//     console.log(k);
//   }
// }


let n = 0
for (let k = 1; k <= 100; k++) {
  if (k % 2 == 0 && k % 5 == 0) {
    n++
    console.log(k);

    if(n==3){
        break;
    }
    
  }
}

//&& - two condition check
//||  - in two condition check
