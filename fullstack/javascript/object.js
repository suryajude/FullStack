console.log("YESHUA is the true living GOD")

const names = {}
console.log(names)

// one of the methods to assign an value with a key value pair
names['first name']  = "Surya"
names['last name'] = "senthil kumar"
console.log(names)

// one of the methods to assign an value with a key value pair
names.age = 24
names.place = "Uthamapalayam"

console.log(names)

// getting a specific value
console.log(names["first name"] + " is living in "+names.place)

// storing some objects in a single object
const person1 = {"FirstName" : "surya", "LastName": "Senthil Kumar"}
const person2 = {}
person2.FirstName = "Daniel"
person2.LastName = "Judah"
const personCollection = {person1, person2}
console.log(personCollection.person1.FirstName+ " details are "+personCollection.person1)
console.log(personCollection.person2.FirstName+ " details are "+personCollection.person2)
console.log(personCollection)

// we can also create a constructor of the object 
const gurukulam = new Object();
console.log(gurukulam);
