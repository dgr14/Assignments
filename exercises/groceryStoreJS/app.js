var shopper = {
    groceryCart: ['milk', 'eggs', 'bacon', 'beer', 'cheese', 'more beer'], 
    species: 'Human',
    age: 26,
    alive: true,
    firstName: 'john',
    lastName:'jacob jingleheimerschmidt',
    fullName: () => {
        return this.firstName + ' ' + this.lastName
    }
};