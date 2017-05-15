

const faker = require('faker');

module.exports.seed = db =>
  // Create 10 random website users (as an example)
  Promise.all(Array.from({ length: 10 }).map(() => db.insert({
    email: faker.internet.email(),
  }).into('users')));
