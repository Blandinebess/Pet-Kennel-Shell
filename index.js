const Pet = {
    name:"Fluffy",
    species: "dog",
    happiness: 52,

    play() {
        this.happiness +=10;
        console.log(`we played with  ${this.name}! Happiness is after play: ${this.happiness}. `);
    },
    feed() {
        this.happiness += 20;
        return(`we fed ${this.name}! Happiness is after feed: ${this.happiness}.`);
    },
    status() {
        return(`Pet name: ${this.name}, species: ${this.species}, happiness: ${this.happiness}`);
    },
    rename(newName) {
        this.name = newName;
        return(`Pet name changed to: ${this.name}`);
    }

};
console.log(Pet.status());
console.log(Pet.play());
console.log(Pet.feed());
console.log(Pet.rename(Buddy));
console.log(Pet.status());


