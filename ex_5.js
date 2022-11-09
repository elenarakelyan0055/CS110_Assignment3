// let num = 4739

// let remainder = 0 

// while (num >= 0) {
//     remainder == num%2

    
// }


let num = 13; 
let ar = num
let dec1 = 0;
let dec2 = 1;
while(ar) {
    dec1 = dec1 + ar%2*dec2;
    ar  = Math.floor(ar/2);
    dec2 = dec2*10;
}

console.log(num, ':', dec1)
