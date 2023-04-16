//map( )
//This method creates a new array with the results of calling a provided function on every element in this array.
//eg:

/*const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);

console.log(map1);


//filter( )
//This method creates a new array with only elements that passes the condition inside the provided function.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length < 6);

console.log(result);

//reverse( )
//This method is used to arrange/reverse array’s elements .

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
console.log(fruits);


//concat( )
//This method is used to merge two or more arrays and returns a new array, without changing the existing arrays.

let str1 = new String( "This is string one" ); 
let str2 = new String( "This is string two" ); 
let str3 = str1.concat(str2.toString());
console.log(+str3);

//includes( )
//This method checks if an array includes the element that passes the condition, returning true or false as appropriate.

const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));


//findIndex( )
//This method returns the index of the first element in an array that pass the test in a testing function.

const array2 = [5, 12, 8, 130, 44];
const search = element => element > 13;
console.log(array2.findIndex(search));

//fill( )
//This method fills the elements in an array with a static value and returns the modified array.

var arr=["AngularJS","Node.js","JQuery"];  
var result1=arr.fill("Bootstrap");  
console.log(arr); 


//slice( )
//This method returns a new array with specified start to end elements.

const fruit = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruit.slice(1, 3);
console.log(fruit);

//every()
const ages = [32, 33, 16, 40];

console.log(ages.every(checkAge));

function checkAge(age) {
  return age > 18;
}*/


let capital = {Nepal:'kathamndu', india:'delhi', austrila:'sydney', denmark:'copenhagen', finland:'helsinki'}
// capital.toArray().sort();

for(var country in capital){

    console.log(`capital of ${country} is ${capital[country]}`);
}


const sentence = "I am Good boy in class.";
 console.log(sentence.substring(9,2));


