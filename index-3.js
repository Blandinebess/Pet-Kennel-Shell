const Pet = [];
function createPet(name, species, happiness, energy) {
  return {
    name: name,
    species: species,
    happiness: happiness,
    energy: energy,
    maxenergy: energy,
    // Method to display pet status
    status: function () {
      return `Pet Name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}, Energy: ${this.energy}/${this.maxEnergy}.`;
    },

    // Method to feed the pet
    feed: function () {
      this.energy = Math.min(this.energy + 20, this.maxEnergy);
      this.happiness += 10;
      return `You fed ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}/${this.maxEnergy}.`;
    },

    // Method to play with the pet
    play: function () {
      if (this.energy >= 20) {
        this.energy -= 20;
        this.happiness += 5;
      } else {
        return `${this.name} is too tired to play! Consider feeding or resting.`;
      }
    },

    // Bonus method: Rest to restore energy fully
    rest: function () {
      this.energy = this.maxEnergy;
      return `${this.name} has rested. Energy is now fully restored to ${this.energy}/${this.maxEnergy}.`;
    },

    // Game mechanic to slightly decrease happiness over time
    loseHappiness: function () {
      this.happiness = Math.max(this.happiness - 5, 0);
    },
  };
}

// Initialize kennel array
const kennel = [];

// Create multiple pets
const pet1 = createPet("Fluffy", "Dog", 100, 80);
const pet2 = createPet("Mittens", "Cat", 90, 70);
const pet3 = createPet("Bubbles", "Fish", 50, 60);
const pet4 = createPet("Chirpy", "Bird", 80, 75);
const pet5 = createPet("Spots", "Hamster", 70, 85);
const pet6 = createPet("Shadow", "Rabbit", 95, 90);

// Add pets using push
kennel.push(pet1, pet2, pet3, pet4, pet5);

// Add last pet using bracket notation
kennel[kennel.length] = pet6;

// Log kennel contents using console.table()
console.table(kennel.map(pet => ({
    Name: pet.name,
    Species: pet.species,
    Happiness: pet.happiness,
    Energy: `${pet.energy}/${pet.maxEnergy}`
})));

// Use forEach to make each pet rest
kennel.forEach(pet => console.log(pet.rest()));
// Log updated kennel contents
console.table(kennel.map(pet => ({
    Name: pet.name,
    Species: pet.species,
    Happiness: pet.happiness,
    Energy: `${pet.energy}/${pet.maxenergy}`
})));
