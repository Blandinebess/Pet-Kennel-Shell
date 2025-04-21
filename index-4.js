const Pet=[];
function createPet(name, species) {
  return {
    name,
    species,
    happiness: Math.floor(Math.random() * 50) + 50, // Random happiness (50-100)
    feed: function () {
      this.happiness += Math.floor(Math.random() * 10) + 5; // Increase randomly
      console.log(`Feeding ${this.name}! Happiness is now ${this.happiness}.`);
    },
    status: function () {
      return `${this.name} the ${this.species}: Happiness ${this.happiness}`;
    },
  };
}
const dogKennel = [
  createPet("Makou", "Dog"),
  createPet("Milo", "Dog"),
  createPet("Rio", "Dog"),
  createPet("Lucky", "Dog"),
  createPet("Rocky", "Dog"),
];

const catKennel = [
  createPet("Luna", "Cat"),
  createPet("Mittens", "Cat"),
  createPet("Joy", "Cat"),
  createPet("Nala", "Cat"),
  createPet("Kaly", "Cat"),
];

const fishTank = [
  createPet("Ricky", "Fish"),
  createPet("Baleine", "Fish"),
  createPet("sniper", "Fish"),
  createPet("Soleil", "Fish"),
  createPet("Requin", "Fish"),
];
dogKennel.forEach((pet) => pet.feed());
catKennel.forEach((pet) => pet.feed());
fishTank.forEach((pet) => pet.feed());
console.log("Dog Kennel Status:");
dogKennel.forEach((pet) => console.log(pet.status()));

console.log("Cat Kennel Status:");
catKennel.forEach((pet) => console.log(pet.status()));

console.log("Fish Tank Status:");
fishTank.forEach((pet) => console.log(pet.status()));