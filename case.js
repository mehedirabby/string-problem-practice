const userName = 'blackPink'
const userInput = 'blackpinK'
console.log(userName.toLowerCase())
console.log(userInput.toUpperCase())
console.log(userInput.toLocaleLowerCase())


if(userName.toLowerCase() === userInput.toLowerCase()){
    console.log('valid user')
}
else{
    console.log('invalid user');
}