let first = 5;
let second = 7;
console.log(first , second);
// this is wrong approach
// first = second;
// second = firts ;


//1st approach
// const temp = first;
// first = second;
// second = temp;

//approach2 
[first , second] = [second ,first];

console.log(first,second);

let a = 35;
 let b = 36;
// const tor = a;
// a = b;
//  b = tor ;


[a,b] = [b,a];

console.log(a , b);

