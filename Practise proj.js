// var list = [1,2,3,4,5,6,7,88,5,66,99]

//maximum number finding
// function max(){
//     list.sort();
//     return list;
// }

// max();


// delete any value 
// var list = [1,2,3,4,5,6,7,88,5,66,99]
// const index = list.indexOf(88)
// if (index > -1){
//     list.splice(index,1)
// }
// console.log(list)






// How to measure code performance
// function addNum(n){
//     return (n*(n+1)/2);
// }
// console.log(addNum(7))


// function addNumTwo(n){
//     let sum = 0;
//     for (let i = 1; i <=n; i++) {
//         sum += i;
//     }
//     return sum;
// };
// addNumTwo(3);

// var t1, t2;

// t1 = Date.now();
// addNum(2500000000);
// t2 = Date.now();
// console.log(`${(t2-t1)/1000} secs`)

// t1 = Date.now();
// addNumTwo(2500000000);
// t2 = Date.now();
// console.log(`${(t2-t1)/1000} secs`)






// String reverse
// Hello!!
// method 1
// function strRev(str){
//     const arr = str.split('');
//     arr.reverse();
//     const res = arr.join("");
//     return res;   
// }
// strRev('Hello')
// // 2nd method using loop
// function strRev(str){
//     res = "";
//     for (let i = 0; i < str.length; i++){
//         let add = str[i];
//         res = add + res;
//     }
//     return res;
// }
// strRev('Hello')




// palindrome Algo
// function palindrome(str){
//     str = str.toLowerCase();
//     const stri = str.split('');
//     stri.reverse();
//     rev = stri.join('');

//     if (rev == str){
//         console.log('True'); 
//     }else console.log('False')

// }
// palindrome('Madam')

//Palindrone for number
// function palindrome(num){
//     num = num.toString();
//     let newNum = num.split('');
//     newNum.reverse();
//     var retn = newNum.join('');

//     if (num == retn){
//         return console.log('True')

//     }else console.log('False')
// }
// palindrome(12121)



// // Reverse Int Algo
// function revInt(num){
//     const now = num.toString();
//     const str = now.split('');
//     str.reverse();
//     let rev = str.join('');
//     rev = parseInt(rev);
//     return rev;


//     if (rev < 0){
//         return rev * -1;

//     }else return rev


// }
// revInt(-31);






// Max occerence in string
// function maxOccr(str){
//     var charObj = {};
//     var maxChar = "";
//     var maxCounter = 0;

//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];
//         charObj[char] = charObj[char] + 1 || 1;

//         if (charObj[char]> maxCounter){
//             maxChar = char;
//             maxCounter = charObj[char];
//         }


//     }
//     return maxChar
// }
// maxOccr('Hello')





// fizzbuzzz fizz divisible for 3 and buzz for 5 and fizzbuzz for 3 and 5 all together
// function fizzbuzz(num){
//     for (let i = 1; i <= num; i++) {
//         if (i%3 === 0 && i%5 === 0){
//             console.log('Fizzbuzz')

//         }else if (i%5 === 0){
//             console.log('Fizz')
//         }else if (i%3 === 0){
//             console.log('Buzz')
//         }else console.log(i)
//     }
// }
// fizzbuzz(30)





// Capitalize Algo - ArPan iS BESt to Arpan Is Best
// function capString(str){
//     var char = str.split(' ');
//     var arrOfWord = [];

//     for (let i = 0; i < char.length; i++) {
//         var word = char[i];
//         arrOfWord.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
//     }

//     return arrOfWord.join(' ');
// }
// capString("ArPan iS BESt")





// Chunk Algo
// function addChunk(arr, size){
//     let res = [];

//     for (let i = 0; i < arr.length; i++) {
//         const item = arr[i];
//         const last = res[res.length - 1];

//         if (!last || last.length === size){
//             res.push([item])
//         }else {
//             last.push(item)
//         }

//     }
//     return (res, last)
// }
// addChunk([1,2,3,4,5,6,7,8],2);




//Anagram Algo (1st variation)
// function anagrm(string1, string2){
//    string1 = string1.toLowerCase().replace(/[\W_]+/g,"")
//    string2 = string2.toLowerCase().replace(/[\W_]+/g,"")

//    if (string1.length !== string1.length){
//         return false
//    }

//    const string1obg = {};

//    for (let i = 0; i < string1.length; i++) {
//        const aChar = string1[i];
//        string1obg[aChar] = string1obg[aChar] + 1 || 1;
//     }
//     for (let i = 0; i < string2.length; i++) {
//         const bChar = string2[i];

//     if (!string1obg[bChar]){
//         return false;

//     }else {
//         string1obg[bChar]--;

//     }
// }   return true;
// }
// anagrm('hello', 'hlleo')




// My own logic of anagram
// function anagrm(stringA, stringB){
//     stringA = stringA.toLowerCase().replace(/[\W_]+/g,"")
//     stringB = stringB.toLowerCase().replace(/[\W_]+/g,"")
//     arrOne = stringA.split('').sort()
//     arrTwo = stringB.split('').sort()

//     arrOne = arrOne.join('')
//     arrTwo = arrTwo.join('')

//     if (arrOne === arrTwo){
//         return true
//     }else return false
// }
// anagrm('Hello', 'hlleo!!')







// CeaserCipher
// function ceaserCipher(stringA, shift){
//     const alpbtArr = "abcdefghijklmnopqrstuvwxyz".split("");
//     var res = "";

//     for (let i = 0; i < stringA.length; i++) {
//         const char = stringA[i];
//         var indx = alpbtArr.indexOf(char)

//         const encodedIndx = (indx + shift) % 26;
//         res += alpbtArr[encodedIndx];


//         if (indx === -1){
//             res += char;
//             continue;
//         }
//     }
//     return res;
// }
// ceaserCipher('hello!!123', 1)




// let person = {
//     name: 'Arpan'
// };
// let person2 = person;

// person2.name = "Arp"; 

// console.log(person)
// output =>{name: 'Arp'}



// Step Algo 
// function setTime(n){
//     for (let i = 1; i <= n; i++) {
//         let step = "";

//     //     for(let hash = i; hash > 0; hash--)
//     //     step += '#';

//     //     for(let space = n - i; space > 0; space--)
//     //     step += " ";

//     //     console.log(step)
//     step += "#".repeat(i);
//     step += " ".repeat(n - 1)
//     console.log(step)

//     }
// }
// setTime(4)





//Pyramid Algo
// function pyramidAlgo(n){
//     for (let i = 1; i <= n; i++) {
//         const padding = " ".repeat(n-i);
//         const hash = "#".repeat(i * 2 - 1);
//         console.log(padding + hash + padding)
//     }
// }
// pyramidAlgo(4)


// Find the vowels in string
// function vowel(str){
//     str = str.toLowerCase();
//     const vowels = "aeiou".split("");
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];

//         for (let j = 0; j < vowels.length; j++) {
//             const vow = vowels[j];
//             if (char === vow){
//                 count++;
//             }

//         }

//     }
//     return console.log(`Vowel count is ${count}`);
// }
// vowel('I love India')



// Searching Algo
// const inventory = ["bikes", "backpacks", "laptop"]

// console.log(inventory.includes("backpacks"))
// console.log(inventory.indexOf("backpacks"))
// console.log(inventory.find(item => item === "backpacks"))


// String Pattern Algo
// function stringPatterAlgo(text, pattern){
//     let count = 0;
//     for (let i = 0; i < text.length; i++) {
//         for (let j = 0; j < pattern.length; j++) {
//             const patternChar = pattern[j];
//             if (patternChar !== text[i + j]){
//                 break;
//                 }

//             if (j === pattern.length - 1) {
//                 count++;
//             }

//         }

//     }
//     return count;
// }
// stringPatterAlgo('lolol', 'lol')


// Implementation of Swap helper function 
// function swap(arr, i, j){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = arr[i];
// }

// The minimum sum 1+2+3+4 is  and the maximum sum is 2+3+4+5. arr = [1+2+3+4+5]
// function miniMaxSum(arr) {
//     let freeArrGreat = 0; 
//     let n = arr.length;
//     arr.sort(function(a, b){return a - b});
//     var counter = 0;
//     for(let i = 0; i<n-1; i++){
//         var sum1 = arr[i];
//         counter = counter + sum1;  
//     }
//     for(let i = 1; i<n; i++){
//         var sum2 = arr[i];
//         freeArrGreat = freeArrGreat + sum2;
//     }
//     console.log(counter, freeArrGreat)

// }



// Reverse an array with own logic
// let arr = [ 1, 2, 3, 4, 5, 6]
// function revArr(arr){
//     var arrNew = [];
//     var n = arr.length;
//     for (let i = n-1; i >= 0; i--) {
//         var elem = arr[i]
//         arrNew.push(elem);

//     }
//     console.log(arrNew)
// }
// revArr(arr);



// Maximum And Minimum element in an Array
// let arr = [ 100, 990, 3, 4, 5, 6]
// function minMax(arr){
//    let ele=0;
//     for (let i = 0; i < arr.length; i++) {  
//         if (arr[i] >arr[i+1]){
//             ele = arr[i];
//         }         
//     }


// }
// minMax(arr);
// let arr = [ 100, 990, 3, 4, 5, 6]
// function minMax(arr){
//    let ele=0;
//     for (let i = 0; i < arr.length; i++) {     
//         if (arr[i] <arr[i+1]){
//             ele = arr[i];
//         }
//     }



// }
// minMax(arr);
// let arr = [ 100, 990, 3, 4, 5, 6]
// function minMax(arr){
//    let ele=0;

//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] > arr[i+1]){
//             ele = arr[i + 1];
//         }

//     }
//     console.log(ele)

// }
// minMax(arr);


// Max occurence in bithday cake candle number
// function birthdayCakeCandles(ar) {
//     var maxHeight = Math.max(...ar);
//     var maxHeightCount = 0;  
//     for(var i = 0; i < ar.length; i++){
//         if (ar[i] == maxHeight){
//             maxHeightCount = maxHeightCount + 1;
//         }
//     }
//     console.log(maxHeightCount);
//     return maxHeightCount;
// }



//Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// function maxSubArr(arr, num){
//     if(num>arr){
//         console.log("Beware!!! Don't put wrong things here")
//     }
//     else{
//         let maxNum = 0;
//         for(let i = 0; i<arr.length - num+1; i++){
//             let tmp = 0;
//             for(let j = 0; j<num; j++){
//                  tmp += arr[i+j]
//         }
//         if(tmp>maxNum){
//             maxNum = tmp;
//         }
//     }
//     return maxNum
// }    
// }
// maxSubArr([1,2,3,4,5,6,7,8],4)






// arr = [3,2,1,4,5,1]
// let arr = [3,2,1,4]
// function duplicate(arr){

//     for (let i = 0; i<arr.length; i++){
//        let counter = 0;
//         let cal1 = arr[i];
//         for(let j = 0; j<arr.length; j++){
//             let cal2 = arr[j]
//             if (cal1 === cal2){
//                 counter++; 
//               if(counter > 1){
//                    return counter;
//                         } 
//             }
//         }
//     }
// }

// let result=duplicate(arr)
// if(result>1)
// console.log(true)
// else
// console.log(false)




//Left rotation by 2
// arr=[1,2,3,4,5,6];
// num=2;
// function rotation(arr, num){
//     const rotatedArr = arr.concat();
//     for (let i = 0; i < num; i++) {
//         const element = rotatedArr.shift();
//         rotatedArr.push(element);

//     }
//     return rotatedArr
// }

// rotation(arr, num)

//Right rotation by 2
// arr=[1,2,3,4,5,6];
// num=2;
// function rotation(arr, num){
//     const rotatedArr = arr.concat();
//     for (let i = 0; i > arr.length-num; i++) {
//         const element = rotatedArr.shift();
//         rotatedArr.push(element);
//     }
//     return rotatedArr;
// }

// rotation(arr, num)



// Output: should be indian through a object we need to connect b array
// const a = [{ name: 'Mauparna', active: true},
// 	{ name: 'Matt', active: false}]
// const b = { 'Mauparna': 'Indian', 'Matt': 'Canadian'}

//  const result = a.filter(res=>res.active).map(op=> b[op.name])
// console.log(result)






// function test({...a,b,c}){
//     //code here
//     }
//     Is It work or not? -  NO




// How to replace a string element with number element in array
// let arr = ['Arpan', 'Mauprarna']
// arr[0] = 1; -> To access any element in arr
// arr.shift(); -> To delete first element in arr
// arr.unshift('Arpan');-> To add first element in arr
// arr.pop()-> To delete last element in arr
// arr.push('Mauparna')-> To add last element in arr
// console.log(arr)    



// How to reset array 
// let arr = ['Arpan', 'Mauprarna']
// let arra = [];
// while(arr.length>0){
//     arr.pop()
// }
// console.log(arr)


// let arr = ['Arpan', 'Mauprarna']
// let ar2 = arr;
// ar2 = [];
// console.log(ar2)


// How to add a number 3 in middle of the array
// let arr = ['Arpan', 'Mauprarna']
// arr.splice(1,0, 'Hanami')
// console.log(arr)





// How to add a number 3 in middle of the array
// let arr = ['Arpan', 'Mauprarna', 'ram','shyam','ria', 'dev']
// arr.splice(1,2, 3)
// console.log(arr)






// Create a object dynamically, using function in js
// const objects = {};
// for (let x = 0; x < 5; x++) {
//   objects[x] = {
//     name: 'Arpan'
//   };
// }
// console.log(objects)




// use getData in every object : the output should come "mau,puja,diyaa"
// const obj1 = {
//     name: "mau",
//     getData: function () {
//         return this.name;
//     }
// }

// const obj2 = {
//     name: "puja"
// }

// const obj3 = {
//     name: "diya"
// }

// console.log(obj1.getData.call(obj1), obj1.getData.call(obj2), obj1.getData.call(obj3))




// let obj = {};
// if (true) {
//   console.log(obj)
// }
// ---- Will print { ... }




// var obj;
// if(true){
// console.log(obj)
// }
// VM48:3 undefined
// undefined





// let obj;
// if(true){
// console.log(obj)
// }
// VM59:1 Uncaught SyntaxError: Identifier 'obj' has already been declared





// console.log("task 1");
// setTimeout(() => {
//     console.log("task 2");
// })

// Promise.resolve().then(() => {
//     console.log("task 3");
// })

// console.log("task 4")
// "task 1"
// "task 4"
// "task 3"
// "task 2"


// array filter
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);




// array reduce
// const array1 = [1, 2, 3, 4];
// const initialValue = 0;
// const sumWithInitial = array1.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
// console.log(sumWithInitial);




// var a; 
// console.log(a) 
// //undefined
// console.log(a==null)
////true





// var emp1 = { EmpId: 60, EmpName: "John" }
// var emp2 = emp1;
// console.log(emp1.EmpId) -> 60
// console.log(emp2.EmpId) -> 60
// emp2.EmpId = 50
// console.log(emp1.EmpId) -> 50
// console.log(emp2.EmpId) -> 50






// function app() {
//     const obj = { a: 1 };
//     obj.a = 2;
//     console.log(obj);
// }
// console.log(app());

//     a: 2
//   undefined
// for const object, we can assign value to object like this
// It will not throw any error



// display the name where id=3
// delete the same object
// display the whole array 
// arr = [
//     { id: 1, name: 'abc' },
//     { id: 2, name: 'cde' },
//     { id: 3, name: 'def' },
//     { id: 4, name: 'fgg' }
// ]
// arr.forEach(ele => {
//     if (ele.id === 3) {
//         console.log(ele.name)
//     }
// });

// arr.forEach(ele => {
//     if (ele.id === 3) {
//         delete ele.id
//         delete ele.name
//     }
// });
// console.log(arr)





// what will be the value of a and what datatype will be add to a and whaat would happen
// function abc() {
//     a = 10;
// }
// abc();
// console.log(a)
// 10 - output
// number





// How to assign value to a, so that it will not throw error.
// const a=[1,2,3,4];
// a.push(5)
// console.log(a)






// "const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log('The index of this number is: ' + i);
//   }, 3000);}
// How does this code executes. if any problem how to fix that. "
// const arr = [10, 12, 15, 21];
// for (let i = 0; i < arr.length; i++)     
//     {
//         const ele = arr[i];
//         setTimeout(
//             function () {
//                 console.log(`The index of ${ele} number is: ` + i);
//             }, 3000);
//     }






// Swap two number without using third variable a=10 b=20
// let a = 10;
// let b = 20;

// [a,b] = [b,a]
// console.log(a,b)







// var x = 10;
// function abc() {
// console.log(x);
// let x = 20;
// }
// abc();
// console.log(abc());
// VM48:3 Uncaught ReferenceError: Cannot access 'x' before initialization
//     at abc (<anonymous>:3:13)
//     at <anonymous>:6:1






// var a=8;
// var b=a++;
// var c=++a;
// console.log(a,b,c)
// 10,8,10
