// The Object
var Person = {}

// The function

var identity = function() {

    var firstName = 'John'
    var lastName = 'Doe'
    
    Person.firstName = firstName;
    Person.lastName = lastName;
    
    console.log(Person)
    
}

//identity();

// Passing the object to the function

var identity2 = function(person) {
    console.log(Person)
}

Person.firstName = 'John';
Person.lastName = 'Doe';

identity2(Person);