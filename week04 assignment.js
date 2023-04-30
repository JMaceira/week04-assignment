//Week #4 assignment 

console.log(`-----------------------------------------------
1.Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93. \n`)

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

console.log(`-----------------------------------------------
1a.Programmatically subtract the value of the first element in the array from the value in the last element of the array. 
Do not use numbers to reference the last element, find it programmatically.
ages[7] – ages[0] is not allowed! \n`)

console.log(ages[ages.length-1] - ages[0])

console.log(`-----------------------------------------------
1b.Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths). \n`)

ages.push(42);
console.log(ages);

console.log(`-----------------------------------------------
1c.Use a loop to iterate through the array and calculate the average age. \n`)

counter = 0;

for(let i = ages.length-1;i >= 0; i--) {
   // console.log(i);
    counter += ages[i];
}
 let avg = counter / ages.length;
console.log(avg);

console.log(`-----------------------------------------------
2.Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’. \n`)
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob',];
console.log (names)

console.log(`-----------------------------------------------
2a. Use a loop to iterate through the array and calculate the average number of letters per name. \n`)
 
counter = 0;

for(let i = 0; i < names.length; i++) {
    counter += names[i].length; //
    //console.log('length of name at ' + i + ': '+ names[i].length)
    //console.log(counter)
}
 avg = counter / names.length; // created avg variable to be able to print out the average of the names array average letters.
console.log('Average letter of names: ' + avg);

console.log(`-----------------------------------------------
2b.Use a loop to iterate through the array again and concatenate all the names together, separated by spaces \n`)

for (let i = 0; i < names.length; i++) {    //created loop to iterate through array and stop when its greater than array length.
    console.log(names.join(" "));           // used join to concatenate the names array names together and added " " to create the spaces
}

console.log(`-----------------------------------------------
3.How do you access the last element of any array? \n`)

console.log('By using [array3.Length -1] or array3[] and placing the index of the array you want inside');
let array3 = [42,'k',3,'cherry',5]
// let lastElement = array3[array3.length - 1];   
// console.log(lastElement) example

console.log(`-----------------------------------------------
4.How do you access the first element of any array? \n`)

console.log('By using array[0] for the first element in the array being the zero index.');
console.log(array3[0])      // example using the previous created array

console.log(`-----------------------------------------------
5.Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

//For example:

//let names = ["Kelly", "Sam", "Kate"];    // starting with this array
//let nameLengths = [5, 3, 4];             // create a new array \n`)

let nameLengths = []            //created new array

for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length)
}
console.log(nameLengths)

console.log(`-----------------------------------------------
6.Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. \n`)

sum = 0

for (let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];          // giving value to the sum variable of the namelengths added together using the iterator
}
console.log(sum)

console.log(`-----------------------------------------------
7.Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’). \n`)

function twoParam (word,n) {
  //  return word.concact(n);
}

console.log(twoParam('Hello','World'))
//console.log(`Hello ${word.repeat(3)}`);

console.log(`-----------------------------------------------
8.Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space. \n`)

function fullName(firstName, lastName) {
console.log(firstName + " " + lastName); //making sure the function returns a "fullName" when I call it and add arguments.
}
fullName('Tony', 'Peterson')

console.log(`-----------------------------------------------
9.  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100. \n`)

let array9 = [3,4,11,22,44]

function addThemUp () {
    sum = 0;
for (let i = 0; i < array9.length; i++) {
    sum += array9[i];
} if (sum > 100) {
    return true; //made an if/else statement to make sure that the total is greater than 100
} else {
    return false;
}
}
console.log(addThemUp()); //calling the function 

console.log(`-----------------------------------------------
10.Write a function that takes an array of numbers and returns the average of all the elements in the array. \n`)

let array10 = [10,20,30]

function averageElements() {
    counter = 0;

for(let i = array10.length-1;i >= 0; i--) { // iterating from last index to first index
    counter += array10[i]; // giving value to counter variable while its iterating the array
}
 let avg = counter / array10.length; //giving value to average from the counter and array.length equation
return avg;
}

console.log(averageElements())

console.log(`-----------------------------------------------
11.Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array. \n`)

let array1 = [4,4,8,8,11,11]            //created 1st array
let array2 = [5,5,10,19,28,1]           //created 2nd array
 sum1 = 0                               
 sum2 = 0
function greaterOrLess () {
    for (let i = 0; i < array1.length; i++) { 
        sum1 += array1[i];
        avg1 = sum1 / array1.length             // getting the average of the 1st array
    } 
    for (let i2 = 0; i2< array2.length; i2++) { 
        sum2 += array2[i2];
        avg2 = sum2 / array2.length             // getting the average of the 2nd array
   
    }  if (avg1 > avg2) {                       // checking if the average of array1 is greater than array2
        return true;                            // returning true if it is greather than 
    } else {
        return false;                           // if avg1 is less than avg2 returing false
    }

}
console.log(greaterOrLess())                    // calling the function

console.log(`-----------------------------------------------
12.Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50. \n`)
temp = 80
isHotOutside = temp > 65;
moneyInPocket = 200;

function willBuyDrink () {
 if (isHotOutside && moneyInPocket > 10.50){
    return true;
 } else {
    return false;
 }

}
console.log(willBuyDrink())

console.log(`-----------------------------------------------
13.  Create a function of your own that solves a problem. \n`)
// In comments, write what the function does and why you created it. 