let num = 20; 
let ar = num
let value1 = 0;
let value2 = 1;
while(ar) {
    value1 = value1 + ar%2*value2;
    ar  = Math.floor(ar/2);
    value2= value2*10;
}

console.log(num, 'in binary is', value1)
