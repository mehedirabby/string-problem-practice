const result = Math.pow(3,8);
console.log(result);

const num1 = 25;
const num2 = 45;
const gap = Math.abs (num1 - num2);
if (gap <5  ){
    console.log('you can be friends');
}
else{
    console.log('you stay apart');
}

/*


*/ 
const number = 2.86365698;
const fullNumber = Math.round(number);

const result3 = Math.ceil(2.136363);
console.log(result3);

const result2 = Math.floor(2.9696);
console.log(result2)
// console.log(fullNumber);


//Random
// console.log(Math.random());
for(let i = 0;i<=20;i++){
    const random = Math.random()*6;
console.log(random);
}