//Exercise #1
// Define two arrays, evens and odds filled with even
// and odd numbers
// Using the spread operator, make a new
// array with numbers that contains all of the evens and odds
let evens = [2, 4, 6, 8, 10];
let odds = [1, 3, 5, 7, 9];
let allNums = [...evens, ...odds];
console.log(allNums);

//Exercise #2
// Define an object favoriteFoods that has keys representing three of
// your favorite foods and the values should be the restaurant where
// they are from
// Make another object and do the same thing but ask your
// imaginary friend what their favorite foods are.
// Use the spread operator to build a final allFoods with the
// items from the two objects you just built
const MyFavoriteFoods = {
  restaurantA: "dish1",
  restaurantC: "dish2",
  restaurantB: "dish3",
};
const friendFavoriteFoods = {
  restaurantE: "dish4",
  restaurantD: "dish5",
  restaurantF: "dish6",
};
const allFoods = { ...MyFavoriteFoods, ...friendFavoriteFoods };
console.log(allFoods);

// Exercise #3
// Define your favorite movie character in an object
// with three keys: name, age, and hometown
// Use destructuring to extract all three keys into variables
// log all three variables
// Use the spread operator to extract two of the keys but not the third
// store and log this new set of variables
// Now we are going to give this person a pet
// Use destructuring to do the following
// 1) add a pet object to your person
// 2) define three variables (age, breed, name) outside of the object
// 3) add those variables to your pet
// log the most important thing about it: the pet's name
let favCharacter = {
  name: "Letitia (Leti) Lewis",
  age: 25,
  hometown: "Southside Chicago",
};
// let { name, age, hometown } = favCharacter;
// console.log(favCharacter);
// console.log(name, age, hometown);

let { hometown, ...other } = favCharacter;
console.log(favCharacter);
// console.log(name, age, character );

const pet = {};
favCharacter = { ...favCharacter, pet };
let petName = "Bruce";
let petAge = 1;
let petBreed = "Shoggoth";
favCharacter.pet.Name = petName;
favCharacter.pet.Age = petAge;
favCharacter.pet.Breed = petBreed;
console.log(favCharacter.pet.Name, favCharacter.pet.Age, favCharacter.pet.Breed);
