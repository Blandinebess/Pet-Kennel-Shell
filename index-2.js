function createPet(name, species) {
    return {
        name: name,
        species: species,
        happiness: 50,
        energy: 100,
        play: function() {
            this.happiness += 10;
            this.energy -= 20;
            return `We played with ${this.name}! Happiness is now ${this.happiness},and energy is now ${this.energy}.`;
        },
        status: function() {
            return `Pet name: ${this.name}, species: ${this.species}, happiness: ${this.happiness}, energy: ${this.energy}`;
        },
        rest: function() {
            this.energy = Math.min(this.energy +100, 100);
            return `${this.name} has rested. Energy is now fully restore to  ${this.energy}.`;
        }
    };
}
    
    const pet1 = createPet("Makou", "dog");
    const pet2 = createPet("Loulou", "cat");
    // pet1
    console.log(pet1.status());
    console.log(pet1.play());
    console.log(pet1.rest());
    // pet2
    console.log(pet2.status());
    console.log(pet2.play());
    console.log(pet2.rest());
