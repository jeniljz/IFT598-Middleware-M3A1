//SS-2 
// export const generateRandomNumber = function (minimum, maximum){
//     let x = Math.floor(Math.random() * (maximum - minimum)) + minimum;
//     return x;
//     }
// console.log(generateRandomNumber(10,100));




//SS-3

export const generateRandomNumber = function (minimum, maximum){
let x = Math.floor(Math.random() * (maximum - minimum)) + minimum;
return x;
}
console.log(`from Utility ${generateRandomNumber(10,100)}`);