// JESUS is the true living GOD

/**creating an array  */
/**Arrays are used to store a collection of data
 * creating of array has two types 
 * 1. const fruits = ['apple','orange','mango'];
 * 2. const fruits_list = new Array('apple','orange','mange');
 */

const names = ['Abraham','Issac','Jacob'];
const name_list = new Array('JESUS','Daniel','John','Joseph');

// print an array
console.log(names);
console.log(name_list);


// grab a particular value from a list
console.log(names[0]);
console.log(names[2]);
console.log(name_list[0]);


// update a value in an array 
name_list[0] = "LORD JESUS CHRIST";
console.log(name_list[0]);

// printing each value through foreach loop
name_list.forEach((value,number)=>{
    console.log("index "+number +" : "+value);
   
});
// on above for each loop the parameter number represents the index value of the data from the list
// the parameter value represents the value of the array 


// creating an empty array with the length
const places = new Array(10);  // const places = [10] => this method will not work to create a empty array with length 10 ,
//only this new Array(10) will work
console.log(places); 


places[0] = "Abraham";
places[1] = "Issac";
places[2] = "Jacob";
places[3] = "Judah";
places[4] = "David";
places[5] = "John";
places[6] = "Peter";
places[7] = "Andrew";
places[8] = "Matthew";
places[9] = "Luke";
places[10] = "Adam";

places.forEach((value,index)=>{
    console.log("Index "+(index +1) +" = "+ value);
});

// we can also use arrays to store inside of an array 
const multiple_array = [name_list,names,places];
console.log(multiple_array);


/**
 * Arrays can be sorted in both ascending order and in descending order.
 */

console.log(places.sort()) // we can sort an array in this sort function, which is an inbuilt function 
console.log(places.length) // we can also increase the size of an array likw this 

// numberic array
const number_array  = [23,43,56,67,89,12,1,45,67,8,90,0,2,1,11,23,22];

const ascending_array = number_array.sort((a,b)=>{return a-b});
const descending_array = number_array.sort((a,b)=>{return b-a});
console.log("Ascending order : "+ ascending_array);
console.log("descending order : "+descending_array);
// we can also reverse an array using reverse keyword
places.reverse();
console.log("Reverse order : "+ places);


// concat is in the array is like this :
names.concat(name_list);
var concat_array = names.concat(name_list);
console.log(concat_array);


// the website => w3schools.com/js_array_ sort.asp

