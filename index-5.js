class Pet {
  constructor(name) {
    this.name = name;
    this.happiness = 50;
    this.energy = 50;
  }


play() {
    this.happiness += 10;
    this.energy -= 15;
    if (this.energy < 0) {
      this.energy = 0;
    }
    return `You played with ${this.name}! Happiness is now ${this.happiness}, Energy is now ${this.energy}.`;
  }

  // Feed method increases energy by 20, capped at 100.
  feed() {
    this.energy += 20;
    if (this.energy > 100) {
      this.energy = 100;
    }
    return `You fed ${this.name}! Energy is now ${this.energy}.`;
  }
}
// --- Creating Kennels of Pets ---
const dogs = [new Pet("Makou"), new Pet("Milo"), new Pet("Rio")];
const cats = [new Pet("Luna"), new Pet("Mittens")];
const fish = [new Pet("sniper"), new Pet("Soleil")];

// --- Helper Function: Log Status ---
function logStatus(pets, kennelType) {
  console.log(`\n${kennelType} Status:`);
  pets.forEach((pet) => {
    console.log(
      `• ${pet.name} → Energy: ${pet.energy}, Happiness: ${pet.happiness}`
    );
  });
}

// --- Play with Pets ---
// For each pet in a kennel, play a random number of times (between 1 and 4).
// This simulates playing with some pets more than others.
function playWithPets(pets, kennelType) {
  console.log(`\nPlaying with ${kennelType}:`);
  pets.forEach((pet) => {
    // Generate a random number between 1 and 4
    let playTimes = Math.floor(Math.random() * 4) + 1;
    console.log(`Playing with ${pet.name} ${playTimes} time(s):`);
    for (let i = 0; i < playTimes; i++) {
      console.log(pet.play());
    }
  });
}

// --- Feed Pets Conditionally ---
// Iterates through each pet in the kennel array,
// and if a pet's energy is below 30, feeds the pet.
function feedPetsConditionally(pets, kennelType) {
  console.log(`\nFeeding ${kennelType} with Energy below 30:`);
  pets.forEach((pet) => {
    if (pet.energy < 30) {
      console.log(pet.feed());
    }
  });
}

// --- Simulation ---
// 1. Log the initial status of each kennel.
console.log("Initial Pet Status:");
logStatus(dogs, "Dogs");
logStatus(cats, "Cats");
logStatus(fish, "Fish");

// 2. Play with the pets.
playWithPets(dogs, "Dogs");
playWithPets(cats, "Cats");
playWithPets(fish, "Fish");

// 3. Log the status of each pet after playing.
console.log("\nStatus After Playing:");
logStatus(dogs, "Dogs");
logStatus(cats, "Cats");
logStatus(fish, "Fish");

// 4. Iterate (for each kennel) and feed any pet with energy below 30.
feedPetsConditionally(dogs, "Dogs");
feedPetsConditionally(cats, "Cats");
feedPetsConditionally(fish, "Fish");

// 5. Finally, log the updated status of each pet after the conditional feeding.
console.log("\nFinal Pet Status After Conditional Feeding:");
logStatus(dogs, "Dogs");
logStatus(cats, "Cats");
logStatus(fish, "Fish");
