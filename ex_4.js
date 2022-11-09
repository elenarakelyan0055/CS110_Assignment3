const arr = [1, 2, 3];

let result = [];

// for (let index = arr.length - 1; index >= 0; index--) {
   // result += (arr[index])}
   
for (let index = arr.length - 1; index >= 0; index--) {
   result.push(arr[index])
}

console.log(result);