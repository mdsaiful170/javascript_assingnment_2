//..1/ Write a function to convert Celsius to Fahrenheit. The function should take a single argument, which is the temperature in Celsius.

function celsiusToFahrenheit(celsius) {
    //fahre. to cel.
    return (celsius * 9 / 5) + 32

    //cel. to fahre.
    //return (5/9) * (fahrenheit - 32)
}

console.log(celsiusToFahrenheit(0));// 32,
console.log(celsiusToFahrenheit(25))//77
//===================================================================





//..2 /Write a function to check if a number is even. The function should take a single argument, which is the number to check.

function isEven(number) {
    return number % 2 == 0;

}
console.log(isEven(4))//true
console.log(isEven(7))//false
//=========================================================





// 3../ Write a function to sum two numbers. The function should take two arguments, which are the numbers to sum.

function sum(a, b) {
    return a + b;
}
console.log(sum(3, 4));//7
console.log(sum(10, 20));//30
//====================================================



// 4 ../Write a function to count the number of vowels in a string. The function should take a single argument, which is the string to search.

function findSmallestNum(array) {
    return Math.min(...array);//... spread() Methods
}

console.log(findSmallestNum([3, 5, 1, 9]));//1
console.log(findSmallestNum([-1, -5, 0, 10]))//-5

// =====================================================


// ..5 Write a function to count the number of vowels in a string. The function should take a single argument, which is the string to search.


function coutnVowel(text) {
    return (text.match(/[aeiouAEIOU]/gi) || []).length  // toatal vowel text covert to lenght 
}

console.log(coutnVowel("hello world")) // vowel = e, o, o ===convert to  length = 3
console.log(coutnVowel("javascript"))// a a i = length = 3

console.log(coutnVowel("dkd kdk"))// 0

//===================================================================


//6../Write a function to get the first element of an array. The function should take a single argument, which is the array.


function getFirstElement(arr) {
    return arr[0];
    //or 
    // return arr.at(0);
}

console.log(getFirstElement([1,2,3])); // 1
console.log(getFirstElement(["a", "b", "c"])); // "a"

//================================================================





// 7../ Write a function to check if an array is empty. The function should take a single argument, which is the array. 

function arryEmpty(arrbox) {
    return arrbox.length == 0;
}

console.log(arryEmpty([])); //true
console.log(arryEmpty([1, 5, 6])) //false

//==========================================


// 08 / Write a function to return the factorial of a number. The function should take a single argument, which is the number.

function factorial(number) {
    if (number === 0 || number === 1) return 1;

    for (let i = number - 1; i >= 1; i--) {
        number *= i;
    }
    return number;
}

console.log(factorial(5))//120
console.log(factorial(8))//40320

//another way

function factorialbox(num) {
    if (num == 0 || num == 1) return 1;
    return num * factorial(num - 1)
}
console.log(factorialbox(5))//120
console.log(factorialbox(7))//5040
console.log(factorialbox(10))//3628800
//==================================================




//09//6. Write a function to reverse a string. The function should take a single argument, which is the string to reverse.

function reverseString(string) {
    return string.split("").reverse('').join("")
}

console.log(reverseString("hello"))//olleh
console.log(reverseString("world"))//dlrow
//==================================================================



//10 / Write a function to convert a string to lowercase. The function should take a single argument, which is the string to conver
function tolowerCase(strtext) {
    return strtext.toLowerCase();
}
console.log(tolowerCase("HELLOW WORLD"))//hello world
console.log(tolowerCase("JavaScript"))//javascript

//================================================================




//11/Write a function to find the length of a string. The function should take a single argument, which is the string.
function stringLength(st) {
    return st.length;

}
console.log(stringLength("hello"))//5
console.log(stringLength("javascript"))//10
console.log(stringLength("typeScript"))//10

//===================================================================
// 12 / Write a function to merge two arrays. The function should take two arguments, which are the arrays to merge.

function arryMarge(arr1, arr2) {
    return arr1.concat(arr2);
}

console.log(arryMarge([1, 2, 3], [4, 5, 6]))//[ 1, 2, 3, 4, 5, 6 ]
console.log(arryMarge(['a', 'b', 'c'], ['A', 'B', 'C']))//[ 'a', 'b', 'c', 'A', 'B', 'C' ]

//OR another way
function arrySpread(a1, a2, a3) {
    return [...a1, ...a2, ...a3]
}
console.log(arrySpread([1, 2, 3], ["A", "B", "C"], ["volvo", "Ford", "audi"])); //[1,2,3,"A","B","C","volvo","Ford","audi"]

//or another way
function flatarry(ar) {
    return ar.flat()

}
console.log(flatarry([[1, 2, 3], [2, 3, 4]])) //[1,2,3,2,3,4]

//===================================================================================



//13//Write a function to get the last element of an array. The function should take a single argument, which is the array.
function getlistElement(arr) {
    return arr.at(-1)
    //    return arr[2]
}
console.log(getlistElement([1, 2, 3])) //3
console.log(getlistElement(['a', 'b', 'c']) //c
)
//================================================================ 


//14 / Write a function to get the first character of a string. The function should take a single argument, which is the string.

function getFirstCharacter(str) {
    return str.charAt(0);
    // Or return str.at(0)
}
console.log(getFirstCharacter("hello")); // "h",
console.log(getFirstCharacter("world")); // "w",

//=======================================================



//15// Write a function to find the sum of all elements in an array. The function should take a single argument, which is the array.
function sumarry(arr) {

    return eval(arr.join('+'))

    //or 
    // return arr.reduce((total, value) => total + value, 0);

    //or 

    // let sum = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     sum += arr[i]
    // }
    // return sum

    //or

    // let sum = 0; 
    // arr.forEach(num => sum = sum + num);
    // return sum
}

console.log(sumarry([1, 2, 3, 4]))//10
console.log(sumarry([-1, -2, -3, -4, -5, -6]))//-21
console.log(sumarry([1.5, 2.5, 3.5])); // 7.5



