//
// Object destructuring
//

// const person = {
//   username: 'Laércio',
//   age: 36,
//   location: {
//     city: 'Campina Grande',
//     temp: 32
//   }
// };

// const { username = 'Anonymous', age } = person;
// console.log(`${username} is ${age}.`)

// const { city, temp: temperature } = person.location;
// console.log(`It's ${temperature} in ${city}.`)

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin',
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(`${publisherName}`)

//
// Array destructuring
//

// const address = ['275 Capitão João Alves de Lira street', 'Campina Grande', 'Paraíba', '58400-560'];
// const [, city, state = 'Pernambuco'] = address;
// console.log(`You are in ${city}, ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);