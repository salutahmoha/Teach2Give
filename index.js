/*Question 1: FizzBuzz
Write a program that prints the numbers from 1 to 100. For multiples of 3, print "Fizz"; for 
multiples of 5, print "Buzz"; and for numbers that are multiples of both 3 and 5, print 
"FizzBuzz".*/
 for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }
    else if(i % 3 === 0){
        console.log("Fizz");
    }
    else if(i % 5 === 0){
        console.log("Buzz");
    }else{
        console.log(i)
    }
 }

 /*Question 2: Fibonacci Sequence
Write a program to generate the Fibonacci sequence up to 100.
*/
function generateFibbonacci(limit){
    let fibSeq = [1,2];

    while(fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2] <= limit){
        fibSeq.push(fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2]);
    }
    return fibSeq;
}

let fibbonacciSequence = generateFibbonacci(100);

console.log("Fibbonacci Sequence upto 100:");
console.log(fibbonacciSequence.join(','));

/*Question 3: Power of Two
Write a program that takes an integer as input and returns true if the input is a power of two.*/

function isPowerOfTwo(num){
    if(num <= 0 || !Number.isInteger(num)){
        return false;
    }
    return(num & (num - 1)) === 0;
}

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(6));

/*Question 4: Capitalize Words
Write a program that accepts a string as input, capitalizes the first letter of each word in the 
string, and then returns the result string.
*/
function capitalizeFirstLetter(str) {
    let words = str.split(" ");

    if (words.length === 0) {
        return "";
    }

    console.log("Array of words:", words);

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
    }

    let result = words.join(" ");
    return result;
}

console.log(capitalizeFirstLetter("hi"));
console.log(capitalizeFirstLetter("i love programming"));

/*Question 5: Reverse Integer
Write a program that takes an integer as input and returns an integer with reversed digit 
ordering.
*/
function reverseInterger(num){
    let reversed =parseInt(Math.abs(num).toString().split('').reverse().join(''));

    if(num <= 0){
        reversed *= -1;
    }

    return reversed
}

console.log(reverseInterger(500));

/*Question 6: Count Vowels
Write a program that counts the number of vowels in a sentence.*/
function countVowels(sentence) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    let count = 0;

    sentence = sentence.toLowerCase();
    for (let char of sentence) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("Hello World"));