// 1. Create person object with properties firstName and lastName and add coresponding values.

let person = {
    firstName: 'Daniela' ,
    lastName: 'Blazevska'
};

// 2. Print the values of the properties of the object. Use both approaches.

console.log(person['firstName']);
console.log(person['lastName']);

/*console.log(person.firstName);
console.log(person.lastName);*/

// 3. Print the whole firstName and lastName of the person.

console.log(person.firstName + ' ' + person.lastName);

// 4. Add the property age and coresponding value to the person object. Use both approaches.

person.age = 23;
person['age'] = 23;

// 5. Print how old the person is.

console.log ('Daniela is' + ' ' + person.age + ' ' + 'years old');

// 6. Find the type of the variable person.

console.log ('Type of variable - ' + typeof person);

// 7. Create another person object. Populate the object with coresponding values.

let person1 = {
    firstName: 'Elizabeth',
    lastName: 'Diller',
    age: 66
};

// 8. Find out which person is older.

if (person.age == person1.age) {
    console.log ('They are both the same age');
} else if (person.age > person1.age) {
    console.log ( person.firstName + ' ' + 'is older than' + ' ' + person1.firstName);
} else if (person1.age > person.age) {
    console.log (person1.firstName + ' ' + 'is older than' + ' ' + person.firstName);
}

/*switch (true) {
    case person.age > person1.age: {
      console.log(person.firstName + ' is older than ' + person1.firstName);
      break;
    }
    case person.age < person1.age: {
      console.log(person1.firstName + ' is older than ' + person.firstName);
      break;
    }
    default:
      console.log("They are the same age");
  }
*/

// 9. Find out how many years the person1 is older/younger from person2.

switch (true) {
    case person.age > person1.age: {
      console.log( person.firstName +  ' is ' + (person.age - person1.age) + ' year/s older than '  + personTwo.firstName);
      break;
    }
    case person.age < person1.age: {
      console.log( person.firstName + ' is ' + (person1.age - person.age) + ' year/s younger than' + person1.firstName);
      break;
    }
    default:
      console.log('They are both the same age');
  }

// 10. Create another peson object. Populate the object with coresponding values.

let person2 = {
    firstName: 'Claude',
    lastName: 'Monet',
    age: 87
};

// 11. Find the sum of the years of the people.

let sumAge = person.age + person1.age + person2.age;
    console.log (sumAge);

// 12. Find the average of the years of the people.

let averageYears = (person.age + person1.age + person2.age) / 3;
    console.log (averageYears);

// 13. Find out who is the youngest of all three people.

let Daniela = person.age
let Elizabeth = person1.age
let Claude = person2.age

switch (true) {
    case Daniela < Elizabeth && Daniela < Claude : { 
        console.log (person.firstName + ' is the youngest of all three people');
    break;
    }
    case Elizabeth < Daniela && Elizabeth < Claude : {
        console.log (person1.firstName + ' is the youngest of all three');
    break;
    }
    case Claude < Daniela && Claude < Elizabeth : {
        console.log (person2.firstName + ' is the youngest of all three');
    break;
    }
    default:
        console.log ('They all have the same age');
}
