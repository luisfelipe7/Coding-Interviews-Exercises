/*
 * Author: Felipe Castro
 * File: Basic02.js
 * Information: File with multiple objects of Javascript
 * How to run this file: Just use -> node Basic01.js or include the js file on a html/jsp file to use it
*/


console.log('===== Objects in JavaScript ===== \n');
console.log('Creating a dog object and accessing its properties');
var dog1 = {
    name: 'Perla', 
    color: 'Brown', 
    breed: 'Zaguate'
}
var dog2 = {
    name: 'Lila', 
    color: 'White', 
    breed: 'Zaguate'
}
console.log('Also we can easily create an object with an array of dog objects');
var person = {
    name: 'Felipe',
    lastName: 'Castro',
    age: 24, 
    isDead: false,
    pets: [
        dog1,dog2
    ]
}
console.log('Printing the elements, we can access the properties by using object.property or object["property"]: ');
function printDogObject(dog){
    console.log('Name :'+dog.name);
    console.log('Color :'+dog.color);
    console.log('Breed :'+dog.breed);
}
function printPersonObject(person){
    console.log('Name :'+person['name']);
    console.log('Last Name :'+person.lastName);
    console.log('Age :'+person.age);
    console.log('IsDead :'+person.isDead);
    console.log('Pets ');
    for(pet of person.pets){
        printDogObject(pet);
    }
}
printPersonObject(person);
console.log('\n');

console.log('Creating an object using new and accessing its properties');
const person2 = new Object();
person2.name = 'Felipe';
person2.lastName = 'Castro';
person2.bornYear = 1997;
console.log('Adding a function to the person in charge of printing the properties:');
person2.displayInformation=function(){
    console.log('Name :'+this.name);
    console.log('Age :'+this.lastName);
    console.log('BornYear :'+this.bornYear);
}
console.log('\n');




console.log('===== Creating a constructor to create objects easily ===== \n');
// Constructor with parameters, also we can add methods to the constructor
function Student(name,course,actualGrade,age){
    this.name = name;
    this.course = course;
    this.actualGrade = actualGrade;
    this.age = age;
    this.approved = function(){
        return (actualGrade >= 70);
    }
    this.showInformation = function(){
        console.log('Name :'+this.name);
        console.log('Course :'+this.course);
        console.log('Actual Grade :'+this.actualGrade);
        console.log('Age :'+this.age);
        if(this.approved()){
            console.log('The student is having the grade to approve the course');
        }else{
            console.log('The student is not having the grade to approve the course');
        }
        console.log('\n');
    }
}
console.log('Using the constructor to create multiple objects');
var student1 = new Student('Luis','Programming I',85,24);
var student2 = new Student('Felipe','Programming II',69,19);
student1.showInformation();
student2.showInformation();
console.log('\n');



console.log('===== Creating a class like in other languages and using inheritance ===== \n');
// Defining the class with the constructor
class Animal { 
    // Constructor
    constructor(name,age,isUnderExtinction) {
        this.name=name;
        this.age=age;
        this.isUnderExtinction=isUnderExtinction;
    }
    // Methods
    displayInformation(){
        console.log('Name: '+this.name);
        console.log('Age: '+this.age);
        console.log('Is Under Extinction: '+this.isUnderExtinction);
    }
}
// Extending from Animal to create a new class
class DomesticAnimal extends Animal {
    // Constructor
    constructor(name,age,isUnderExtinction,familyName,isTrained) {
        super(name,age,isUnderExtinction);
        this.familyName = familyName;
        this.isTrained = isTrained;
    }
    // Methods
    displayInformation(){ 
        super.displayInformation();
        console.log('Family Name: '+this.familyName);
        console.log('Is trained? '+this.isTrained);
    }
}

var animal1 = new Animal('Tiger',12,true);
animal1.displayInformation();
var animal2 = new DomesticAnimal('Dog',3,false,'Castro Sánchez',true);
animal2.displayInformation();



















