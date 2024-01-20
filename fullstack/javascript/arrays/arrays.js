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

places.forEach((value,index)=>{
    console.log("Index "+(index +1) +" = "+ value);
});

// we can also use arrays to store inside of an array 
const multiple_array = [name_list,names,places];
console.log(multiple_array);


