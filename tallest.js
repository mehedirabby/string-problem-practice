function maxInArray (numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        
        const index = i;
        const element = numbers[index];
        console.log(i,element);
        if(element > largest){
            largest = element;
        }
        
    }
    return largest;
}
const heights = [167,190,120,165,137,];
const tallest = maxInArray(heights);
console.log('tallest person is ',tallest);



//hw


// function minArray (numbers){
//     let lowest = numbers [0];

//     for(let i = 0;i <minArray.length;i++){
//         const index = i;
//         const element = numbers[index];
//         console.log(element);
//         if(element > lowest){
//             lowest = element;
//         }
//     }
//     return lowest;

// }
// const min = [120,30,65,98,75,41]
// const result = minArray(min);
// console.log('lowest number is',min);