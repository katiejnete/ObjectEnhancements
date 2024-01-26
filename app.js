// same keys and values
function createInstructor(firstName,lastName) {
    return {
        firstName,
        lastName
    }
}

// computed property names
const favoriteNumber = 42;
let instructor = {
    firstName: 'Colt',
    [favoriteNumber]: 'That is my favorite!'
}

// object methods
instructor = {
    firstName: 'Colt',
    sayHi() {return 'Hi!'},
    sayBye() {return this.firstName + ' says bye!'}
};

// createAnimal function
function createAnimal (species, verb, noise) {
    return {
        species,
        [verb](){
            return noise;
        }
    };
}



